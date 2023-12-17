import Answer from "./Answer"

function Options(props){
   return(
      <>
         <Answer letter="A" answer={props.question.A} mouseClick={props.mouseClick} selected={props.currentAnswer === 'A'}/>
         <Answer letter="B" answer={props.question.B} mouseClick={props.mouseClick} selected={props.currentAnswer === 'B'}/>
         <Answer letter="C" answer={props.question.C} mouseClick={props.mouseClick} selected={props.currentAnswer === 'C'}/>
         <Answer letter="D" answer={props.question.D} mouseClick={props.mouseClick} selected={props.currentAnswer === 'D'}/>
      </>
   )
}

export default Options