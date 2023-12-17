function Progress(props){
   return(
      <>
         <h2 className="font-Poppins font-bold text-fifth text-center">
            Questão {props.current} de {props.total}
         </h2>
      </>
   )
}

export default Progress