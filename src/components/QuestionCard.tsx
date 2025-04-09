import { Button, Divider, Space, Tag, Popconfirm, Modal } from "antd";
import React from "react";
import {
  LineChartOutlined,
  EditOutlined,
  StarOutlined,
  StarFilled,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./QuestionCard.module.scss";

type QuestionCard = {
  _id: number;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: React.FC<QuestionCard> = (props: QuestionCard) => {
  const nav = useNavigate();

  const [modal, contextHolder] = Modal.useModal();

  const handleDelete = () => {
    modal.confirm({
      title: "确定删除吗？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后无法恢复，请谨慎操作！",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        console.log("OK");
      },
    });
  };

  const { _id, title, isStar, isPublished, answerCount, createdAt } = props;

  const [stared, setStard] = React.useState(isStar);

  const handleStar = () => {
    setStard(!stared);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {stared && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: "12px 0" }} />
      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={stared ? <StarFilled /> : <StarOutlined />}
              type="text"
              size="small"
              onClick={handleStar}
            />
            <Popconfirm title="确定复制吗？" okText="确定" cancelText="取消">
              <Button icon={<CopyOutlined />} type="text" size="small" />
            </Popconfirm>
            <Button
              icon={<DeleteOutlined />}
              type="text"
              size="small"
              onClick={handleDelete}
            />
            {contextHolder}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
