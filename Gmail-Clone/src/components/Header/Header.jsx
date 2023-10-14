import "./Header.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Avatar, IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search Email..." />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
