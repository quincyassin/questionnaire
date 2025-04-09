import { Button, Modal, Space, Table, Tag, Typography } from "antd";
import React from "react";
import QuestionCard from "../../components/QuestionCard";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const data: QuestionCard[] = [
  {
    _id: 1,
    title: "问卷1",
    isStar: true,
    isPublished: true,
    answerCount: 10,
    createdAt: "2023-01-01",
  },
  {
    _id: 2,
    title: "问卷2",
    isStar: true,
    isPublished: false,
    answerCount: 5,
    createdAt: "2023-02-01",
  },
  {
    _id: 3,
    title: "问卷3",
    isStar: true,
    isPublished: true,
    answerCount: 20,
    createdAt: "2023-03-01",
  },
];

const columns = [
  {
    title: "问卷标题",
    dataIndex: "title",
    key: "title",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    key: "isPublished",
    render: (isPublished: boolean) =>
      isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>,
  },
  {
    title: "答题人数",
    dataIndex: "answerCount",
    key: "answerCount",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const Trash: React.FC = () => {
  const [questionList, setQuestionList] = React.useState(data);

  const { Title } = Typography;

  const [selectIds, setSelectIds] = React.useState<string[]>([]);

  const [modal, contextHolder] = Modal.useModal();

  const handleDelete = () => {
    modal.confirm({
      title: `确定彻底删除选中的 ${selectIds.length} 条数据吗？`,
      icon: <ExclamationCircleOutlined />,
      content: "删除后无法恢复，请谨慎操作！",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        console.log("OK");
      },
    });
  };

  const TableElement = (
    <>
      <div>
        <Space>
          <Button>恢复</Button>
          <Button danger onClick={handleDelete} disabled={selectIds.length === 0}>
            彻底删除
          </Button>
          {contextHolder}
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectIds(selectedRowKeys as string[]);
          },
        }}
        pagination={false}
        rowKey={(q) => q._id}
      />
    </>
  );

  return (
    <>
      <Title level={3}>回收站</Title>
      {questionList.length === 0 && <div>暂无问卷</div>}
      {questionList.length > 0 && TableElement}
    </>
  );
};

export default Trash;
