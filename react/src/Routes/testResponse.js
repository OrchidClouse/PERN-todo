// import React, {useState, useEffect} from 'react';
//
// function TestResponse() {
//   // const initialState = {
//   //   database: []
//   // }
//   const [products, setProducts] = useState([]);
//
//   useEffect(() => {
//     fetch('/signup')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);
//
//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
//   );
// }
//
// export default TestResponse;