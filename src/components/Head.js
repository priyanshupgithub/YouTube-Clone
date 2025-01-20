import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); //whatever we are typing or search
  const [suggestions, setSuggestions] = useState([]); // whatever the results(suggestions are shown)
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    //make an api call every key press
    //but if the difference between 2 api calls is <200ms
    // decline the api call

    const timer = setTimeout(() => {
      //it makes the api call after 200 second
      getSearchSuggestions();
    }, 200);

    return () => {
      //decline the api call
      clearTimeout(timer); // when we press the key before 200ms then(it triggers the reconcilliation process and clears the things up) to clear the setTimeOut(clear the timer).
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    setShowSuggestions(true);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg items-center">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-6 mx-3"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 justify-center ">
        <div className=" flex w-[65%] m-auto">
          <input
            className="w-[89%] border border-gray-400 p-2 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 left-[32%] w-[41%] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
