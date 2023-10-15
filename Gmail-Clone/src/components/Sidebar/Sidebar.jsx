import "./Sidebar.css";
import { SidebarOption } from "../../components";
import { useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

import { Button, IconButton } from "@mui/material";

import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon />}
        fontSize="large"
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={<InboxIcon />}
        title={"Inbox"}
        number={54}
        selected={true}
      />
      <SidebarOption
        Icon={<StarBorderOutlinedIcon />}
        title={"Starred"}
        number={54}
      />
      <SidebarOption
        Icon={<AccessTimeOutlinedIcon />}
        title={"Snoozed"}
        number={54}
      />
      <SidebarOption
        Icon={<LabelImportantIcon />}
        title={"Important"}
        number={54}
      />
      <SidebarOption Icon={<NearMeOutlinedIcon />} title={"Sent"} number={54} />
      <SidebarOption
        Icon={<InsertDriveFileOutlinedIcon />}
        title={"Drafts"}
        number={54}
      />
      <SidebarOption Icon={<ExpandMoreIcon />} title={"More"} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
