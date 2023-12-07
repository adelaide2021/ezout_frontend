import moment from "moment";
import { Tag } from "antd";

const columns = [
  {
    title: "session id",
    dataIndex: "session_id",
    key: "session_id",
    width: 200,
    align: 'center'
  },
  {
    title: "shop id",
    dataIndex: "shop_id",
    key: "shop_id",
    width: 200,
    align: 'center'
  },
  {
    title: "shopper id",
    dataIndex: "shopper_id",
    key: "shopper_id",
    width: 200,
    align: 'center'
  },
  {
    title: "action id",
    dataIndex: "action_id",
    key: "action_id",
    width: 100,
  },
  {
    title: "create time",
    dataIndex: "create_time",
    key: "create_time",
    render: (_, { create_time }) => {
      return moment(create_time).format("yyyy-MM-DD HH:mm:ss");
    },
    width: 150,
    align: 'center'
  },
  {
    title: "action",
    dataIndex: "action",
    key: "action",
    render: (_, { action }) => {
      return <Tag key={action}>{action}</Tag>;
    },
    width: 100,
  },
  {
    title: "product name",
    dataIndex: "product_name",
    key: "product_name",
    width: 100,
  },
  {
    title: "product id",
    dataIndex: "product_id",
    key: "product_id",
    width: 100,
  },
  {
    title: "product price",
    dataIndex: "product_price",
    key: "product_price",
    width: 100,
  },
  {
    title: "UPC",
    dataIndex: "upc",
    key: "upc",
    width: 150,
  },
  {
    title: "category id",
    dataIndex: "category_id",
    key: "category_id",
    width: 120,
    align: 'center'
  },
  {
    title: "basket total",
    dataIndex: "basket_total",
    key: "basket_total",
    width: 110,
    align: 'center'
  },
];

const dataFormat = (data) => {
  return data.map((e) => {
    return {
      session_id: e.session_id,
      shop_id: e.shop_id,
      shopper_id: e.shopper_id,
      action_id: e.action_id,
      create_time: moment(e.create_time).format("yyyy-MM-DD HH:mm:ss"),
      action: e.action,
      product_name: e.product_name,
      product_id: e.product_id,
      product_price: e.product_price,
      upc: e.upc,
      category_id: e.category_id,
      basket_total: e.basket_total,
    };
  });
};

export { columns, dataFormat };
