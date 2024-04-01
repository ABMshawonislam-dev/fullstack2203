
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input,Select } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";


const AddVariant = () => {
    let [image, setImage] = useState({});
    let [prolist, setProList] = useState([]);
    let [proid, setProId] = useState("");
    const onFinish = async (values) => {
        // console.log("Success:", values);
        await axios.post(
          "http://localhost:8000/api/v1/product/createvariant",
          {
            name: values.name,
            varinatavatar: image,
            regularprice: values.ragularprice,
            saleprice: values.saleprice,
            productId: proid
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      
  let handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(()=>{
    async function getpro(){

        let data = await axios.get(
            "http://localhost:8000/api/v1/product/allpro");
  
            console.log(data)

            let arr = []

            data.data.map(item=>{
                arr.push( {
                    value: item._id,
                    label: item.name,
                  })
            })

            setProList(arr)


    }

    getpro()
  },[])

  let handleChangePro = (e)=>{
    setProId(e)

  }
    
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

<Form.Item
        label="Variant Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your variant name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Variant Image"
        name="image"
        rules={[
          {
            required: true,
            message: "Please input your product name!",
          },
        ]}
      >
        <Input onChange={handleChange} type="file" />
      </Form.Item>
      <Form.Item
        label="Regular Price"
        name="ragularprice"
        rules={[
          {
            required: true,
            message: "Please input your regular price!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Sale Price"
        name="saleprice"
        rules={[
          {
            required: true,
            message: "Please input your sale price!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Select
      defaultValue=""
      style={{
        width: 120,
      }}
      onChange={handleChangePro}
      options={prolist}
    />
      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddVariant