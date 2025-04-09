import { Typography, Empty } from "antd";
import React from "react";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";

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

const Star: React.FC = () => {
  const { Title } = Typography;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Title>星标问卷</Title>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <ListSearch />
        </div>
      </div>
      {data.length === 0 && <Empty description="暂无星标问卷" />}
      {data.length > 0 &&
        data.map((item) => {
          return <QuestionCard {...item} key={item._id} />;
        })}
    </>
  );
};

export default Star;
