import { PostType } from "../../store/actions/types";

const Post: React.FC<PostType> = ({ title, body }) => {
  return (
    <div style={{ background: "lightsilver" }}>
      <h1>{title}</h1>
      <p>{body}</p>
      <hr />
    </div>
  );
};

export default Post;
