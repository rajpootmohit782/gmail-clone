import Emaillist from "./emailList.js/Emaillist";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import ReceivedEmaillist from "./emailList.js/Receivemail";
import { useSelector } from "react-redux";
import Emaildetails from "./emailList.js/Emaildetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { selectedUser } from "./features/userSlice";

import "./styles.css";
import Compose from "./compose/Compose";
import { selectsendMessageisOpen } from "./features/mailSlice";
import Login from "./login/Login";

export default function App() {
  const isMessageOpen = useSelector(selectsendMessageisOpen);
  const user = useSelector(selectedUser);
  //const user = null;
  console.log(isMessageOpen);
  return (
    <Router>
      {user ? (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<ReceivedEmaillist />} />
              <Route path="/mail" element={<Emaildetails />} />
              <Route path="/sent" element={<Emaillist />} />
            </Routes>
          </div>
          {isMessageOpen && <Compose />}
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}
