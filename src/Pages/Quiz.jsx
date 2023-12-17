import { useState } from "react"
import Progress from "../Components/Quiz/Progress"
import Question from "../Components/Quiz/Question"
import Options from "../Components/Quiz/Options"
import {dataQuiz} from "../data/quizQuestions"


function Quiz(){

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [answers, setAnswers] = useState([])
    const [error, setError] = useState('')
    const [showResults, setshowResults] = useState(false)

    const question = dataQuiz[currentIndex] 

    /*Selected item*/
    const mouseClick = e =>{
        setCurrentAnswer(e.target.value) //It gets the string letter from the clicked option
        setError('')
    }

    /*Please select an option*/
    const renderError = ()=>{
        if(!error){
            return;
        }
        return <div className=" text-red-600">{error}</div>
    }

    /*Next button*/
    const next = ()=>{
        const answer = {id: question.id, answer: currentAnswer}

        /*Confirm that one option was selected*/
        if(!currentAnswer){
            setError('Por favor, selecione uma opção')
            return 
        }

        /*Putting the answers together*/
        answers.push(answer)
        setAnswers(answers)
        setCurrentAnswer('')

        /*Verifying if there's still questions left*/
        if(currentIndex + 1 < dataQuiz.length){
            setCurrentIndex(currentIndex + 1)
            return
        }

        setshowResults(true) //Ending the quiz
    }

    /*Calculating the results*/
    const calcResults = ()=>{
        let resultA = 0
        let resultB = 0
        let resultC = 0
        let resultD = 0

        answers.forEach(answer => {
            switch(answer.answer){
                case 'A':
                    resultA +=1
                    break;
                case 'B':
                    resultB +=1
                    break;
                case 'C':
                    resultC +=1
                    break;
                case 'D':
                    resultD +=1
                    break;
            }
        })

        const maxResult = Math.max(resultA, resultB, resultC, resultD);
        if (maxResult === resultA) {
            return 'A';
        } else if (maxResult === resultB) {
            return 'B';
        } else if (maxResult === resultC) {
            return 'C';
        } else {
            return 'D';
        }
    }
    /*Displaying the results*/
    const renderResultsData = ()=>{
        const mainResult = calcResults()

        if (mainResult === 'A'){
            return(
                <div className="bg-fourth text-justify leading-5 text-primary pb-2 pt-2 pl-4 pr-4 font-Poppins rounded-lg">
                    <h2>Vc escolheu mais a letra A, logo este é o melhor serviço para você:</h2>
                    <h3 className="font-semibold text-center pt-4">Instalação de placas solares na sua residência</h3>
                </div>
            )
        } else if(mainResult === 'B'){
            return(
                <div className="bg-fourth text-justify leading-5 text-primary pb-2 pt-2 pl-4 pr-4 font-Poppins rounded-lg">
                    <h2>Vc escolheu mais a letra B, logo este é o melhor serviço para você:</h2>
                    <h3 className="font-semibold text-center pt-4">Construção de usinas eólicas conectadas diretamente à sua empresa</h3>
                </div>
            )
        } else if(mainResult === 'C'){
            return(
                <div className="bg-fourth text-justify leading-5 text-primary pb-2 pt-2 pl-4 pr-4 font-Poppins rounded-lg">
                    <h2>Vc escolheu mais a letra C, logo este é o melhor serviço para você:</h2>
                    <h3 className="font-semibold text-center pt-4">Desenvolvimento de um Sistema em tempo real para você melhor acompanhar o seu sistema renovável</h3>
                </div>
            )
        } else if(mainResult === 'D'){
            return(
                <div className="bg-fourth text-justify leading-5 text-primary pb-2 pt-2 pl-4 pr-4 font-Poppins rounded-lg">
                    <h2>Vc escolheu mais a letra D, logo este é o melhor serviço para você:</h2>
                    <h3 className="font-semibold text-center pt-4">Manutenção de componentes</h3>
                </div>
            )
        }
    }

    /*Restart the quiz*/
    const restart = ()=>{
        setAnswers([])
        setCurrentAnswer('')
        setCurrentIndex(0)
        setshowResults(false)
    }

    /*Presenting the results or the quiz*/
    if(showResults){
        return(
            <>
                <section className=" bg-fifth w-full min-h-screen flex flex-col items-center justify-center gap-4">
                    <div className=" bg-third w-4/5 md:w-3/5 h-3/5 p-4 rounded-lg shadow-md shadow-primary">
                        <h2 className="font-bold text-fifth text-center">Resultado</h2>
                        {renderResultsData()}
                    </div>
                    <div className="flex items-center justify-center font-bold cursor-pointer hover:text-third ">
                        <button className="bg-third font-Poppins shadow-md shadow-primary leading-4 text-center text-fifth rounded-md w-4/6 mb-5 p-2" onClick={restart}>Fazer novamente</button>
                    </div>
                </section>
                
            </>
        )
    } else {
        return(
            <>
                <section className=" bg-fifth w-full min-h-screen flex flex-col items-center justify-center gap-4">
                    <div className="font-Poppins bg-third w-4/5 md:w-3/5 h-3/5 p-4 rounded-lg shadow-md shadow-primary">
                        <Progress total="5" current={`${currentIndex + 1}`}/>
                        <Question question={question.question}/>
                        {renderError()}
                        <Options question={question}  currentAnswer={currentAnswer} mouseClick={mouseClick}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-third shadow-md font-bold shadow-primary leading-4 text-center text-fifth  rounded-md w-4/6 mb-5 p-2" onClick={next}>Confirmar e prosseguir</button>
                    </div>
                </section>
            </>
        )
    }
    
}

export default Quiz