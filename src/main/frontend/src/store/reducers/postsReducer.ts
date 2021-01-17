import { GET_POSTS, PostsDispatch, PostType } from "../actions/types";

export const postsReducer = (
  state: Array<PostType> | Array<any> = [],
  action: PostsDispatch
) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
