import moment from "moment";
import { Tag } from "antd";

const columns = [
  {
    title: "shop id",
    dataIndex: "shop_id",
    key: "shop_id",
    fixed: 'left', // 固定
    width: 300,
    align: 'center'
  },
  {
    title: "product name",
    dataIndex: "product_name",
    key: "product_name",
    width: 150,
    fixed: 'left',
  },
  {
    title: "product id",
    dataIndex: "product_id",
    key: "product_id",
    width: 110,
  },
  {
    title: "product price",
    dataIndex: "product_price",
    key: "product_price",
    width: 120,
    align: 'center'
  },
  {
    title: "shopper id",
    dataIndex: "shopper_id",
    key: "shopper_id",
    width: 300,
    align: 'center'
  },

  {
    title: "create time",
    dataIndex: "create_time",
    key: "create_time",
    render: (_, { create_time }) => {
      return moment(create_time).format("yyyy-MM-DD HH:mm:ss");
    },
    width: 160,
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
    title: "action id",
    dataIndex: "actionId",
    key: "actionId",
    width: 100,
    align: 'center'
  },
  {
    title: "UPC",
    dataIndex: "UPC",
    key: "UPC",
    width: 140,
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

  //   {
  //     title: "Tags",
  //     key: "tags",
  //     dataIndex: "tags",
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? "geekblue" : "green";
  //           if (tag === "loser") {
  //             color = "volcano";
  //           }
  //           return tag.toUpperCase();
  //         })}
  //       </>
  //     ),
  //   },
];

const dataFormat = (data) => {
  return data.map((e) => {
    e.id = e._id?.$oid;
    e.actionId = e.action_id?.$numberInt;
    return e;
  });
};
export { columns, dataFormat };
