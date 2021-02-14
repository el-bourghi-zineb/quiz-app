import React from 'react';
import error from '../../images/error.jpg';

const centerH2 = {
    textAlign: 'center',
    marginTop: '50px'
}
const centerImg={
    display:'block',
    margin:'40px auto'
}


const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oups, cette page n'existe pas!</h2>
                <img style={centerImg} src={error} alt="error page"></img>
            </div>
        </div>
    )
}

export default ErrorPage;
