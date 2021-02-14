import React, {Fragment, useEffect, useState} from 'react';
import {GiTrophyCup} from 'react-icons/gi';
import Loader from '../Loader';
import Modal from '../Modal';
import axios from 'axios';

const QuizOver = React.forwardRef((props, ref) => {

const {levelNames, 
       score, 
       maxQuestions, 
       quizLevel, 
       percent,
       loadLevelQuestions
    } = props;
//console.log(loadLevelQuestions(quizLevel));

const [asked, setAsked] = useState([]);
const [openModal, setOpenModal] = useState(false)

useEffect(() => {
    setAsked(ref.current)
}, [ref])

const averageGrade = maxQuestions/2;

if(score<averageGrade){
    setTimeout(()=>{
        loadLevelQuestions(0)
    },3000)
}

const showModal = id=>{
    setOpenModal(true);
    axios
    .get()
    .then(response=>{
        
    })
    .catch(err=>console.log(err) )
}
const hideModal=()=>{
    setOpenModal(false);
}

const decision = score >= averageGrade ? (

    <Fragment>
    <div className="stepsBtnContainer">

     {
         quizLevel < levelNames.length ?
         (
             <Fragment>
            <p className="successMsg">Bravo, passez au niveau suivant</p>
            <button className="btnResult success"
            onClick={() => loadLevelQuestions(quizLevel)}
            >Niveau Suivant</button>
            </Fragment>
         ):(
            <Fragment>
            <p className="successMsg">
            <GiTrophyCup size='50px'/> Bravo, vous etes un expert</p>
            <button className="btnResult gameOver"
            onClick={() => loadLevelQuestions(0)}
            >Acceuil</button>
            </Fragment>
         )
     }
      </div>
        <div className="percentage">
            <div className="progressPercent">Reussite: {percent} %</div>
            <div className="progressPercent">Note: {score}/{maxQuestions}</div>
        </div>
    </Fragment>
) : (
   <Fragment>
           <div className="stepsBtnContainer">
           <p className="failureMsg">Vous avez echoue !</p>
            
          </div>
           <div className="percentage">
            <div className="progressPercent">Reussite: {percent} %</div>
            <div className="progressPercent">Note: {score}/{maxQuestions}</div>
        </div>
           
   </Fragment>
)
const questionAnswer = score >=averageGrade  ? (asked.map(question => {
    return(
        <tr key={question.id}>
            <td>{question.question}</td>
            <td>{question.answer}</td>
            <td><button className="btnInfo" 
            onClick={() => showModal(question.heroId)}
            >Infos</button></td>*
        </tr>
    )
})) :
 (
    <tr>
            <td colSpan="3">
            <Loader loadingMsg={"pas de reponses"}
                styling={{textAlign:'center', color:'red'}}
            />
            </td>
        </tr>
 )


    return (
        <Fragment>

                {decision}

        <hr/>
        <p>Les reponses aux questions posees: </p>
        <div className="answerContainer">
            <table className="answers">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Reponse</th>
                    <th>Infos</th>
                </tr>
            </thead>
            <tbody>
              {questionAnswer}
            </tbody>
            </table>
        </div>

       <Modal showModal={openModal} hideModal={hideModal}>
           <div className="modalHeader">
             <h2>Title</h2>
           </div>
           <div className="modalBody">
           <h3>Merci beaucoup monsieur Wassim pour l'intérêt que vous avez portez à ma candidature et ca me fait plaisir d'échanger avec vous. </h3>
           <br/>
           <h3>Je suis désolé parce que j'ai pas encore terminer cette fonctionalité qui doit normalement contient plus d'informations sur la réponse.</h3>
           </div>
           <div className="modalFooter">
            <button className="modalBtn">Fermer</button>
           </div>
       </Modal>

        </Fragment>
    )
})

 

export default React.memo(QuizOver);
