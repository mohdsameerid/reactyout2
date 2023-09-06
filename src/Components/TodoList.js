import "./styles.css";
import {useEffect, useState } from "react";

function App() {
  // const [isShown, setIsShown] = useState(false);
  // function handleChange(e) {
  //   e.target.style.background = "red";
  // }

  // return (
  //   <div className="App">
  //     <button
  //       onMouseEnter={() => setIsShown(true)}
  //       onMouseLeave={() => setIsShown(false)}
  //     >
  //       Hover over me
  //     </button>

  //     {isShown && <div>Hello</div>}

  //     <button onMouseOver={handleChange} >
  //       Hover over me for Color change
  //     </button>
  //   </div>
  // );
  // const [userData, setUserData] = useState({});

  // //   aysnc function ApiCall(url){
  // //     const data = await fetch(url);
  // //     console.log(data);
  // //     const res = await data.json();
  // //     console.log(res);

  // //     setUserData(res);
  // //   }
  // //   React.useEffect(() => {
  // //     ApiCall(url);
  // //     console.log("1");
  // //   }, []);
  // const url = "https://jsonplaceholder.typicode.com/users/1";

  // async function ApiCall() {
  //   const data = await fetch(url);
  //   // console.log(data);
  //   const res = await data.json();
  //   // console.log(res)

  //   setUserData(res);
  // }

  // useEffect(() => {
  //   ApiCall();
  // }, []);

  const [name, setname] = useState();
  const [rollno, setRollno] = useState();
  const [user, setUser] = useState([]);

  function handleClick(){
    const stu = {
      name,
      rollno
    }
    user.push(stu);
    setUser(user);
    console.log(user);
    setRollno("");
    setname("");
  }

  function handleDelete(i){
    // const data = user.name;
    console.log(i);
    const users = [...user];
    users.splice(i, 1);
    setUser(users);
    // console.log(i)
    // const newData = user.filter((items => {
    //   return items.i !== 
    // })); 
  //  setUser([]);
  //  setUser

  }

  // useEffect(() => {
  //   console.log("hello")
  // }, [user]);
  
  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>

      <div>
          <input placeholder="Enter name" type="text" value={name} onChange={(e) => setname(e.target.value)} />
          <input placeholder="Enter Rollno" type="number" value={rollno} onChange={(e) => setRollno(e.target.value)} />  
          <button onClick={handleClick}>Add</button>     
      </div>

      {
        (user.length === 0) ? (<div>No data here...</div>) : (user.map((item, i) => {
         return (<ul>
                  <span key={i}>Name:{item.name},    Rollno:{item.rollno}</span>
                  <button onClick={()=> handleDelete(item.name) }>X</button>
         </ul>);
        }))
      }
      {/* <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p> */}
    </div>
  );
}
export default App;
