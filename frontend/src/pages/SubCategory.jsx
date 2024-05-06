import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input,Select  } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';


const SubCategory = () => {
    let userInfo = useSelector(state => state.currentuser.value.id)

    console.log(userInfo)

    let [catList,setCatList] = useState([])
    let [catid,setcatid] = useState("")

    
    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8000/api/v1/product/createsubcategory",{
            name: values.name,
            ownerId: userInfo,
            categoryId:catid
        })

        console.log(data)

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const onChange = (value) => {
        console.log(`selected ${value}`);
        setcatid(value)
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
      
      // Filter `option.label` match the user type `input`
      const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

        useEffect(()=>{
            async function alldata(){
                let data = await axios.get("http://localhost:8000/api/v1/product/allcat")
                console.log("cat",data.data)

                let arr = []

                data.data.map(item=>{
                    arr.push({
                        value: item._id,
                        label: item.name,
                      })
                })
                setCatList(arr)
            }
            alldata()
        },[])

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
      label="Sub Category Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your category name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={catList}
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

export default SubCategory