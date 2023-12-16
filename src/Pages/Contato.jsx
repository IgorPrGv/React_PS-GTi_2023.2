import { useEffect, useState } from "react";

function Contato(){
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://react-ps-g-ti-jr-2023-2-json-server.vercel.app/location", {
        method: "Get",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((resp) => resp.json())
        .then((data) => setResults(data));
    }, []);
    return(
        <>
            <section className="bg-hero2  bg-cover w-screen min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 w-52 md:w-5/6 h-full mx-auto">
                    <h1 className=" text-center text-3xl md:text-8xl text-fourth font-bold">
                        Contate-nos
                    </h1>
                    <p className="text-center text-base md:text-3xl text-fourth font-bold">
                        Tire todas as suas dúvidas com a gente
                    </p>
                </div>
            </section>

            <section className="bg-fifth w-screen min-h-screen flex items-center justify-center">
                <div className="flex flex-wrap justify-center md:justify-between gap-4 md:max-w-4xl pb-4 md:pb-8 pt-4 md:pt-8">
                {results.map((result, index) => (
                    <div
                    key={index}
                    className="bg-fourth flex flex-col justify-center items-center w-52 md:w-72 mb-4 mt-4 rounded-2xl"
                    >
                    <div className="text-primary text-center font-bold overflow-hidden">
                        <img
                        src={result.image}
                        className="rounded-t-lg mb-3 md:mb-3 md:ml-0 overflow-hidden max-w-auto transition duration-300 ease-in-out hover:scale-110"
                        />
                        <h2>{result.name}</h2>
                    </div>
                    <div className="flex-col items-center pl-5 pr-5 pb-5 pt-2 justify-center gap-2">
                        <p className="text-secondary text-justify">{result.address}</p>
                    </div>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default Contato
