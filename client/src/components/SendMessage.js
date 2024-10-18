import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";

import "../App.css"

const SendMessage = ({scroll, to}) => {

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
          alert("Enter valid message");
          return;
        }

        const { uid, displayName } = auth.currentUser;

        //TODO: call addDoc function to add a new message to Firestore Database
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "messages"), {
                text: message,
                from: displayName,
                to: to,
                createdAt: serverTimestamp(),
                uid,
        });
        // Here are the fields we want for a message document (copy paste to appropriate argument location when calling addDoc):

        setMessage(""); // sets the message in the message bar back to empty
        scroll.current.scrollIntoView({ behavior: "smooth" });
        
    };
   

    return (
        <form className="SendMsgBar" onSubmit={(event) => sendMessage(event)}>
        <label htmlFor="messageInput" hidden>
            Enter Message
        </label>
        <input
            id="messageInput"
            name="messageInput"
            type="text"
            className="form-input__input"
            placeholder="type message..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
        </form>
  );
};
export default SendMessage;