import Services from "../Components/Sobre/Services";
import HeaderS from "../Components/Sobre/HeaderS";
function Sobre() {
  

  return (
    <>
      {/*Header Section*/}
      <section className="bg-hero bg-cover w-screen min-h-screen flex items-center justify-center">
        <HeaderS/>
      </section>

      {/*Services section*/}
      <section className="bg-fifth w-screen min-h-screen flex items-center justify-center">
        <Services/>
      </section>
    </>
  );
}

export default Sobre;
