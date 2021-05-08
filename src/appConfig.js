const appConfig = [
    {
      itemName: "A",
      price: 50,
      count: 0,
      discount: 0,
      total: 0,
      promotion: { type: "nItem", rule: 3, discount: 20 }
    },
    {
      itemName: "B",
      price: 30,
      count: 0,
      discount: 0,
      total: 0,
      promotion: { type: "nItem", rule: 2, discount: 15 }
    },
    {
      itemName: "C",
      price: 20,
      count: 0,
      discount: 0,
      total: 0,
      promotion: { type: "combo", comboItem: "D", discount: 5 }
    },
    {
      itemName: "D",
      price: 15,
      count: 0,
      discount: 0,
      total: 0,
      promotion: { type: "combo", comboItem: "C", discount: 5 }
    }
  ];
  
  export default appConfig;
  