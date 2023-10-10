import { Avatar } from "@mui/material";
import "./Posts.css";
import InputOption from "../InputOption/InputOption";

//Icons
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Posts({
  name = "Debraj Dey",
  description = "description",
  message,
  photoUrl = "https://avatars.githubusercontent.com/u/81313461?v=4",
}) {
  return (
    <div className="posts">
      <div className="posts__header">
        <Avatar src={photoUrl} />
        <div className="posts__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="posts__body">
        <p>{message}</p>
      </div>

      <div className="posts__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Comment" />
      </div>
    </div>
  );
}

export default Posts;
