import "./EmailList.css";
import { Mail, Section } from "../../components";

import { IconButton, Checkbox } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";

import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";
import { useEffect } from "react";

import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState();

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "emails"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmails(newData);
      console.log(emails, newData);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [setEmails]);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />

          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title={"Primary"} color={"red "} selected />
        <Section Icon={PeopleIcon} title={"Social"} color={"#1a73e8"} />
        <Section Icon={LocalOfferIcon} title={"Promotions"} color={"green"} />
      </div>
      <div className="emailList__list"></div>
      {emails &&
        emails
          .filter((email) => email.timestamp && email.timestamp.toDate)
          .slice()
          .sort((a, b) => b.timestamp.toDate() - a.timestamp.toDate())
          .map((email) => (
            <Mail
              key={email.id}
              title={email.to}
              subject={email.subject}
              description={email.message}
              time={
                email.timestamp &&
                email.timestamp.toDate().toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
              }
            />
          ))}

      <Mail
        id={"1"}
        title={"Appwrite"}
        subject={"New Blog"}
        description={"Created a new Blog using Appwrite as Backend"}
        time={"3pm"}
      />
      <Mail
        id={"2"}
        title={"Appwrite"}
        subject={"New Blog"}
        description={"Created a new Blog using Appwrite as Backend"}
        time={"3pm"}
      />
    </div>
  );
}

export default EmailList;
