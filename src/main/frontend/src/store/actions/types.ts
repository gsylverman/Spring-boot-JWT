export const GET_POSTS = "get_posts";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsDispatch {
  type: typeof GET_POSTS;
  payload: Array<PostType>;
}
