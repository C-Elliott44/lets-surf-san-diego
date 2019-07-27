import React from 'react';
import './App.css';
import './assets/styles/user.css'
import socialImg from './assets/images/social.png';
import exerciseImg from './assets/images/exercise.png';
import funImg from './assets/images/fun.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                {/*Instructor login*/}
        <div id='loginPlacement'>
          <form id='instructorLogIn' action="/login" method="post">
            <div id='email'>
                <label>Email:</label>
                <input placeholder='sample@mail.com' type="text" name="username"/>
            </div>
            <div id='password'>
                <label>Password:</label>
                <input placeholder='*******' type="password" name="password"/>
            </div>
            <div id='submit'>
                <input type="submit" value="Log In"/>
            </div>
          </form>
        </div>
        {/* The Call to action for the user and potential new instructors */}
        <div id='headerText'>
          <h1 className='title'>Let's Surf SD</h1>
          <p className='stdText'>Pick a beach and see our avalible instructors</p>
          <div id='dropdownBeaches'>
            <select placeholder='Choose a beach' id='beaches'>
            <option hidden>Choose A Beach</option>
              {/* This will be populated by the SQL Database, only show beaches instructors are present at */}
            </select>
            <p className='stdText'>Or Sign up as an instructor today, <a href='#'>Click Here</a></p>
          </div>
        </div>
      </header>
      <section id='instructorDisplay'>
        {/* This will populate with instructors after a beach is selected, data pulled from database */}
      </section>
      <section id='about'>
        <div id='exercise'>
        <img alt='' src={exerciseImg}></img>
          <h2 id='subTitle'>Exercise</h2>
          <p className='stdText'>Surfing is a total body sport and get's you toned and in shape.</p>
        </div>
        <div id='social'>
          <img alt='' src={socialImg}></img>
          <h2 id='subTitle'>Social</h2>
          <p className='stdText'>The Surfing community is a warm and friendly environment full of the aloha spirit.</p>
        </div>
        <div id='fun'>
        <img alt='' src={funImg}></img>
          <h2 id='subTitle'>Fun</h2>
          <p className='stdText'>There’s a saying among surfers that goes: “the best surfer in the water, is the one having the most fun”</p>
        </div>
      </section>
      <footer>
        social: <span>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
        exercise: <span>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
        fun: <span>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span>
      </footer>
    </div>
  );
} 

export default App;
