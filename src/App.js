// import logo from "./logo.svg";
// import "./App.css";
// import Movie from "./Components/Movie.js";
// import "./Components/Movie.css";
import { useEffect, useState } from "react";
import React from "react";

// 1 // Display simple JSX
/** 
  Challenge: Display `JSX is cool!` as an output
  
  Solution: https://codepen.io/angelo_jin/pen/xxXrZLd
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function App() {
//   return <div>JSX is cool!</div>;
// }

// 2 // Display array of users to browser
/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
  
  Solution: https://codepen.io/angelo_jin/pen/wvreMpZ
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// const users = [
//   { name: "John Doe", id: 1 },
//   { name: "Jane Doe", id: 2 },
//   { name: "Billy Doe", id: 3 }
// ];
// function App() {
//   return (
//     <>
//       <h3>User names</h3>
//       <ul>
//         {
//           users.map((items) => <li key={items.id}>{items.name}</li> )
//         }
//       </ul>
//     </>
//   );
// }

// 3 // Show/Hide Element on Screen
/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function App() {
//   const [button, setButton] = React.useState(true);

//   function handleButton() {
//     setButton(!button);
//   }

//   return (
//     <>
//       <button onClick={handleButton}>{ button ? "Hide" : "Show"} Element Below</button>

//       {button ? <div>Toggle Challenge</div> : <div></div>}
//     </>
//   );
// }

// 4 // 2 way data binding in ReactJS
/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzvMop
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function App() {
//   const [inputValue, setInputValue] = React.useState("");

//   return (
//     <>
//       <input type="text" placeholder="Enter Text"  onChange={(e) =>{
//         setInputValue(e.target.value);
//       }}/>
//       <p>{inputValue}</p>
//     </>
//   );
// }

// 5 // Disable a button
/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
  
  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function App() {
//   const [val, setVal] = React.useState("");

//   return (
//     <>
//       <h3>Disable Button Challenge</h3>
//       <input type="text" value={val} onChange={(e) => setVal(e.target.value)}  />
//       <button disabled={val.length < 1} >Submit</button>
//     </>
//   );
// }

//6 // Update the parent state
/** 
  Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.
  
  Solution: https://codepen.io/angelo_jin/pen/KKXoKgO
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function Child({setValue}) {
//   return (
//     <>
//       <div>Child</div>
//       <button onClick={() => { setValue("I'm Changed!!!!!!!")}}>Change Parent Value</button>
//     </>
//   );
// }

// function App() {
//   const [value, setValue] = React.useState(
//     "I need to be updated from my child"
//   );

//   return (
//     <>
//       <h3>Update Parent State Challenge (Using Callback)</h3>
//       <div className="wrapper">
//         <div>Parent</div>
//         <div className="box-wrapper">{value}</div>
//       </div>

//       <div className="wrapper">
//         <Child setValue={setValue} />
//       </div>
//     </>
//   );
// }

// 7  // Dynamically add child components (React Children)
/**
  Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below
  
  Solution: https://codepen.io/angelo_jin/pen/MWEVJNb
  Video for Reference: https://youtu.be/VzNNjNmbXpY
**/
///////////////////////////////////// 1 way //////////////////////////////////////////////////

// function Child() {
//   return <div>This is children content</div>;
// }
// // Add code only here
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//       <Child />
//     </div>
//   );
// }
// function App() {
//   return (
//     <Parent>
//       <Child />
//     </Parent>
//   );
// }

//////////////////////////////////////// 2 way /////////////////////////////////////////////////////

// function Child() {
//   return <div>This is children content</div>;
// }
// function Parent({ children }) {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//       {children}
//     </div>
//   );
// }
// function App() {
//   return (
//     <Parent>
//       <Child />
//     </Parent>
//   );
// }

// 8 // Sum of Two Numbers
/** 
  Challenge: Make this app work like a calculator that can add two numbers.
  
  Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output. 
  
  Solution: https://codepen.io/angelo_jin/pen/BawrWzy
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [total, setTotal] = useState(0);

//   function handleTotal() {
//     setTotal(num1 + num2);
//   }

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="Enter a Number"
//         onChange={(event) => setNum1(+event.target.value)}
//       />
//       <br></br>
//       <input
//         type="number"
//         placeholder="Enter a Number"
//         onChange={(e) => setNum2(+e.target.value)}
//       />
//       <br></br>
//       <button onClick={handleTotal}>Add to Sum</button>
//       <p>Sum of Two numbers is : {total}</p>
//     </>
//   );
// }

//9 // Create Counter App 🕒
/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzKMXX
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
// function App() {
//   const [counter, setCounter] = useState(0);

//   function handlePlus(){
//     setCounter(counter + 1);
//   }
//   function handleMinus(){
//     if(counter > 0)
//     setCounter(counter - 1);
//   }
//   function reset(){
//     setCounter(0);
//   }
//   return (
//     <>
//       <h1> {counter} </h1>
//       <button onClick={handlePlus}>plus</button>
//       <button onClick={handleMinus}>Minus</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// 10  // Fetch data from an API
const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/
// function App() {
//   const [userData, setUserData] = React.useState({});

//   async function CallApi(props){
//     const data = await fetch(props);
//     const json = await data.json();

//     setUserData(json)
//   }

//   useEffect( () => {
//     CallApi(url);
//   }, []);

//   return (
//     <div className="App">
//       <h2>User Data</h2>

//       <p>
//         <strong>Name:</strong> {userData.name}
//       </p>
//       <p>
//         <strong>Website:</strong> {userData.website}
//       </p>
//       <p>
//         <strong>Email:</strong> {userData.email}
//       </p>
//       <p>
//         <strong>Phone:</strong> {userData.phone}
//       </p>
//     </div>
//   );
// }

function App() {
  return <>Hello</>;
}

export default App;
