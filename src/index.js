import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Movie from './Components/Movie.js';
import './Components/Movie.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <div className='nav'>
       <h1 style={{textAlign: "center", color: "#7D6E83"}}>List of All the netflex Series</h1>
     </div>

     <App  
       imglink={Movie[0].Images[0]}
       title={Movie[0].Title}
       language={Movie[0].Language}
     />
     {/* <App  
       imglink={Movie[1].Images[0]}
       title={Movie[1].Title}
       language={Movie[1].Language}
     />
     <App  
       imglink={Movie[2].Images[0]}
       title={Movie[2].Title}
       language={Movie[2].Language}
     />
     <App  
       imglink={Movie[3].Images[0]}
       title={Movie[3].Title}
       language={Movie[3].Language}
     />
     <App  
       imglink={Movie[4].Images[0]}
       title={Movie[4].Title}
       language={Movie[4].Language}
     />
     <App  
       imglink={Movie[5].Images[0]}
       title={Movie[5].Title}
       language={Movie[5].Language}
     /> */}
     

    </>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
