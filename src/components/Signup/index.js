import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import {Link} from 'react-router-dom';

const Signup = (props) => {


    const firebase = useContext(FirebaseContext);

const data={
    pseudo:'',
    email:'',
    password:'',
    confirmedPassword:''
}

const [loginData, setloginData] = useState(data)
const [error, setError] = useState('');


const handleChange = (e) =>{
    setloginData({...loginData, [e.target.id]: e.target.value})
}

const handleSubmit = e =>{
    e.preventDefault();
    const { email, password, pseudo} = loginData;
    firebase.signupUser(email, password)
    .then(authUser=>{
         return firebase.user(authUser.user.uid).set({
             pseudo: pseudo,
             email: email
         })
    })
    .then(() =>{
        setloginData({...data});
        props.history.push('/welcome');
    })
    .catch(error=>{
        setError(error);
        setloginData({...data});
    })
}

const { pseudo, email, password, confirmedPassword } = loginData;

const btn = pseudo === '' || email ==='' || password ==='' || password!==confirmedPassword 
? <button disabled>Inscritpion</button> : <button>Inscription</button>

// gestion d'erreurs
const errorMsg = error !== '' && <span>{error.message}</span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                 <div className="formContent">
                 {errorMsg}
                 <h2>Inscription</h2>
                  <form onSubmit={handleSubmit}>
                      <div className="inputBox">
                      <input onChange={handleChange} value={pseudo} type="text"  id="pseudo" autoComplete="off" required ></input>
                      <label htmlFor="pseudo">Nom d'utilisateur</label>
                      </div>

                      <div className="inputBox">
                      <input onChange={handleChange} value={email} type="email"  id="email" autoComplete="off" required ></input>
                      <label htmlFor="email">Email</label>
                      </div>

                      <div className="inputBox">
                      <input onChange={handleChange} value={password} type="password"  id="password" autoComplete="off" required ></input>
                      <label htmlFor="password">Mot de passe</label>
                      </div>

                      <div className="inputBox">
                      <input onChange={handleChange} value={confirmedPassword} type="password"  id="confirmedPassword" autoComplete="off" required ></input>
                      <label htmlFor="confirmedPassword">Confirmer le Mot de passe</label>
                      </div>

                     {btn}
                  </form>

                    <div className="linkContainer">
                        <Link className="simpleLink" to="/login">Deja inscrit? Connectez vous.</Link>
                    </div>

                 </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
