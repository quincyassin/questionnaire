import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";

const MainLayout: React.FC = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        Questions &copy;2025-02 By ricardo
      </Footer>
    </Layout>
  );
};

export default MainLayout;
