import "../css/emaillist.css";
import { IconButton, Avatar } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "../features/mailSlice";

const Emaildetails = () => {
  const history = useNavigate();
  const selectMaildetails = useSelector(selectedMail);
  return (
    <div>
      <div className="emaillist__setting">
        <div className="emaillist__settingLeft">
          <IconButton>
            <ArrowBackIcon onClick={() => history("/")} />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emaillist__settingRight">
          <p>{selectMaildetails.from}</p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaildetails_message">
        <div className="emaildetails__header">
          <div className="emaildetails__headerLeft">
            <h4>{selectMaildetails.from}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emaildetails__headerRight">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>

        <div className="emaildetails__middleheader">
          <div className="emaildetails__middleheaderLeft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{selectMaildetails.subject}</h4>
            <br />
            <p>{selectMaildetails.name}</p>
          </div>
          <div className="emaildetails__middleheaderRight">
            <p>{selectMaildetails.time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div classname="emaildetails__body">
          <p>{selectMaildetails.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Emaildetails;
