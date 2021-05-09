import React, {useState} from "react";
import PromoItems from './PromoItems'
import config from '../appConfig'
import "../css/App.css";

const PromoTable = () => {
  const [cartItems, setCartItems] = useState(config);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [totalSub, setTotalSub] = useState(0);
  const [amountToPay, setAmountToPay] = useState(0);

  const calculatePromo = (name, newValue) => {
    let total = 0, discTot = 0;
    const combo = {},
    items = cartItems.map((item) => {
    if (item.itemName === name)
        item.count = +newValue > 0 ? +newValue : 0;
    item.total = item.price * item.count;

    if (item.promotion.type === "nItem")
        item.discount =
        Math.floor(item.count / item.promotion.rule) *
        item.promotion.discount;

    if (item.promotion.type === "combo") {
        item.discount = 0;
        if (item.count) {
        combo[item.itemName] = item.count;
        item.discount = combo[item.promotion.comboItem]
            ? item.promotion.discount *
            Math.min(combo[item.promotion.comboItem], combo[item.itemName])
            : 0;
        }
    }

    total += item.total;
    discTot += item.discount;
    return item;
    });

    setCartItems(items);
    setTotalSub(total);
    setDiscountTotal(discTot);
    setAmountToPay(total - discTot);
  } 

    return (
        <div className="container">
        <table className="table caption-top">
            <caption className="text-center"><h1>Promo Table</h1></caption>
            <thead className="table-dark">
                <tr>
                <th scope="col">No.</th>
                <th scope="col">SKU ID</th>
                <th scope="col">Quantity</th>
                <th scope="col">Base Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Discount</th>
                <th scope="col">Payable Amount</th>
                </tr>
            </thead>
            <tbody>
                { cartItems.map((item, index) =>
                <PromoItems 
                item= {item}
                index={index}
                key={index}
                itemCount={item.count}
                calculatePromo={calculatePromo}
                />)
                }  
                
            </tbody>
            <tfoot>
                <tr>
                    <td className="fw-bolder" colSpan="4">Total</td>
                    <td className="fw-bold">£{totalSub}</td>
                    <td className="fw-bold">£{discountTotal}</td>
                    <td className="fw-bold">£{amountToPay}</td>
                </tr>
                </tfoot>
            </table>  

            <div className="row text-end">
                <div className="fs-4 fw-bold">Total Price :
                    <span className="fw-light fs-5 ms-2">£{totalSub}</span>
                </div>
                <div className="fs-4 fw-bold">Total Discount :
                    <span className="fw-light fs-5 ms-2">£{discountTotal}</span>
                </div>
                <div className="fs-4 fw-bold">Total Amount to pay :
                    <span className="fw-light fs-5 ms-2">£{amountToPay}</span>
                </div>

            </div>
        </div>
        );
    }
  
  export default PromoTable;