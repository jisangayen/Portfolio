import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/p3.png',
    title: 'Dr. Appointment Project',
    tags: ['React', 'Node', 'Development'],
    projectLink: 'https://doctor-appointment-frontend-six.vercel.app/'
  },
  {
    imgSrc: '/images/p2.png',
    title: 'Fook Finder App',
    tags: ['Responsive', 'React','TailwindCSS'],
    projectLink: 'https://book-finder-dun-xi.vercel.app/'
  },
  {
    imgSrc: '/images/p4.png',
    title: 'Music App',
    tags: ['HTML', 'CSS', 'Development'],
    projectLink: 'https://spotify-seven-eta.vercel.app/'
  },
  {
    imgSrc: '/images/p5.png',
    title: 'Admin Panel',
    tags: ['Web-design', 'Node',"Authication"],
    projectLink: 'https://doctor-appointment-admin-six.vercel.app/'
  },
  // {
  //   imgSrc: '/images/project-5.jpg',
  //   title: 'eCommerce website',
  //   tags: ['eCommerce', 'Development'],
  //   projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  // },
  // {
  //   imgSrc: '/images/project-6.jpg',
  //   title: 'vCard Personal portfolio',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  // },
];

const Work = () => {
  return (
    <section 
    className="section"
    id='work'
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>

            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                {
                  works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                    key={key}
                    imgScr={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"


                    />
                  ))
                }
            </div>
        </div>

    </section>
  )
}

export default Work