function Progress(props){
   return(
      <>
         <h2>
            Questão {props.current} de {props.total}
         </h2>
      </>
   )
}

export default Progress