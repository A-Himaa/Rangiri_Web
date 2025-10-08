import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return(
      <main className="relative min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/Assets/home_bg_n.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/12"></div> {/* 40% opacity black overlay */}


    </main>


    )

}
