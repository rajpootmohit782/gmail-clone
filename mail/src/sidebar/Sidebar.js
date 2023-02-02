import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useDispatch } from "react-redux";
import "../css/sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { openSendMessage } from "../features/mailSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const draftmgs = (e) => {
    navigate("./sent");
  };
  const inboxmgsclick = (e) => {
    navigate("./");
  };
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number="234"
        isActive={true}
        inboxmgsclick={inboxmgsclick}
      />
      <SidebarOptions Icon={WatchLaterIcon} title="Snoozed" number="234" />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Important"
        number="234"
      />
      <SidebarOptions
        Icon={SendIcon}
        title="Sent"
        number="234"
        draftmgs={draftmgs}
      />
      <SidebarOptions Icon={DraftsIcon} title="Drafts" number="234" />
      <SidebarOptions Icon={LabelIcon} title="Category" number="234" />
      <SidebarOptions Icon={DeleteIcon} title={"[Map]/Trash"} number="234" />
      <SidebarOptions Icon={FindInPageIcon} title="Documents" number="234" />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number="234" />
      <hr />

      <h3 className="sidebarOptions__heading">Meet</h3>
      <SidebarOptions Icon={VideocamIcon} title={"New meeting"} number="234" />
      <SidebarOptions Icon={KeyboardIcon} title={"join meeting"} number="234" />
    </div>
  );
};

export default Sidebar;
