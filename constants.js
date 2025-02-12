export const METADATA = {
  author: "Aditya Sonwane",
  title: "Portfolio | Aditya Sonwane",
  description:
    "Aditya Sonwane is a passionate DevOps Engineer, dedicated to crafting aesthetic and modern DevOps and Cloud solutions that captivate and engage users.",
  siteUrl: "https://www.codexplorer.tech/",
  twitterHandle: "@aadus_1",
  keywords: [
    "Aditya Sonwane",
    "DevOps Engineer",
    "Cloud Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A DevOps Engineer",
  "I build things for the Cloud",
  "I create aesthetic and modern DevOps practices",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: aadus.info@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aditya-sonwane-devops/",
  },
  {
    name: "github",
    url: "https://github.com/Aadi-Sonwane",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/aadi_sonwane",
  },
  {
    name: "twitter",
    url: "https://x.com/aadus_1",
  },
];

export const SKILLS = {
  DevOpsAndTools: [
    "git",
    "docker",
    "Ansible",
    "jenkins",
    "terraform",
    "kubernetes",
    "github",
    "gitlab",
    "linux",
    "splunk",
    "prometheus",
    "grafana",
  ],
  CloudAndTech: ["aws", "gcp", "azure", "awscf", "azuredevops", "azureake"],
  Programming: ["golang", "python", "bash"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

// export const WORK_CONTENTS = {
//   Infosys_SSE: [
//     {
//       id: 1,
//       company: "Infosys",
//       title: "Senior System Engineer",
//       location: "Pune, Maharashtra",
//       range: "April 2023 - Present",
//       responsibilities: [
//         "Managing AWS cloud infrastructure and CI/CD pipelines.",
//         "Automating deployments with Jenkins and Terraform.",
//         "Monitoring and logging with Splunk and CloudWatch.",
//       ],
//     },
//   ],
//   Infosys_SE: [
//     {
//       id: 2,
//       company: "Infosys",
//       title: "System Engineer",
//       location: "Pune, Maharashtra",
//       range: "October 2022 - April 2023",
//       responsibilities: [
//         "Developed and maintained automation scripts.",
//         "Worked on Docker and Kubernetes-based deployments.",
//         "Collaborated with teams to enhance CI/CD workflows.",
//       ],
//     },
//   ],
//   Infosys_SET: [
//     {
//       id: 3,
//       company: "Infosys",
//       title: "System Engineer Trainee",
//       location: "Pune, Maharashtra",
//       range: "2022",
//       responsibilities: [
//         "Gained hands-on experience in cloud automation.",
//         "Assisted in AWS infrastructure setup.",
//         "Worked on scripting tasks for automation.",
//       ],
//     },
//   ],
//   UltraRobotics: [
//     {
//       id: 4,
//       company: "Ultra Robotics & Technologies",
//       title: "Cloud Intern (AWS)",
//       location: "Pune, Maharashtra",
//       range: "2021",
//       responsibilities: [
//         "Worked on AWS cloud solutions.",
//         "Built automation scripts for cloud resource management.",
//         "Enhanced cloud security and compliance.",
//       ],
//     },
//   ],
// };




export const WORK_CONTENTS = {
  Infosys_SSE: [
    {
      title: "Senior System Engineer [AWS/DevOps]",
      description:
        "Experienced DevOps Engineer specializing in automating cloud infrastructure, optimizing CI/CD pipelines, and enhancing cloud security. Proficient in AWS services (EC2, S3, IAM, CloudWatch), Kubernetes, Terraform, Ansible, and Jenkins to drive scalable and high-performance deployments. Adept at containerization with Docker and orchestration using Kubernetes, ensuring high availability and fault tolerance. Expertise in monitoring and logging solutions with Splunk and CloudWatch for real-time system insights. Passionate about implementing DevOps best practices to improve software delivery speed, reliability, and security.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing cloud infrastructure with automation, scalability, and security
        </div>
      ),
    },
  ],
  Infosys_SE: [
    {
      title: "System Engineer [DevOps]",
      description:
        "DevOps professional with expertise in automating deployment pipelines, managing cloud resources, and improving software development workflows. Designed and implemented CI/CD pipelines with Jenkins and Git, reducing deployment time by 40%. Managed containerized applications using Docker and Kubernetes, ensuring smooth production rollouts. Worked extensively with Terraform for Infrastructure as Code (IaC) and implemented monitoring solutions using CloudWatch and Splunk. Strong focus on security best practices, cloud cost optimization, and performance tuning.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Accelerating deployments & optimizing cloud resources
        </div>
      ),
    },
  ],
  Infosys_SET: [
    {
      title: "System Engineer Trainee [Cloud & DevOps]",
      description:
        "Gained hands-on experience in DevOps automation, cloud infrastructure management, and CI/CD pipeline deployment. Assisted in developing Infrastructure as Code (IaC) solutions using Terraform and automated cloud provisioning with Ansible. Built and tested Jenkins pipelines for seamless software delivery. Explored AWS services such as EC2, S3, IAM, and Lambda for cloud-based solutions. Developed scripts for cloud automation, improving infrastructure scalability and deployment efficiency.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building scalable cloud automation solutions
        </div>
      ),
    },
  ],
  UltraRobotics: [
    {
      title: "Cloud Intern [AWS]",
      description:
        "Worked on AWS cloud infrastructure, gaining expertise in EC2, S3, IAM, and networking configurations. Assisted in automating deployments with Terraform and Ansible, improving resource efficiency. Developed cloud security policies and implemented IAM best practices for access management. Built Python scripts for cloud automation, streamlining repetitive tasks. Contributed to optimizing cloud cost and performance through detailed monitoring and analysis using AWS CloudWatch.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Optimizing cloud infrastructure for performance and security
        </div>
      ),
    },
  ],
};


export const GTAG = "G-5HCTL2TJ5W";
