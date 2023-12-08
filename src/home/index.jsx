import { Table, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { columns, dataFormat } from "./utils.jsx";
import Socket from "./websocket";
import "./index.css";


const Index = () => {
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const socket = new Socket("ws://localhost:8080/ws/1");

  useEffect(() => {
    socket.addListener({
      message: (mes) => {
        console.log("print fron index.js: ", mes);
        setLoading(false);
        setData(mes);
      },
    });

    return () => {
      // socket.closeSocket();
    };
  }, []);


  const handelChange = (v) => {
    setLoading(true);
    // socket.send({ shopId: v.target.value });
    const newShopId = v.target.value;
    socket.send(JSON.stringify({ action: 'updateShopId', shopId: newShopId }));
    console.log("from front en indes " + newShopId)
  };

  return (
    <div className="wrap">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <span>
          <Space>
            shop id
            <Input
              placeholder="Please input shop_id"
              style={{ width: "200px" }}
              onBlur={handelChange}
              onKeyDown={(e) => {
                console.log(e);
                if (e.key === "Enter") {
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
