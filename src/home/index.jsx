import { Table, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { columns, dataFormat } from "./utils.jsx";
import Socket from "./websocket";
import "./index.css";

let isMock = true;
const socket = new Socket("ws://localhost:8080/ws/1", false);

const Index = () => {
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  socket.addListener({
    message: (mes) => {
      setLoading(false);
      setData(mes);
    },
  });
  useEffect(() => {});

  const handelChange = (v) => {
    setLoading(true);
    socket.send({ shopId: v.target.value });
  };

  return (
    <div className="wrap">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <span>
          <Space>
            shop id
            <Input
              placeholder="请输入"
              style={{ width: "200px" }}
              onBlur={handelChange}
              onKeyDown={(e) => {
                console.log(e);
                if (e.code === "Enter") {
                  handelChange(e);
                }
              }}
            />
          </Space>
        </span>
        <Table
          columns={columns}
          dataSource={dataFormat(data)}
          rowKey={(record) => `${record.id}${record.shop_id}${Math.random()}`}
          pagination={false}
          loading={loading}
          scroll={{ x: 1300, y: "70vh" }}
        />
      </Space>
    </div>
  );
};

export default Index;
