import React from "react";
import { Link } from "react-router-dom";

const UserInfo: React.FC = () => {
  return (
    <>
      <Link to="/login">
        <span>登录</span>
      </Link>
    </>
  );
};

export default UserInfo;
