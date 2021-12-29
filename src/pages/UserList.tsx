import React from "react";
import Header from "../components/Header";
import User from "../components/User";

import "../styles/App.css";

const UserList: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="ml-10 mt-5 md:grid md:justify-between md:grid-cols-3 md:gap-3">
        <User
          feePerMessage={"$250 Per message"}
          feePerConvo={"$1000 per convo"}
          name={"Logan Paul"}
          title={"Youtuber"}
          description={"Description"}
          user={{}}
        />
      </div>
    </div>
  );
};

export default UserList;
