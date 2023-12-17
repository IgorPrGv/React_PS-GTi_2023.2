import { useEffect, useState } from "react"
import image1 from '../images/lecturer-team.jpg';
import image2 from '../images/industry.jpg';
import image3 from '../images/connections.jpg';

function Prizes(){
    return(
        <>
            {/*Prizes cards*/}
            <div className="flex flex-col items-center justify-center gap-3 p-5 font-Poppins ">
                <h1 className="text-4xl font-bold text-primary">Números</h1>
                <p className="text-2xl text-primary text-center">Nossos reconhecimentos obtido no mercado</p>
            </div>
            <div className="flex flex-col md:flex-wrap justify-center items-center md:items-center md:pb-4 pb-9 md:gap-10 gap-4 md:max-w-5/6 md:flex-row">
                
                <div className=" bg-fourth flex flex-col justify-center items-center w-52 mb-2 mt-2 rounded-2xl">
                    <div className=" text-primary text-center font-bold overflow-hidden">
                        <img src={image1} className="rounded-t-lg mb-3 md:mb-3 md:ml-0 overflow-hidden max-w-auto transition duration-300 ease-in-out hover:scale-110" />
                        <h2>Maior quantidade de profissionais qualificados</h2>
                    </div>
                    <div className=" flex-col items-center pl-5 pr-5 pb-5 pt-2 justify-center gap-2">
                        <p className="text-secondary text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi optio totam nisi labore.</p>
                        <p className="text-secondary text-right right-3 italic font-bold  text-xs"> - New York Times,2020</p>
                    </div>
                </div>
                
                <div className=" bg-fourth flex flex-col justify-center items-center w-52 mb-2 mt-2 rounded-2xl">
                    <div className=" text-primary text-center overflow-hidden font-bold ">
                        <img src={image2} className="rounded-t-lg mb-3 md:mb-3 md:ml-0 max-w-auto transition duration-300 ease-in-out hover:scale-110" />
                        <h2>Tecnologias mais recentes do mercado</h2>
                    </div>
                    <div className=" flex-col items-center pl-5 pr-5 pb-5 pt-2 justify-center gap-2">
                        <p className="text-secondary text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi optio totam nisi labore.</p>
                        <p className="text-secondary text-right right-3 italic font-bold  text-xs"> - CNN, 2021</p>
                    </div>
                </div>

                <div className=" bg-fourth flex flex-col justify-center items-center w-52 mb-2 mt-2 rounded-2xl">
                    <div className=" text-primary text-center font-bold overflow-hidden">
                        <img src={image3} className="rounded-t-lg mb-3 md:mb-3 md:ml-0  max-w-auto transition duration-300 ease-in-out hover:scale-110" />
                        <h2>Maior logística nacional</h2>
                    </div>
                    <div className=" flex-col items-center pl-5 pr-5 pb-5 pt-2 justify-center gap-2">
                        <p className="text-secondary text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi optio totam nisi labore.</p>
                        <p className="text-secondary text-right right-3 italic font-bold  text-xs"> - Jornal O Globo, 2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prizes