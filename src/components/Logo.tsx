import { Space, Typography } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      {/*使用Link组件跳转 */}
      <Link to="/">
        <Space>
          <Title>
            <AppleOutlined />
          </Title>
          <Title>博客</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
