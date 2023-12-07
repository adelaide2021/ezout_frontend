const origin = {
  _id: {
    $oid: "65513bcce312f4638e584b4c",
  },
  session_id: "2d976f12-f355-4694-a9d0-71e6b82c39fc",
  shop_id: "e9c29af0-00a9-43f9-bc95-1a2a17a1a9ff",
  shopper_id: "548da510-3721-4825-ab20-cf9335cb43d5",
  action_id: {
    $numberInt: "16",
  },
  create_time: "2023-11-01T23:10:57.500477Z",
  action: "REMOVE",
  product_name: "cheese",
  product_id: 257900,
  product_price: 1.31,
  UPC: "0371720023476",
  category_id: "dairy",
  basket_total: 1.31,
};

const data = new Array(20).fill(1).map((e, i) => ({
  ...origin,
  shop_id: `${i}-${origin.shop_id}`,
  product_name: origin.product_name + i,
}));

export default data;
