import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import "../css/emaillist.css";
import { useNavigate } from "react-router-dom";
import { openMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
const EmailBody = ({ name, subject, message, time, from }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const openMessageholder = () => {
    dispatch(
      openMessage({
        name,
        subject,
        message,
        time,
        from
      })
    );

    history("/mail");
  };
  return (
    <div className="emailbody" onClick={() => openMessageholder()}>
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__mgs">
          <p>
            <b>{subject}</b> {message}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailBody;
