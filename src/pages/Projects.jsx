import React, { useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import { calendarOutline, documentTextOutline } from "ionicons/icons";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';

const ProjectSection = () => {

  // animation part
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
      }
    });

    // Animate the first title from the left
    tl.fromTo(
      title1,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 4 }
    );

    // Animate the second title from the right
    tl.fromTo(
      title2,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 4 },
      "-=1.5" // This overlaps the animations slightly
    );

    // Cleanup on component unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  const projects = [
    {
      title: "Ligula tristique quis risus",
      description:
        "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
      imgSrc: blog1, // Corrected this line
      imgAlt: "Ligula tristique quis risus",
      date: "14 Apr 2022",
      category: "Coding",
    },
    {
      title: "Nullam id dolor elit id nibh",
      description:
        "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
      imgSrc: blog2, // Corrected this line
      imgAlt: "Nullam id dolor elit id nibh",
      date: "29 Mar 2022",
      category: "Workspace",
    },
    {
      title: "Ultricies fusce porta elit",
      description:
        "Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.",
      imgSrc: blog3, // Corrected this line
      imgAlt: "Ultricies fusce porta elit",
      date: "26 Feb 2022",
      category: "Meeting",
    },
  ];

  return (
    <section
      className="section project bg-gray-100"
      aria-labelledby="project-label"
    >
      <div className="container mx-auto p-4 mb-20">
        <p className="section-subtitle text-center" id="project-label">
          Case Studies
        </p>
        <h2 className="h2 section-title text-center mt-5 mb-20">
          <span ref={title1Ref} className="text-4xl font-semibold block">
            Check out some of our awesome projects
          </span>
          <span ref={title2Ref} className="text-4xl font-semibold block">
            with creative ideas and great design.
          </span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <li key={index} className="flex justify-center">
              <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden h-full max-w-xs m-0 p-0">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 560, "--height": 350 }}
                >
                  <img
                    src={project.imgSrc}
                    width="560"
                    height="350"
                    loading="lazy"
                    alt={project.imgAlt}
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <div className="card-content p-6">
                  <h3 className="h3 mb-4">
                    <a
                      href="#"
                      className="card-title text-lg font-bold transition-colors duration-200 hover:text-blue-600"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="card-text mb-5">{project.description}</p>
                  <ul className="card-meta-list flex flex-wrap gap-3">
                    <li className="card-meta-item flex items-center text-sm text-blue-400 gap-1">
                      <IonIcon icon={calendarOutline} aria-hidden="true" />
                      <time className="meta-text">{project.date}</time>
                    </li>
                    <li className="card-meta-item flex items-center text-sm text-blue-400 gap-1">
                      <IonIcon icon={documentTextOutline} aria-hidden="true" />
                      <span className="meta-text">{project.category}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
