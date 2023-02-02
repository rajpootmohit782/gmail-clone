import "../css/login.css";
import { useState } from "react";
//import firebase from "firebase/compat/app";
import { auth, provider } from "../app/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
//import { Provider } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const dispatch = useDispatch();
  // console.log(auth, provider);

  const login = () => {
    let password = pass;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("signin ==>", user.user.email);
        dispatch(signin(user.user.email));
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signup = () => {
    // auth.signInWithPopup(provider).then((user) => {
    //   console.log(user);
    // });
    // auth.signInAnonymously().then((user) => {
    //   console.log(user.var);
    //   dispatch(signin(user));
    // });
    const password = pass;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("signup ==>", user.user.email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="loginwrapper">
      <div className="login">
        <img
          alt="Gmail"
          src="https://cdn.vox-cdn.com/thumbor/poDiPWB_ZM1VtgA-FclJVc-Hrl4=/0x0:1320x880/2000x1333/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
        />
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={pass}
          placeholder="Password"
          onChange={(e) => setpass(e.target.value)}
        />

        <button onClick={signup} className="gmail_login">
          Signup with Gmail
        </button>
        <button onClick={login} className="gmail_login">
          Login with Gmail
        </button>
      </div>
    </div>
  );
};
export default Login;
