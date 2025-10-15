"use clients";
import Image from "next/image";
import sbg1 from "../../../public/Assets/companies/company_bg.jpg" 


export default function Companies() {
  return (
    <>
    <main> 
      <Image
        src={sbg1}
        alt="company background"
        className="h-[30vh] bg-cover justigy-center" />
      
    </main>
    </>
      
    
  );
}
