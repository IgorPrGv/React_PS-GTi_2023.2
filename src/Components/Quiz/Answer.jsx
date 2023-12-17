function Answer(props){

   return(
      <>
         <div className="flex flex-row pb-5">
            <button className="bg-fourth text-justify leading-5 text-primary pb-2 pt-2 pl-4 pr-4 font-Poppins rounded-lg" value={props.letter} onClick={props.mouseClick}>
               <span className="">{props.letter} - </span> {props.answer} 
            </button>
         </div>
      </>
   )
}

export default Answer