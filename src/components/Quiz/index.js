import React, {Component, Fragment} from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {QuizApp} from '../quizApp/';
import QuizOver from '../QuizOver';
import {FaChevronRight} from 'react-icons/fa';

toast.configure();

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.initialState={
            levelNames:["debutant", "confirme", "expert"],
            quizLevel:0,
            maxQuestions: 10,
            storedQuestions: [],
            question:null,
            options:[],
            idQuestion:0,
            btnDisabled:true,
            userAnswer:null,
            score: 0,
            showWelcomeMsg:false,
            quizEnd:false
        }
        this.state = this.initialState;
    }
    
    storedDataRef = React.createRef();

    

    loadQuestions = level =>{
        const fetchArrayQuiz = QuizApp[0].quiz[level];
        console.log(QuizApp);
        console.log(fetchArrayQuiz);
        if(fetchArrayQuiz.length >= this.state.maxQuestions){
            this.storedDataRef.current = fetchArrayQuiz;
            const newArray = fetchArrayQuiz.map(({answer, ...keepRest})=>keepRest);
            this.setState({
                storedQuestions:newArray
            })
            
        }else{
            console.log("Pas assez de questions")
        }
    }

    showToastMsg=pseudo=>{
        if(this.state.showWelcomeMsg){
            this.setState({
                showWelcomeMsg:true
            })

        toast.warn(`Bienvenue ${pseudo}, et bonne chance!`,{
            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:false
        });
    }
    }

    nextQuestion=()=>{
        if(this.state.idQuestion === this.state.maxQuestions-1){
            //end
               //this.gameOver();
               this.setState({
                quizEnd:true
               })
        }else{
            this.setState(prevState=> ({
                idQuestion: prevState.idQuestion + 1
            }))
        }
        // +1 pour le score
        const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;  
        if(this.state.userAnswer === goodAnswer){
            this.setState(prevState=>  ({
                score:prevState.score+1
            }))
            toast.success('Bravo +1',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                bodyClassName:"toastify-color"
            });

        }else{
            toast.error('Rate 0',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                bodyClassName:"toastify-color"
            });
        }
    }

    componentDidMount(){
        this.loadQuestions(this.state.levelNames[this.state.quizLevel]);  
    }

    componentDidUpdate(prevProps, prevState){
        if((this.state.storedQuestions !== prevState.storedQuestions) && this.state.storedQuestions.length){

            console.log(this.state.storedQuestions);
           this.setState({
               question:this.state.storedQuestions[this.state.idQuestion].question,
               options:this.state.storedQuestions[this.state.idQuestion].options
           })
           console.log(this.state.question);
        }
        if((this.state.idQuestion!==prevState.idQuestion) && this.state.storedQuestions.length){
            this.setState({
                question:this.state.storedQuestions[this.state.idQuestion].question,
                options:this.state.storedQuestions[this.state.idQuestion].options,
                userAnsewr:null,
                btnDisabled:true
            })
        }

       if(this.state.quizEnd !== prevState.quizEnd){
        const gradepercent = this.getPercentage(this.state.maxQuestions, this.state.score);
           this.gameOver(gradepercent);
       }

       if(this.props.userData.pseudo !== prevProps.userData.pseudo){
           this.showToastMsg(this.props.userData.pseudo)
       }

    }

    submitAnswer = selectAnswer=>{
       this.setState({
           userAnswer:selectAnswer,
           btnDisabled:false
       })
    }

    getPercentage = (maxQuestions, ourScore) => (ourScore/maxQuestions)*100;

    gameOver= percent =>{
       if(percent>=50){
          this.setState({
              quizLevel: this.state.quizLevel+1,
              percent:percent
          })
       }else{
        this.setState({
            percent:percent
        })
       }
        
    }

    loadLevelQuestions = param =>{
        this.setState({...this.initialState, quizLevel: param })
        this.loadQuestions(this.state.levelNames[param])
    }
    


    render(){

        //const {pseudo} = this.props.userData

        const displayOptions = this.state.options.map((option, index)=>{
             return (
                <p key={index} 
                className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`}
                onClick={() => this.submitAnswer(option) }
                >
                {option}</p>
             )
        })
       return this.state.quizEnd ? (
           <QuizOver ref={this.storedDataRef}
                     levelNames={this.state.levelNames}
                     score={this.state.score}
                     maxQuestions={this.state.maxQuestions}
                     quizLevel={this.state.quizLevel}
                     percent={this.state.percent}
                     loadLevelQuestions={this.loadLevelQuestions}
           />
       ):( <Fragment>
        <Levels 
            levelNames={this.state.levelNames}
            quizLevel={this.state.quizLevel}
        />
        <ProgressBar idQuestion={this.state.idQuestion} 
            maxQuestions={this.state.maxQuestions}
        />
        <h2>{this.state.question}</h2>

        {displayOptions}
        <button 
        disabled={this.state.btnDisabled} 
        className="btnSubmit"
        onClick={this.nextQuestion}
        >
        {
            this.state.idQuestion < this.state.maxQuestions-1 ? 
                "Suivant" : "Terminer"
        }
        </button>
      </Fragment>)

        
    }
}

export default Quiz;
