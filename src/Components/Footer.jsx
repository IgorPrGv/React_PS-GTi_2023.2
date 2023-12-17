import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

function Footer(){
    return(
        <>
            <footer className="shadow-md w-full mt-auto">
                <div className=" bg-primary  font-Poppins flex justify-center items-center ">
                    {/*Main container*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:px-24 px-5 py-5 text-fifth">
                        {/*Enterprise*/}
                        <ul >
                            <h1 className=" text-3xl mb-1 font-semibold">Empresa</h1>
                            <li className="text-base pb-0 md:pb-2 mb-1 md:mb-2">
                                <a href="#"> Sobre nós</a>
                            </li>
                            <li className="text-base pb-0 md:pb-2 mb-1 md:mb-2">
                                <a href="#"> Política de privacidade</a>
                            </li>
                            <li className="text-base pb-0 md:pb-2 mb-1 md:mb-2">
                            <a href="#"> Opções de pagamento</a>
                            </li>
                        </ul>

                        {/*Support*/}
                        <ul>
                        <h1 className=" text-3xl mb-1 font-semibold">Suporte</h1>
                            <li className="text-base pb-0 md:pb-2 mb-1 md:mb-2">
                                <a href="#"> TEL: (85)40028922</a>
                            </li>
                            <li className="text-base pb-0 md:pb-2 mb-1 md:mb-2 ">
                                <a href="#"> Tutoriais</a>
                            </li>
                            <li className="text-base pb-0 md:pb-2 mb-1 md:mb-2">
                            <a href="#"> Documentação</a>
                            </li>
                        </ul>

                        {/*Follow us*/}
                        <ul>
                        <h1 className=" text-3xl mb-2 font-semibold">Siga-nos</h1>
                            <li className="p-2 mt-0 md:mt-3 text-white cursor-pointer inline-flex items-center rounded-full bg-black hover:text-black hover:bg-slate-400 duration-300 mx-2 text-xl">
                                <FaInstagram/>
                            </li>
                            <li className="p-2 mt-0 md:mt-3 cursor-pointer inline-flex items-center rounded-full text-white bg-black hover:text-black hover:bg-slate-400 duration-300 mx-2 text-xl ">
                                <FiTwitter/>
                            </li>
                            <li className="p-2 mt-0 md:mt-3 cursor-pointer inline-flex items-center rounded-full text-white bg-black hover:text-black hover:bg-slate-400 duration-300 mx-2 text-xl">
                                <FaLinkedin/>
                            </li>
                        </ul>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer