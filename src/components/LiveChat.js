import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      //   console.log("api Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="h-[390px] ml-2 p-2 w-full border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-ful p-2 m-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On form submit");
          dispatch(
            addMessage({
              name: "Priyanshu Patel",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-96 px-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="px-2 mx-2 bg-green-100
        "
        >
          {" "}
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
