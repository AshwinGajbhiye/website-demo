import React, { useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import {
  brushOutline,
  codeSlashOutline,
  videocamOutline,
  colorPaletteOutline,
} from "ionicons/icons";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top 90%",
        end: "bottom 80%",
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

  return (
    <section className="text-center">
      <div className="container mx-auto px-4 relative h-screen w-full mt-10">
        {/* Background Box */}
        <div className="absolute inset-0 bg-white shadow-lg rounded-3xl -z-10"></div>

        <p className="text-gray-500 mb-8">What We Do?</p>
        <h2 className="text-4xl font-semibold mb-12">
        <span ref={title1Ref} className="block" >The service we offer is specifically</span>
        <span ref={title2Ref} className="title2 block">designed to meet your needs.</span>
          
        </h2>

        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mt-20">
          <li>
            <div className="p-12 shadow-md rounded-xl bg-white transition-transform transform hover:scale-105 max-w-[17rem] mx-auto">
              <div className="w-12 h-12 bg-white flex justify-center items-center text-black text-4xl rounded-full mx-auto shadow-md">
                <IonIcon className="w-7 h-7 font-bold" icon={brushOutline} />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Web Design</h3>
              <p className="text-gray-600 mb-4">
                Transform your online presence with our expert web design
                services. We create stunning, user-friendly websites that
                captivate and convert visitors.
              </p>
              <a
                href="#"
                className="flex justify-center items-center text-indigo-600 font-bold hover:underline"
              >
                <span>Learn More</span>
                <IonIcon icon="arrow-forward-outline" className="ml-2" />
              </a>
            </div>
          </li>

          <li>
            <div className="p-12 shadow-md rounded-xl bg-white transition-transform transform hover:scale-105 max-w-[17rem] mx-auto">
              <div className="w-12 h-12 bg-white flex justify-center items-center text-black text-4xl rounded-full mx-auto shadow-md">
                <IonIcon
                  className="w-7 h-7 font-bold"
                  icon={codeSlashOutline}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance your online presence with our web development services.
                We build robust, scalable websites tailored to your business
                needs.
              </p>
              <a
                href="#"
                className="flex justify-center items-center text-indigo-600 font-bold hover:underline"
              >
                <span>Learn More</span>
                <IonIcon className="ml-2" icon="arrow-forward-outline" />
              </a>
            </div>
          </li>

          <li>
            <div className="p-12 shadow-md rounded-xl bg-white transition-transform transform hover:scale-105 max-w-[17rem] mx-auto">
              <div className="w-12 h-12 bg-white flex justify-center items-center text-black text-4xl rounded-full mx-auto shadow-md">
                <IonIcon className="w-7 h-7 font-bold" icon={videocamOutline} />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Video Editing</h3>
              <p className="text-gray-600 mb-4">
                Elevate your brand with our video editing services. We craft
                engaging, professional videos that captivate audiences and
                enhance your message.
              </p>
              <a
                href="#"
                className="flex justify-center items-center text-indigo-600 font-bold hover:underline"
              >
                <span>Learn More</span>
                <IonIcon className="ml-2" icon="arrow-forward-outline" />
              </a>
            </div>
          </li>

          <li>
            <div className="p-12 shadow-md rounded-xl bg-white transition-transform transform hover:scale-105 max-w-[17rem] mx-auto">
              <div className="w-12 h-12 bg-white flex justify-center items-center text-black text-4xl rounded-full mx-auto shadow-md">
                <IonIcon
                  className="w-7 h-7 font-bold"
                  icon={colorPaletteOutline}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Logo Design</h3>
              <p className="text-gray-600 mb-4">
                Boost your brand with our creative logo and product design. We
                make eye-catching, memorable designs that help your business
                stand out.
              </p>
              <a
                href="#"
                className="flex justify-center items-center text-indigo-600 font-bold hover:underline"
              >
                <span>Learn More</span>
                <IonIcon className="ml-2" icon="arrow-forward-outline" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
