import "../css/sidebarOptions.css";
import { useNavigate } from "react-router-dom";
const SidebarOptions = ({
  Icon,
  title,
  number,
  isActive,
  draftmgs,
  inboxmgsclick
}) => {
  // const navigate = useNavigate();
  return (
    <div
      onClick={draftmgs ? draftmgs : inboxmgsclick}
      className={`sidebarOptions ${isActive && "sidebarOptions--active"}`}
    >
      <Icon />
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
