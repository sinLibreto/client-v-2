import { IReaction } from "../../reaction/interfaces/reaction.interfaces";
import { PostModel } from "../models/post.model";

export interface PostResponse {
  _id: string;
  userId: string;
  username: string;
  email: string;
  avatarColor: string;
  profilePicture: string;
  bgColor: string;
  commentsCount: number;
  imgVersion?: string;
  imgId?: string;
  videoId?: string;
  videoVersion?: string;
  feelings?: string;
  gifUrl?: string;
  privacy?: string;
  reactions?: IReaction;
  createdAt?: Date;
}
export interface GetPostsQuery {
  _id?: string;
  username?: string;
  imgId?: string;
  gifUrl?: string;
  videoId?: string;
}

export interface GetPostsQuery {
  _id?: string;
  username?: string;
  imgId?: string;
  gifUrl?: string;
  videoId?: string;
}

export interface PostResponse {
  success: boolean;
  message: string;
  post?: PostModel; 
}
