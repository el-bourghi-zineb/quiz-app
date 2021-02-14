import React, { useRef, useEffect, useState, Fragment } from 'react';
import {Link} from 'react-router-dom';
function Landing() {

    const [btn, setBtn] = useState(false);

     useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() =>{
          refWolverine.current.classList.remove("startingImg")
          setBtn(true);
        }, 1000)
     }, [])
      
   
     //onMouseOver={setRightImg} onMouseOut={clearImg}
     const displayBtn = btn && (
        <Fragment>
        <div className="leftBox">
        <Link className="btn-welcome1" to="/signup">Inscription</Link>
        </div>
        <div className="rightBox">
        <Link className="btn-welcome" to="/login">Connexion</Link>
        </div>
        </Fragment>
     )

    const refWolverine = useRef(null)

    return (
    
       <main ref={refWolverine} className="welcomePage">
          {displayBtn}
       </main>
       
    )
}

export default Landing;

