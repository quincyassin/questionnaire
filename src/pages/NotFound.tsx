import React from "react";
import { Result } from "antd";

const NotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="很抱歉，你要查找的网页找不到。"
    />
  )
};

export default NotFound;
