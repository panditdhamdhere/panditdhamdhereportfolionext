// import { Inter } from 'next/font/google'

import Main from "@/components/Main";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
}
