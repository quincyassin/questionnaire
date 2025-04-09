import React from "react";
import { Link } from "react-router-dom";

export interface UserInfo {
  username: string;
  name: string;
  password: string;
  remember?: boolean;
}

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
