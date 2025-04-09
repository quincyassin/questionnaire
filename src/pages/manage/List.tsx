import React from "react";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";
import Title from "antd/es/typography/Title";

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
    isStar: false,
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
  {
    _id: 4,
    title: "问卷4",
    isStar: false,
    isPublished: false,
    answerCount: 0,
    createdAt: "2023-04-01",
  },
];

const List: React.FC = () => {
  const [questionList, setQuestionList] = React.useState(data);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Title>我的问卷</Title>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <ListSearch />
        </div>
      </div>
      <div>
        {questionList.map((item) => {
          return <QuestionCard {...item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default List;
