import "../css/emaillist.css";
import EmailBody from "./EmailBody";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
import { useEffect, useState } from "react";
import { selectedUser } from "../features/userSlice";

import { db } from "../app/firebase";
import { useSelector } from "react-redux";
const ReceivedEmaillist = () => {
  const user = useSelector(selectedUser);
  console.log(user);
  const [emails, setEmails] = useState();
  const [updatedemails, setupdatedEmails] = useState();

  useEffect(() => {
    db.collection("emails").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
  }, []);

  console.log(emails);
  // console.log(ans);

  // useEffect(() => {
  //   emails
  //     ? // console.log(Object.keys(emails))

  //       //  if (Object.keys(emails) !== user) {
  //       emails.map(({ id, data }) => {
  //         console.log(data.from);
  //         if (data.from === user) {
  //           setupdatedEmails({
  //             id: id,
  //             data: data
  //           });
  //         }
  //       })
  //     : console.log(updatedemails);
  //   //   console.log(Object.keys(emails))

  //   //   if (Object.keys(emails) !== user) {
  //   //     emails.map(({ id, data }) => {
  //   //       if (data.from === user) {
  //   //         setupdatedEmails({
  //   //           id: id,
  //   //           data: data
  //   //         });
  //   //       }
  //   //       // ( setupdatedEmails('')
  //   //     });
  //   //   }
  // }, [user]);
  // console.log(updatedemails);

  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
      {emails ? (
        emails.map(({ id, data }) => {
          if (data.to === user) {
            return (
              <EmailBody
                key={id}
                name={data.to}
                subject={data.subject}
                message={data.message}
                time={new Date(
                  data.timestamp?.seconds * 1000
                ).toLocaleTimeString()}
                from={data.from}
              />
            );
          }
        })
      ) : (
        <h2>'loading'</h2>
      )}
    </div>
  );
};

export default ReceivedEmaillist;
