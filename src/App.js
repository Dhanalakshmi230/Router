// import React from 'react';
// import Signin from './signin';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import Signup from './signup';
// import Home from './home';

// function App() {
//   return (
//     <div className="App">

//    <BrowserRouter>
//    <Routes>
//     <Route index element={<Signin/>}/>
//     <Route path='signup' element={<Signup/>}></Route>
//     <Route path='home' element={<Home/>}></Route>
//     <Route path='signin' element={<Signin/>}></Route>
//     </Routes>
//     </BrowserRouter>
//    </div>
//   )
// }

// export default App;
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

  function sleep (time){
    const doneTime=Date.now()+time;
  while(Date.now()<doneTime){}
  return
  }
 
 export default function App () {
  console.log(Date.now())

  const[fontsize,setFontsize]=useState(40)
  useEffect(()=>{
 sleep(4000);
 console.log('useeffect called')
 setFontsize(100);

 
  },[]);
  return( <h1 style={{fontSize:fontsize}}>Hello useLayoutEffect</h1>)
}
// import React, { useEffect, useState } from 'react';

// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

// export default function App() {
//   const [fontSize, setFontSize] = useState(40);

//   useEffect(() => {
//     async function changeFontSize() {
//       await sleep(3000);
//       setFontSize(100);
//     }
//     changeFontSize();
//   }, []);

//   return (
//     <h1 style={{ fontSize: fontSize }}>Hello useLayoutEffect</h1>
//   );
// }
