import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import {Link} from 'react-router-dom';

const ForgetPassword = (props) => {

const firebase = useContext(FirebaseContext);

const [email, setEmail] = useState("");
const [success, setSuccess] = useState(null);
const [error, setError] = useState(null);

    const handleSubmit = e=>{
      e.preventDefault();
      firebase.passwordReset(email)
      .then(()=>{
          setError(null);
          setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
          setEmail('');
          setTimeout(()=>{
             props.history.push('/login')
          }, 5000)
        })
      .catch(error=>{
         setError(error);
         setEmail('');
      })
    }

const disabled = email === "" ? <button disabled>Recuperer</button> : <button>Recuperer</button>; 

    return (
        <div className="signUpLoginBox">
          <div className="slContainer">
          <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                 <div className="formContent">
                 
                 { success && <span style={{
                     border:"1px solid green",
                     background: "green",
                     color:"#ffffff"
                 }}>{success}</span>}

                 { error && <span>{error.message}</span> }

                 <h2>Mot de passe oublie?</h2>
                  <form onSubmit={handleSubmit}>
                      
                      <div className="inputBox">
                      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" autoComplete="off" required ></input>
                      <label htmlFor="email">Email</label>
                      </div>

                     {disabled}
                    
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

export default ForgetPassword;
