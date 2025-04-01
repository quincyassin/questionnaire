import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Space, Divider } from "antd";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ManageLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            创建问卷
          </Button>
          <Divider />
          <Button type="default" size="large" icon={<BarsOutlined />}>
            我的问卷
          </Button>
          <Button type="default" size="large" icon={<StarOutlined />}>
            星标问卷
          </Button>
          <Button type="default" size="large" icon={<DeleteOutlined />}>
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
