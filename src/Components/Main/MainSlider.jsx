import { ChevronLeft, ChevronRight } from 'react-feather';
import { useState, useEffect } from 'react';
import image1 from "../images/teste-1.jpg";
import image2 from "../images/teste-2.jpg";
import image3 from "../images/teste-3.jpg";
import image4 from "../images/teste-4.jpg";

function MainSlider({ autoslide }){

    const images = [image1, image2, image3, image4]
    const [current, setCurrent] = useState(0)
    const autoSlideInterval = 3000

    const prev = () => setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
    const next = () => setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))
    const goToImage = (imageIndex) => {setCurrent(imageIndex);}

    useEffect(() => {
        if (!autoslide) return 
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoslide])

    return(
        <>
            <section className='w-full m-auto brightness-50'>
                {/*Images*/}
                <div className='flex bg-cover duration-300 ease-out' style={{ backgroundImage: `url(${images[current]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh'}}>
                </div>

                {/*Buttons left-right*/}
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button  className='p-1 rounded-full shadow bg-white/80 text-gray800 hover:bg-white'>
                        <ChevronLeft onClick={prev}/>
                    </button>
                    <button className='p-1 rounded-full shadow bg-white/80 text-gray800 hover:bg-white'>
                        <ChevronRight onClick={next}/>
                    </button>
                </div>

                {/*Images bullets*/}
                <div className='absolute bottom-4 right-0 left-0 cursor-pointer'>
                    <div className='flex items-center justify-center gap-2'>
                        {images.map((_img,i)=>(
                            <div
                                key = {i}
                                onClick={()=> goToImage(i)}
                                className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`}
                            />
                        ))}
                    </div>
                </div>
                
            </section>
        </>
    );
}
export default MainSlider