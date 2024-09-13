import './App.css';
import { useState } from 'react';

function App() {
  let [uname,setUname]=useState("");
  let [pass,setPass]=useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(uname,pass)
  }
  return (
    <div className="App">
     <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className='text-start my-3'>
              <label>UserName</label>
              <input type="email" onChange={(e)=>setUname(e.target.value)} className='form-control' value={uname}/>
            </div>
            <div className='text-start my-3'>
              <label>Password</label>
              <input type="password" onChange={(e)=>setPass(e.target.value)} className='form-control' value ={pass}/>
            </div>
            <div className='text-start my-3'>
            <button>Login</button>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
