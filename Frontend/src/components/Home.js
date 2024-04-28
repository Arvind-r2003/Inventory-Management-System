import React from 'react'

export default function Home() {
  return (
    <div className='container-fluid p-5'>
        <h1>Inventory Management System - MERN CRUD App</h1>
        <br />
        <br />
        <h2>Go to Products Section.</h2>
    </div>
  )
}


// import React, { useEffect, useState } from 'react';

// export default function Home() {
//   const [totalProducts, setTotalProducts] = useState(0);

//   useEffect(() => {
//     getTotalProducts();
//   }, []);

//   const getTotalProducts = async () => {
//     try {
//       const res = await fetch("http://localhost:3001/products/count", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       const data = await res.json();

//       if (res.status === 200) {
//         console.log("Total Products Retrieved.");
//         setTotalProducts(data.total);
//       } else {
//         console.log("Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='container-fluid p-5'>
//       <h2>Total Products in Inventory</h2>
//       <table className="table table-striped mt-3 fs-5">
//         <thead>
//           <tr>
//             <th scope="col">Total Products</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{totalProducts}</td>
//           </tr>
//         </tbody>
//       </table>
//       <p>Go to Products Section to view individual products.</p>
//     </div>
//   );
// }
