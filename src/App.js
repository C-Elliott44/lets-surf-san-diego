import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                {/*Instructor login*/}
        <div id='instructorLogIn'>
          <form action="/login" method="post">
            <div id='email'>
                <label>Email:</label>
                <input placeholder='sample@mail.com' type="text" name="username"/>
            </div>
            <div id='password'>
                <label>Password:</label>
                <input placeholder='*******' type="password" name="password"/>
            </div>
            <div>
                <input type="submit" value="Log In"/>
            </div>
          </form>
        </div>
        {/* The Call to action for the user and potential new instructors */}
        <div id='headerText'>
          <h1 className='title'>Let's Surf SD</h1>
          <p className='subTitle'>Pick a beach and see our avalible instructors</p>
          <div id='dropdownBeaches'>
            <select placeholder='Choose a beach' id='beaches'>
            <option hidden>Choose A Beach</option>
              {/* This will be populated by the SQL Database, only show beaches instructors are present at */}
            </select>
            <p className='subTitle'>Or Sign up as an instructor today, <a href='#'>Click Here</a></p>
          </div>
        </div>
      </header>
      <section>d</section>
    </div>
  );
} 

export default App;
