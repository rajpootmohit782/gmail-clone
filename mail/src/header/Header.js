import React from "react";
import "../css/header.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon></ReorderIcon>
        </IconButton>
        <img
          style={{ height: "55px", marginTop: "5px" }}
          alt="Logo"
          src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
        />
      </div>
      <div className="header__middle">
        <div className="search-mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search Mail" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
