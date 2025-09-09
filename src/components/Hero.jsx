import React from "react";

import { ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28  lg:pt-36 ">
      <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">
        <div>
          <div className="flex items-center gap-4">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/ProfilePic.png"
                alt="Jisan Hoque Gayen"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute rounded-full inset-0 bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="font-inter font-extrabold xl:text-5xl sm:text-4xl text-3xl leading-tight mb-8 mt-4 text-zinc-100">
            I’m a web{" "}
            <span className=" text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-PrimaryColor
              to-PrimaryColor2
              drop-shadow font-black text-4xl xl:text-6xl ">Developer</span>
            <br />
            <span className="font-medium text-zinc-400">
              passionate about building modern, scalable, and user-friendly websites.
            </span>
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download Cv"
              icon="download"
              href="/JisanHoqueGayen.pdf"
              target="_blank"
              download="Jisan.pdf"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden ">
            <img
              src="/images/ProfilePic.png"
              alt="jisan"
              width={656}
              height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
