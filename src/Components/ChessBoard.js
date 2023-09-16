function App() {

    const mystyle = {
      color: "black",
      backgroundColor: "Black",
      border: "1px solid black",
      padding: "10px",
      width: "40px"
    };
    const mystyle2 = {
      color: "white",
      backgroundColor: "white",
      border: "1px solid black",
      padding: "10px",
      width: "40px"
    };
    let arr = [1,2,3,4,5,6,7,8];
    return (
      <>
      {
        arr.map((items, i) => 
  
        (items % 2 == 0) ? (
          <div key={i} className="App" style={{width: "400px", marginTop: "20px"}} >
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
      </div>
        ) : (
          <div key={i} className="App" style={{width: "400px", marginTop: "20px"}} >
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
          <span style={mystyle2}>B</span>
          <span style={mystyle}>W</span>
      </div>
        )
          
        )
      }
        
      </>
    );
  
  }
  export default App;
  