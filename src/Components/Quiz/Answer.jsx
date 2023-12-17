function Answer(props){

   return(
      <>
         <div className="flex inline-block bg gap-3">
            <button value={props.letter} onClick={props.mouseClick}>
               <span className="">{props.letter} - </span> {props.answer} 
            </button>
         </div>
      </>
   )
}

export default Answer