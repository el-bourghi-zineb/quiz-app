import React, {Fragment} from 'react'

const ProgressBar = (props) => {

    //console.log(props.maxQuestions);
    const actualQuestion = props.idQuestion+1;
    //console.log(actualQuestion);

const getWidth = (totalQuestions, questionId)=>{
     return (100/totalQuestions)*questionId
} 


const  progressPercent = getWidth(props.maxQuestions, actualQuestion);

    return (
       <>
        <div className="percentage">
            <div className="progressPercent">{`Question:${props.idQuestion+1}/${props.maxQuestions}`}</div>
            <div className="progressPercent">{`Progression: ${progressPercent}%`}</div>
        </div>
        <div className="progressBar">
            <div className="progressBarChange" style={{width: `${progressPercent}%`}}>
            </div>
        </div>
        </>
    )
}

export default React.memo(ProgressBar);
