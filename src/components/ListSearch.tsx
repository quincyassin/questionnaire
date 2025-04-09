import { Input } from "antd";
import React, { use, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_KEYWORD } from "./constant/Constant";

const ListSearch: React.FC = () => {
  const { Search } = Input;

  const nav = useNavigate();

  const { pathname } = useLocation();

  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function handleSearch(value: string) {
    nav({
      pathname: pathname,
      search: `?${LIST_SEARCH_KEYWORD}=${value}`,
    });
  }

  const [SearchParams] = useSearchParams();
  useEffect(() => {
    const keyword = SearchParams.get(LIST_SEARCH_KEYWORD) || "";
    setValue(keyword);
  }, [SearchParams]);

  return (
    <Search
      placeholder="请输入问卷标题"
      allowClear
      enterButton="搜索"
      size="middle"
      style={{ width: "200px" }}
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
    />
  );
};

export default ListSearch;
