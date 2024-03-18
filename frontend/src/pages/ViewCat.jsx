import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from "axios"

const ViewCat = () => {
    let [catList,setCatList] = useState([])
    useEffect(()=>{
        async function alldata(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allcat")
            console.log("cat",data.data)

            let arr = []

            data.data.map(item=>{
                arr.push({
                    key: item._id,
                    name: item.name,
                  })
            })
            setCatList(arr)
        }
        alldata()
    },[])

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Delete {record.name}</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
         
        },
        
      ];


  return (
    <Table columns={columns} dataSource={catList} />
  )
}

export default ViewCat