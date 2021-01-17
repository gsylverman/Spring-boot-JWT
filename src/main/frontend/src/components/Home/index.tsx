import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { getPosts } from "../../store/actions/postsActions";
import { PostType } from "../../store/actions/types";

import Post from "../utils/Post";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const posts = useSelector((state: RootStore) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (posts && !posts.length) dispatch(getPosts());
  }, [dispatch, posts]);

  console.log(posts);
  return (
    <div>
      Home
      <div>
        {posts.map((item: PostType) => (
          <Post key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
