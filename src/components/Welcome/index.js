import React,{useState, Fragment, useContext, useEffect} from 'react';
import {FirebaseContext} from '../Firebase';
import Logout from '../Logout';
import Quiz from '../Quiz';

function Welcome(props) {

const [userSession, setUserSession] = useState(null);
const [userData, setUserData] = useState([])
const firebase = useContext(FirebaseContext);

useEffect(() => {
    let user = firebase.auth.currentUser;
   //let listener = firebase.auth.onAuthStateChanged(user =>{
    if(user){
        setUserSession(user)
    }  else{ 
       props.history.push('/') ;
    }
    if(!!userSession) {
        firebase.user(userSession.uid)
        .get()
        .then(doc=>{
            if(doc && doc.exists){
                const myData = doc.data();
                setUserData(myData);
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
}, [userSession])

return userSession === null ? (
     <Fragment>
     <div className="loader">
      <p>Loading</p>
     </div>
     </Fragment>
 ) : (
    <div className="quiz-bg">
    <div className="container">
       <Logout/>
       <Quiz userData= {userData}/>
    </div>
</div>
 )

}

export default Welcome;
