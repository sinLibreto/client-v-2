export interface IReaction{
  _id?: string;
  username: string;
  avatarColor: string;
  type: string;
  postId: string;
  profilePicture: string;
  createdAt?: Date;
  userTo?: string;
  comment?: string;
}
export interface Reactions {
  like: number;
  love: number;
  happy: number;
  wow: number;
  sad: number;
  angry: number;
}
export interface ReactionJob {
  postId: string;
  username: string;
  previousReaction: string;
  userTo?: string;
  userFrom?: string;
  type?: string;
  reactionObject?: IReaction;
}
export interface QueryReaction {
  _id?: string;
  postId?: string;
}
export interface Reaction {
  senderName: string;
  type: string;
}
