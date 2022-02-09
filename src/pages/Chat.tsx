import React, { useEffect, useState, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Header from "../components/Header";

import "../styles/App.css";

const UserList: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textAreaMessage, setTextAreaMessage] = useState("");
  const [showAttachedFile, setShowAttachedFile] = useState(false);
  const filePickerRef = useRef(null);

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      console.log(readerEvent);
      setSelectedFile(readerEvent.target.result);
      setShowAttachedFile(true);
    };
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100 p-8 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto space-y-12 grid grid-cols-1 h-[76vh] overflow-y-scroll">
          <div className="place-self-start">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none">
              Hey, there! It's been a while!
            </div>
          </div>

          <div className="place-self-start text-left">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none">
              Wanted to know if you wanted to get lunch sometime this week?
            </div>
          </div>

          <div className="place-self-start text-left">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none">
              Or next week. I'm also free during the evenings next week.
            </div>
          </div>

          <div className="place-self-end text-right">
            <div className="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
              Oops! Sorry for the late response!
            </div>
          </div>

          <div className="place-self-end text-right">
            <div className="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
              I'd love to get lunch sometime next week!
            </div>
          </div>

          <div className="place-self-end text-right">
            <div className="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
              Do you have any places in mind where you'd want to meet?
            </div>
          </div>
        </div>
        {showAttachedFile && (
          <div className="relative right-[139px]">
            <AttachmentIcon fontSize="large" />
            <IconButton>
              <CancelIcon
                fontSize="small"
                onClick={() => {
                  setShowAttachedFile(false);
                }}
              />
            </IconButton>
          </div>
        )}
        <div className="flex mt-[22px]">
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea1"
            placeholder="Your message"
            onChange={(e) => {
              setTextAreaMessage(e.target.value);
              console.log(e.target.value);
            }}
            value={textAreaMessage}
          ></textarea>
          <IconButton>
            <AttachFileIcon
              onClick={() => {
                filePickerRef.current.click();
              }}
              fontSize="large"
            />
          </IconButton>
          <input
            type="file"
            ref={filePickerRef}
            hidden
            onChange={addImageToPost}
          />
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
