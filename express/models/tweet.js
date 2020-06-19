const mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    _author: {type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: 'User'},
    tweet: {type: String, minlenght: 1, maxlenght: 280},
    createdAt: {type: Date, default: Date.now()},
    image: {type: String, default: ''},
    isStory: {type: Boolean, default: false}
});

const Tweet = mongoose.model('Tweet', tweetSchema);

var storySchema = mongoose.Schema({
    _author: {type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: 'User'},
    tweet: {type: String, minlenght: 1, maxlenght: 280},
    createdAt: {type: Date, required: true, default: Date.now()},
    image: {type: String, default: ''},
    isStory: {type: Boolean, default: true}
}, {timestamps: true});
storySchema.index({createdAt: 1},{expireAfterSeconds: 120});

const Story = mongoose.model('Story', storySchema);

module.exports.Tweet = Tweet;
module.exports.Story = Story;