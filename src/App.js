
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./features/user"
function App() {
  const [name, setname] = useState("")

  const userList = useSelector((state) => state.users.value)


  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: userList.length, name }))
    setname("")
    console.log("userList", userList)
  }
  const retrData = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="App">
      <div className="formContainer">
        <h1 className='h1'>Add User</h1>
        <form className='form' onSubmit={formHandler}>
          <input type="text" placeholder='Details..' value={name} onChange={(e) => setname(e.target.value)} className="inputBox" />
          <button type='submit' className='buttonStyles add'>ADD</button>
        </form>
        <div className='userDetsDiv'>
          {
            retrData.map((e, i) => {
              return (
                <div className='eachUser' >
                  <div className='textDiv'>
                    <h3>
                      {e.name}
                    </h3>
                  </div>
                  <button onClick={() => {
                    dispatch(deleteUser({ id: e.id }))
                  }} className='buttonStyles remove' >
                    REMOVE
                  </button>
                </div>
              );
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
