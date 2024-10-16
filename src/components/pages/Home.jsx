import React, { useRef } from "react";
import Footer from "../Footer";
import Logo from "./../../assets/Logo.png";
import Client from "../Client";
import Portfolio from "../Portfolio";

function Home() {
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-auto relative">
        <section className="mt-16 pb-8 w-full flex flex-col items-center justify-center font-mono sm:flex-row relative ">
          <div className="flex flex-col gap-4 py-12 px-2 sm:w-1/2 sm:my-0 sm:px-8 ">
            <h1 className="text-3xl text-balance font-bold sm:text-5xl w-full">
              Freelance UI Designer & Web Developer
            </h1>
            <h2 className="text-xl font-semibold sm:text-2xl ">
              Hey there, I'm Robert
            </h2>
            <p className="text-balance text-base sm:text-xl sm:w-4/5">
              I help business grow by crafting amazing web experiences. If
              you're looking for a designer and developer that likes to get
              stuff done, let's talk.
            </p>
            <div>
              <p>
                <span className="font-bold">Phone:</span> (704) 555 0127
              </p>
              <p>
                <span className="font-bold">Email:</span> hello@robertfox.design
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-robertimg bg-no-repeat bg-center bg-contain sm:w-1/2">
            <img src={Logo} alt="robert fox" className="opacity-15 sm:p-16" />
          </div>
          <button className="absolute text-sm bottom-0 right-2 px-4 py-2 z-2 bg-midPurple hover:bg-darkPurple rounded-3xl text-white sm:text-base sm:bottom-10 sm:right-5 " onClick={scrollToPortfolio}>
            Portfolio
          </button>
        </section>
        <Client />
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
