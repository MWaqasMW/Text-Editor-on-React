import "./App.css"
import { Input, QRCode, Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import UserForm from "./components/form";
import QrCode from "./components/Qrcode";
import  Silder from "./components/silder";
import Btn from './components/Button'
import { Navbar } from "./components/navbar";
import Bform from "./components/B_form"
const App = () => {

  return (
   <div>
    <Navbar about="About US " menu="Menu" />
    <Bform heading="Text Editor"/>

{/* <Btn/>
    <Silder/>
<UserForm/>
<QrCode/> */}
   </div>
  );
};
export default App;


















// import Header from "./components/header";
// import Footer from "./components/header";
// import { BasicExample, ComponentA } from "./components/header.js"



// const data = ['We', 'are', 'United'];
// const list = [
//   { name: "Hello World 1" },
//   { name: "Hello World 2" },
//   { name: "Hello World 3" }
// ];

// const complex = [
//   { company: 'XYZ', jobs: ['Javascript', 'React'] },
//   { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }
// ];

// function App() {
//   return (
//     <div>
//       <BasicExample />
//       <ComponentA />
//       {data.map((item) => <h4>{item}</h4>)}
//       {list.map((item) => <p>{item.name}</p>)}
//       {complex.map((v,i) => (
//       <div >
//         <p key={i}>{v.company}</p>
//         <ul>
//           {v.jobs.map((v,i) => (
//             <li key={i}>{v}</li>
//           ))}
//         </ul>
//       </div>
//     ))}




//     </div>
//   );
// }




// export default App;