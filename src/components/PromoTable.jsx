import React from "react";
import PromoItems from './PromoItems'
import config from '../appConfig'
import "../css/App.css";

const PromoTable = () => {

    const calculatePromo = () => {
        console.log('called')
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
              { config.map((item, index) =>
              <PromoItems 
                item= {item}
                index={index}
                key={index}
                calculatePromo={calculatePromo}
              />)
              }  
              
            </tbody>
            <tfoot>
                <tr>
                    <td className="fw-bolder" colSpan="4">Total</td>
                    <td className="fw-bold">Total Price</td>
                    <td className="fw-bold">Total Discount</td>
                    <td className="fw-bold">Total Payable</td>
                </tr>
                </tfoot>
            </table>  

            <div className="row text-end">
                <div className="fs-4 fw-bold">Total Price :
                    <span className="fw-light fs-5 ms-2">£</span>
                </div>
                <div className="fs-4 fw-bold">Total Discount :
                    <span className="fw-light fs-5 ms-2">£</span>
                </div>
                <div className="fs-4 fw-bold">Total Amount to pay :
                    <span className="fw-light fs-5 ms-2">£</span>
                </div>

            </div>
      </div>
    );
  }
  
  export default PromoTable;