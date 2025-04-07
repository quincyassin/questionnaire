import React, {useState} from "react";
import { Link } from "react-router-dom";

export interface UserInfo {
  username: string;
  name: string;
  password: string;
}

const UserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  function useSessionStorage(userInfo: UserInfo) {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  }

  return (
    <>
      <Link to="/login">
        <span>登录</span>
      </Link>
    </>
  );
};

export default UserInfo;
