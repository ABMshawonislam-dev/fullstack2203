import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Home = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  let navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  const items = [
    user.role == "admin" &&
      getItem("User", "sub1", <MailOutlined />, [
        getItem("Merchant", "g1"),
        getItem("User", "g2"),
      ]),
    {
      type: "divider",
    },
    getItem("Product", "sub2", <AppstoreOutlined />, [
      getItem("Add Product", "/dashboard/addproduct"),
      getItem("View Product", "/dashboard/viewproduct"),
      getItem("Add Variant", "/dashboard/addvariant"),
      getItem("View Product", "/dashboard/viewproduct"),
    ]),
    {
      type: "divider",
    },
    getItem("Category & Subcategory", "sub4", <SettingOutlined />, [
      getItem("Add category", "/dashboard/createcat"),
      getItem("Add SubCategory", "/dashboard/createsubcat"),
      getItem("View Category", "/dashboard/viewcat"),
      getItem("View Subcategory", "12"),
    ]),
    {
      type: "divider",
    },
    getItem("Discount", "sub5", <SettingOutlined />, [
      getItem("Add Discount", "/dashboard/adddiscount"),
      getItem("View Discount", "14"),
    ]),
    {
      type: "divider",
    },
    getItem("Affliate", "sub6", <SettingOutlined />, [
      getItem("Product List", "/dashboard/affiliateproduct"),
      
    ]),

  ];
  return (
    <Row>
      <Col span={6}>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          mode="inline"
          items={items}
        />
      </Col>
      <Col span={18}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Home;
