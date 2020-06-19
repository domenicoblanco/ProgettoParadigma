const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const Model = require('../models/tweet');
const Tweet = Model.Tweet;
const Story = Model.Story;
const autenticationMiddleware = require('../middlewares/auth');
const { checkValidation } = require('../middlewares/validation');


router.get('/', function(req, res, next) {
  Tweet.find().populate("_author", "-password").exec(function(err, tweets){
    if (err) return res.status(500).json({error: err});
    
    Story.find().populate("_author", "-password").exec(function(err, stories){
      if (err) return res.status(500).json({error: err});
      res.json(tweets.concat(stories));
    });
  });
});

router.get('/:id', function(req, res, next) {
  Tweet.findOne({_id: req.params.id})
    .populate("_author", "-password")
    .exec(function(err, tweet){
      if (err) return res.status(500).json({error: err});
      if(!tweet) return res.status(404).json({message: 'Tweet not found'})
      
      Story.findOne({_id: req.params.id})
        .populate("_author", "-password")
        .exec(function(err, story){
          if (err) return res.status(500).json({error: err});
          if(!story) return res.status(404).json({message: 'Tweet not found'})
          res.json(tweet.concat(story));
        });
    });
});

router.post('/',autenticationMiddleware.isAuth, [
  check('tweet').isString().isLength({min: 1, max: 280})
], checkValidation, function(req, res, next) {
  var CustomTweet = Tweet;
  if(req.body.isStory){
    CustomTweet = Story;
  }
  const newTweet = new CustomTweet(req.body);
  newTweet._author = res.locals.authInfo.userId;
  newTweet.save(function(err){
    if(err) {
      return res.status(500).json({error: err});
    } 
    res.status(201).json(newTweet);
  });
});

router.put('/:id', autenticationMiddleware.isAuth, [
  check('tweet').isString().isLength({min: 1, max: 280})
], checkValidation, function(req, res, next) {
  if(req.body.isStory)
    
    Story.findOne({_id: req.params.id}).exec(function(err, story) {
      if (err) {
        return res.status(500).json({
          error: err,
          message: "Error reading the tweet"
        });
      }
      if (!story) {
        return res.status(404).json({
          message: "Tweet not found"
        })
      }
      if (story._author.toString() !== res.locals.authInfo.userId) {
        return res.status(401).json({
          error: "Unauthorized",
          message: "You are not the owner of the resource"
        });
      }
      story.tweet = req.body.tweet;
      story.save(function(err) {
        if(err)  return res.status(500).json({error: err});
      });
      return res.status(201).json(story);
    });
  else
    Tweet.findOne({_id: req.params.id}).exec(function(err, tweet) {
      if (!err && tweet) {
        if (tweet._author.toString() !== res.locals.authInfo.userId) {
          return res.status(401).json({
            error: "Unauthorized",
            message: "You are not the owner of the resource"
          });
        }
        tweet.tweet = req.body.tweet;
        tweet.save(function(err) {
          if(err) 
            return res.status(500).json({error: err});
        });
        return res.status(201).json(tweet);
      }
    });
});

router.delete('/:id', autenticationMiddleware.isAuth, function(req, res, next) {
  Tweet.findOne({_id: req.params.id}).exec(function(err, tweet) {
    if (!err && tweet) {
      if(tweet._author.toString() !== res.locals.authInfo.userId) {
        return res.status(401).json({
          error: "Unauthorized",
          message: "You are not the owner of the resource"
        });
      }
      Tweet.remove({_id: req.params.id}, function(err) {
        if(err) {
          return res.status(500).json({error: err})
        }
        return res.status(200).json({message: 'Tweet successfully deleted'})
      });
    } else {
      Story.findOne({_id: req.params.id}).exec(function(err, story) {
        if (err) {
          return res.status(500).json({
            error: err,
            message: "Error reading the tweet"
          });
        }
        if (!story) {
          return res.status(404).json({
            message: "Tweet not found"
          })
        }
        if(story._author.toString() !== res.locals.authInfo.userId) {
          return res.status(401).json({
            error: "Unauthorized",
            message: "You are not the owner of the resource"
          });
        }
        Story.remove({_id: req.params.id}, function(err) {
          if(err) {
            return res.status(500).json({error: err})
          }
          res.json({message: 'Tweet successfully deleted'})
        });
      });
    }
  });
});

module.exports = router;