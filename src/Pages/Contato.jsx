import HeaderC from "../Components/Contato/HeaderC";
import Location from "../Components/Contato/Location";
import Message from "../Components/Contato/Message";

function Contato(){
    return(
        <>
            <section className="bg-hero2 brightness-75 bg-cover w-screen min-h-screen flex items-center justify-center">
                <HeaderC/>
            </section>

            <section className="bg-fifth w-screen min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-primary font-bold font-Poppins text-3xl md:text-6xl cursor-pointer hover:scale-110 duration-300">Nossas sedes</h1>
                <Location/>
            </section>

            <section className="bg-fifth w-screen min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-primary font-bold font-Poppins text-3xl mb-5 md:text-6xl cursor-pointer hover:scale-110 duration-300">Nos mande uma mensagem</h1>
                <Message/>
            </section>


        </>
    )
}

export default Contato
