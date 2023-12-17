import HeaderC from "../Components/Contato/HeaderC";
import Location from "../Components/Contato/Location";
import Message from "../Components/Contato/Message";
import image1 from "../Components/images/atendente.jpg"

function Contato(){
    return(
        <>
            <section className=" bg-fifth bg-cover w-full bg-no-repeat min-h-screen flex items-center justify-center">
                <div
                    className="absolute bg-cover w-full inset-0"
                    style={{ backgroundImage: `url(${image1})`, filter: 'brightness(50%)' }}
                ></div>
                <HeaderC/>
            </section>

            <section className="bg-fifth w-screen min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-primary font-bold font-Poppins text-3xl md:text-6xl cursor-pointer hover:scale-110 duration-300">Nossas sedes</h1>
                <Location/>
            </section>

            <section className="bg-fifth w-screen min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-primary  text-center font-bold font-Poppins text-3xl mb-5 md:text-6xl cursor-pointer hover:scale-110 duration-300">Nos mande uma mensagem</h1>
                <Message/>
            </section>


        </>
    )
}

export default Contato
