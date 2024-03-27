import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";

const ViewProduct = () => {
  let [proList, setProList] = useState([]);
  useEffect(() => {
    async function alldata() {
      let data = await axios.get("http://localhost:8000/api/v1/product/allpro");
      console.log("pro", data.data);

      let arr = [];

      data.data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
          regularprice: item.regularprice,
          saleprice: item.saleprice,
          image: item.image,
        });
      });
      setProList(arr);
    }
    alldata();
  }, []);
  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
      render: (key, index, asd) => <p>{asd + 1}</p>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>{JSON.stringify(_)}</a> */}
          <img style={{ width: "30px" }} src={`http://localhost:8000${_}`} />
        </Space>
      ),
    },
    {
      title: "Regular Price",
      dataIndex: "regularprice",
      key: "regularprice",
    },
    {
      title: "Sale Price",
      key: "saleprice",
      dataIndex: "saleprice",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={proList} />;
};

export default ViewProduct;
