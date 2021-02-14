import React, {useState, useEffect, useContext} from 'react';
import {withRouter} from 'react-router';
import {FirebaseContext} from '../Firebase';
import ReactToolTip from 'react-tooltip';

const Logout = (props) => {

    const firebase = useContext(FirebaseContext);


const [checked, setChecked] = useState(false);

console.log(checked);

useEffect(() => {
    if(checked===true){
        firebase.logoutUser()
        .then(()=>{
            props.history.push('/');
        })
        .catch(error=>{
            console.log(error);
        })
    }
}, [checked, firebase])

const handleChange=e=>{
    setChecked(e.target.checked);
}

    return (
        <div className="logoutContainer">
            <label className="switch">
             <input 
             onChange={handleChange}
             type="checkbox"
             checked={checked}
             ></input>
             <span className="slider round" data-tip="Deconnexion"></span>
            </label>
            <ReactToolTip 
            place="left" 
            effect="solid"    
            />
        </div>
    )
}

export default withRouter(Logout);
