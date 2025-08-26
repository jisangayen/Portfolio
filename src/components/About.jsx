import { number } from "prop-types";
import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of Experience",
    number: 5,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I’m Jisan Hoque Gayen, a passionate and detail-oriented developer
            focused on creating efficient, scalable, and user-friendly
            applications. I specialize in modern technologies, love solving
            complex problems, and write clean, maintainable code. Always eager
            to learn and grow—let’s build something great together.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                    <span className="text-sky-300 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img src="/images/logo-jisan.png" alt="logo"  
            className="ml-auto md:w-[120px] md:h-[120px] hidden"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
