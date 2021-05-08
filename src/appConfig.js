const appConfig = [
    {
      itemName: "A",
      price: 50,
      promotion: { type: "nItem", rule: 3, discount: 20 }
    },
    {
      itemName: "B",
      price: 30,
      promotion: { type: "nItem", rule: 2, discount: 15 }
    },
    {
      itemName: "C",
      price: 20,
      promotion: { type: "combo", comboItem: "D", discount: 5 }
    },
    {
      itemName: "D",
      price: 15,
      promotion: { type: "combo", comboItem: "C", discount: 5 }
    }
  ];
  
  export default appConfig;
  