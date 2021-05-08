import React from "react";
import PromoItems from './PromoItems'

const PromoTable = () => {
    const test = [{firstName: 'mark', lastName: 'Otto', age: 40}, 
    {firstName: 'Binod', lastName: 'sahu', age: 35},
    {firstName: 'abc', lastName: 'def', age: 36}]
    return (
      <div className="container">
        <table className="table caption-top">
            <caption className="text-center"><h1>Promo Table</h1></caption>
            <thead className="table-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
              { test.map((item, index) =>
              <PromoItems 
                item= {item}
                index={index}
                key={index}
              />)
              }  
              
            </tbody>
            </table>  
      </div>
    );
  }
  
  export default PromoTable;