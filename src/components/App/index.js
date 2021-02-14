import  React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword'
import Footer from '../Footer';
import {IconContext} from 'react-icons';


function App() {
    return(
        <Router>
        <IconContext.Provider value={{style:{verticalAlign:'middle'}}}>
          <Header/>
          <Switch>
           <Route exact path="/" component={Landing}></Route>
           <Route path="/welcome" component={Welcome}></Route>
           <Route path="/login" component={Login}></Route>
           <Route path="/signup" component={Signup}></Route>
           <Route path="/forgetpassword" component={ForgetPassword}></Route>
           <Route component={ErrorPage}></Route>
           </Switch>

          <Footer/>
          </IconContext.Provider>
          </Router>
    );
}

export default App;