import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK_CONTENTS } from "../../constants";
import Image from "next/image";

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "INFOSYS",
        value: "Infosys_SSE",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.Infosys_SSE}
          />
        ),
      },
      {
        title: "INFOSYS",
        value: "Infosys_SE",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.Infosys_SE}
          />
        ),
      },
       {
        title: "INFOSYS",
        value: "Infosys_SET",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.Infosys_SET}
          />
        ),
      },
      {
        title: "UltraRobotics",
        value: "UltraRobotics",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.UltraRobotics}
          />
        ),
      },
    ],
    [isDesktop]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
    >
      <Image
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              A quick recap of where I&apos;ve worked.{" "}
            </h2>
          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;

// import { useEffect, useMemo, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Tabs from "./Tabs/Tabs";
// import StickyScroll from "./StickyScroll/StickyScroll";
// import { MENULINKS, WORK_CONTENTS } from "../../constants";
// import Image from "next/image";

// const Work = ({ isDesktop }) => {
//   const sectionRef = useRef(null);

//   const tabItems = useMemo(
//     () => [
//       {
//         company: "Infosys",
//         value: "Infosys_SSE",
//         title: "Senior System Engineer",
//         location: "Pune, Maharashtra",
//         range: "April 2023 - Present",
//         responsibilities: [
//           "Managing AWS cloud infrastructure and CI/CD pipelines.",
//           "Automating deployments with Jenkins and Terraform.",
//           "Monitoring and logging with Splunk and CloudWatch.",
//         ],
//         content: (
//           <StickyScroll
//             isDesktop={isDesktop}
//             contentItems={WORK_CONTENTS.Infosys_SSE}
//           />
//         ),
//       },
//       {
//         company: "Infosys",
//         value: "Infosys_SE",
//         title: "System Engineer",
//         location: "Pune, Maharashtra",
//         range: "October 2022 - April 2023",
//         responsibilities: [
//           "Developed and maintained automation scripts.",
//           "Worked on Docker and Kubernetes-based deployments.",
//           "Collaborated with teams to enhance CI/CD workflows.",
//         ],
//         content: (
//           <StickyScroll
//             isDesktop={isDesktop}
//             contentItems={WORK_CONTENTS.Infosys_SE}
//           />
//         ),
//       },
//       {
//         company: "Infosys",
//         value: "Infosys_SET",
//         title: "System Engineer Trainee",
//         location: "Pune, Maharashtra",
//         range: "2022",
//         responsibilities: [
//           "Gained hands-on experience in cloud automation.",
//           "Assisted in AWS infrastructure setup.",
//           "Worked on scripting tasks for automation.",
//         ],
//         content: (
//           <StickyScroll
//             isDesktop={isDesktop}
//             contentItems={WORK_CONTENTS.Infosys_SET}
//           />
//         ),
//       },
//       {
//         company: "Ultra Robotics & Technologies",
//         value: "UltraRobotics",
//         title: "Cloud Intern (AWS)",
//         location: "Pune, Maharashtra",
//         range: "2021",
//         responsibilities: [
//           "Worked on AWS cloud solutions.",
//           "Built automation scripts for cloud resource management.",
//           "Enhanced cloud security and compliance.",
//         ],
//         content: (
//           <StickyScroll
//             isDesktop={isDesktop}
//             contentItems={WORK_CONTENTS.UltraRobotics}
//           />
//         ),
//       },
//     ],
//     [isDesktop]
//   );

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap
//         .timeline({ defaults: { ease: "none" } })
//         .from(
//           sectionRef.current.querySelectorAll(".staggered-reveal"),
//           { opacity: 0, duration: 0.5, stagger: 0.5 },
//           "<"
//         );

//       ScrollTrigger.create({
//         trigger: sectionRef.current.querySelector(".work-wrapper"),
//         start: "100px bottom",
//         end: "center center",
//         scrub: 0,
//         animation: tl,
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id={MENULINKS[3].ref}
//       className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
//     >
//       <Image
//         src="/left-pattern.svg"
//         className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
//         loading="lazy"
//         height={700}
//         width={320}
//         alt=""
//       />
//       <div className="section-container py-16 flex flex-col justify-center">
//         <div className="flex flex-col work-wrapper">
//           <div className="flex flex-col">
//             <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
//               WORK
//             </p>
//             <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
//               Experience
//             </h1>
//             <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
//               A quick recap of where I&apos;ve worked. {" "}
//             </h2>
//           </div>
//           <Tabs tabItems={tabItems} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;

