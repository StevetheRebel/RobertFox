import React from "react";
import amazon from "./../assets/Amazon.png";
import adobe from "./../assets/Adobe.png";
import apple from "./../assets/Apple.png";
import github from "./../assets/Github.png";
import microsoft from "./../assets/Microsoft.png";

function Client() {
  return (
    <>
      <section className="h-auto pt-12 pb-8 flex flex-col px-8 items-center justify-center gap-4 sm:flex-row">
        <div className="w-[90%] border-4 border-darkOrangeYellow rounded-3xl p-4 sm:w-[20%] md:w-[200px]">
          <img src={amazon} alt="amazon logo" className="" />
        </div>
        <div className="w-[90%] border-4 border-darkOrangeYellow rounded-3xl p-4 sm:w-[20%] md:w-[200px]">
          <img src={adobe} alt="adobe logo" className="" />
        </div>
        <div className="w-[90%] border-4 border-darkOrangeYellow rounded-3xl p-4 sm:w-[20%] md:w-[200px]">
          <img src={apple} alt="apple logo" className="" />
        </div>
        <div className="w-[90%] border-4 border-darkOrangeYellow rounded-3xl p-4 sm:w-[20%] md:w-[200px]">
          <img src={github} alt="guthub logo" className="" />
        </div>
        <div className="w-[90%] border-4 border-darkOrangeYellow rounded-3xl p-4 sm:w-[20%] md:w-[200px]">
          <img src={microsoft} alt="microsoft logo" className="" />
        </div>
      </section>
    </>
  );
}

export default Client;
