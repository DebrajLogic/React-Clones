import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/133953/pexels-photo-133953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="sidebar background image"
        />
        <Avatar
          className="sidebar__avatar"
          src="https://avatars.githubusercontent.com/u/81313461?v=4"
        />
        <h2>Debraj Dey</h2>
        <h4>debrajdey9696@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4,500</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("nodejs")}
        {recentItem("redux-toolkit")}
        {recentItem("react-router-dom")}
      </div>
    </div>
  );
}

export default Sidebar;
