import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Signup from './components/signup/SignUp';
import Account from './components/account/Account';
import Certificate from './components/certificate/Certificate';
import SignIn from './components/signIn/SignIn';
import AllQuestions from './components/questions/AllQuestions';
import Disclaimer from './components/footer/Disclaimer';

function App() {

  const [certified, setCertified] = useState(false)

  const passed = (judgement) => {
    setCertified(judgement)
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/allQuestions'>
            <AllQuestions passed={passed} />
          </Route>

          <Route exact path='/account'>
            <Account />
          </Route>

          <Route exact path='/certificate'>
            <Certificate certified={certified}/>
          </Route>

          <Route exact path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/signin'>
            <SignIn />
          </Route>

          <Route exact path='/disclaimer'>
            <Disclaimer />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
