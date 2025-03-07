import "./App.css";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import Examples from "./components/Examples";



function App() {


  return (
    // <div>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    // </div>
  );
}

export default App;

export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

// function App() {
//   return (
//     <div id="app" data-testid="app">
//       <h1>Time to Practice</h1>
//       <p>One course, many goals! 🎯</p>
//       <ul>
//          <CourseGoal title="Learn React" description="In-depth" />
//         <CourseGoal title="Practice" description="Working with React, components etc." />
//         {/* OUTPUT AT LEAST TWO CourseGoal components here */}
//         {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
//       </ul>
//     </div>
//   );
// }

// export default App;


// events Login form example

// export const user = {
//   email: '',
//   password: '',
//   loggedIn: false,
// };

// function App() {
//     function handleLogin() {
//   user.email = "dummy@example.com";
//   user.password = "password123";
//   user.loggedIn = true;
//   console.log(user); 
//     }
  
//   return (
//     <div id="app">
//       <h1>User Login</h1>
//       <p>
//         <label>Email</label>
//         <input type="email" />
//       </p>

//       <p>
//         <label>Password</label>
//         <input type="password" />
//       </p>

//       <p id="actions">
//           <button onClick={handleLogin}>Login</button>
//       </p>
//       {user.loggedIn && <p>Welcome, {user.email}!</p>}
//     </div>
//   );
// }

// export default App;


// code for amount change 
// import React from 'react'
// import { useState } from 'react'

// export default function App() {
//     const [priceChange,setPriceChange] = React.useState(100)
  

//     function handleSelect(selectedButton) {
//     setPriceChange(75);
//     console.log(priceChange);
//   }
    
//     return (
//         <div>
//             <p data-testid="price">${priceChange}</p>
//             <button onClick={handleSelect}>Apply Discount</button>
//             {priceChange}
//         </div>
//     );
// }

// conditional content of && 

// import React from 'react';

// export default function App() {
    
//     const [showWarning, setShowWarning] = React.useState(false);
    
//     return (
//        <div>
//             {/* Show the warning box only if showWarning is true */}
//             {showWarning && (
//                 <div data-testid="alert" id="alert">
//                     <h2>Are you sure?</h2>
//                     <p>These changes can't be reverted!</p>
//                     {/* Hide the warning box when Proceed is clicked */}
//                     <button onClick={() => setShowWarning(false)}>Proceed</button>
//                 </div>
//             )}
//             {/* Show the warning box when Delete is clicked */}
//             <button onClick={() => setShowWarning(true)}>Delete</button>
//         </div>     
//     );
// }