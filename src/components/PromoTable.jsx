import React from "react";
import PromoItems from './PromoItems'

const PromoTable = () => {
    return (
      <div className="container">
        <table class="table caption-top">
            <caption className="text-center"><h1>Promo Table</h1></caption>
            <thead class="table-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <PromoItems></PromoItems>
            </tbody>
            </table>  
      </div>
    );
  }
  
  export default PromoTable;