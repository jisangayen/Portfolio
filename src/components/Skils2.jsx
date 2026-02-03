import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

const skills = [
  {
    id: 1,
    title: "Frontend",
    desc: "React, Vue, Angular, TypeScript, TailwindCSS",
    icon: <FaCode className="text-blue-600 w-8 h-8" />,
    bg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Backend",
    desc: "Node.js, Python, Java, .NET, REST APIs",
    icon: <FaServer className="text-green-600 w-8 h-8" />,
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Database",
    desc: "PostgreSQL, MongoDB, Firebase, Redis",
    icon: <FaDatabase className="text-purple-600 w-8 h-8" />,
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "DevOps",
    desc: "AWS, Docker, Kubernetes, CI/CD, Terraform",
    icon: <FaCloud className="text-yellow-600 w-8 h-8" />,
    bg: "bg-yellow-100",
  },
];

const Skils2 = () => {
  return (
    <div className="py-12">
      {/* Heading Animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-50 mb-4">My Skills</h2>
        <motion.div
          className="w-20 h-1 bg-PrimaryColor2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Skills Grid */}
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 cursor-pointer">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="bg-transparent border border-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow duration-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`w-16 h-16 ${skill.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skils2;
