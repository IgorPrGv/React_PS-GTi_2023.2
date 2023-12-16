import MainSlider from "../Components/Main/MainSlider"
import Clients from "../Components/Main/Clients"
import Prizes from "../Components/Main/Prizes";

function Main(){
    
    return( 
        <>
        {/*Header*/}
        <section className=" bg-fifth w-full min-h-screen flex items-center justify-center">
            <MainSlider autoslide={true}/>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 w-52 md:w-5/6 h-full mx-auto">
                <h1 className=" text-center text-3xl md:text-8xl text-secondary font-bold"> Cosmos Energy</h1>
                <p className="text-center text-base md:text-3xl text-secondary font-bold">A solução renovável para você evoluir coexistentemente com o planeta</p>
            </div>
        </section>

        {/*Prizes Section*/}
        <section className=" bg-fifth w-full min-h-screen flex flex-col items-center justify-center">
            <Prizes/>
        </section>

        {/*Clients*/}
        <section className=" bg-fifth w-full min-h-screen flex items-center justify-center">
            <Clients/>
        </section>
        </>
    );
}
export default Main