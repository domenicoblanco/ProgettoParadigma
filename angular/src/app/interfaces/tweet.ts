import { User } from './user';

export interface NewTweet {
    tweet: string;
    image: string | ArrayBuffer;
    isStory: boolean;
}

export interface Tweet {
    createdAt: string;
    _id: string;
    tweet: string;
    _author: User;
    image: string | ArrayBuffer;
    isStory: boolean;
}
