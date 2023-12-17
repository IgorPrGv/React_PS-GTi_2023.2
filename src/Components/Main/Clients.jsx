import { useEffect, useState } from "react"

function Clients(){

    const [results, setResults] = useState([]);
    useEffect(()=>{
        fetch('https://react-ps-g-ti-jr-2023-2-json-server.vercel.app/clients', {
            method: 'Get',
            headers: {
                'Content-Type':'application/json',
            },
        }).then((resp)=> resp.json()).then((data) => setResults(data))
    }, []);

    return(
        <>
            <section className="w-full min-h-screen flex items-center justify-center flex-col pb-3">
                {/*Clients label*/}
                <div className="flex flex-col items-center justify-center gap-3 p-5 font-Poppins ">
                    <h1 className="text-4xl font-bold text-primary">Depoimentos</h1>
                    <p className="text-2xl text-primary leading-6 text-center">Aqui é o cliente que fala da gente pra você!</p>
                </div>

                {/*Clients card*/}
                <div className="flex flex-col items-center md:flex md:items-center md:pb-0 pb-9 left-0 md:pl-0">
                    {
                        results.map((result,index)=> (
                            <div className=" bg-fourth flex flex-col justify-center items-center w-5/6 mb-2 mt-2 rounded-2xl">
                                <div className="  text-primary hover:scale-110 duration-200 hover:text-fifth text-center pt-2 font-bold ">
                                    <h2>{result.name}</h2>
                                </div>
                                <div className=" flex-col md:flex-row md:inline-flex items-center pl-5 pr-5 pb-5 pt-2 justify-center gap-4">
                                    <img src={result.image} className="flex items-center ml-18 md:ml-0 justify-center w-24 h-24 md:w-32 md:h-32 rounded-md" />
                                    <p className="text-secondary leading-5 text-justify">{result.opinion}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Clients
