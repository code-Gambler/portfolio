import {
  mobile,
  backend,
  creator,
  web,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  andriod,
  reactjs,
  redux,
  dotnet,
  tailwind,
  typescript,
  bootstrap,
  angular,
  c,
  cPlusPlus,
  cSharp,
  java,
  jest,
  next,
  php,
  ionic,
  postgres,
  python,
  meta,
  starbucks,
  tesla,
  shopify,
  wonderCart,
  fragment,
  afmv,
  gestureRecogntion,
  musuemApp,
  movieRecommendationSystem,
  threejs,
  cra,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Open-Source Contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Andriod",
    icon: andriod,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "ionic",
    icon: ionic,
  },
  {
    name: "java",
    icon: java,
  }
  
];

const experiences = [
  {
    title: "IT Analyst",
    company_name: "Canada Revenue Agency",
    icon: cra,
    iconBg: "#383E56",
    date: "September 2023 - April 2024",
    points: [
      "Developed, tested, and debugged scripts to automate various IT tasks, improving efficiency by 35% and reducing manual workload.",
      "Aided in the development of the application utility installer, enabling seamless installation of multiple applications on numerous devices without requiring user intervention or reboots.",
      "Authored and published a comprehensive troubleshooting article in the Knowledge Centre, addressing a frequently encountered WebLogic Server configuration error.",
      "Maintained system security and software updates for over 2000 machines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Steven is a dedicated and efficient professional who consistently excels in his role. His strong work ethic, combined with his smart approach to problem-solving, makes him an asset in any team-oriented environment.",
    name: "Wayne Guo",
    designation: "Team Leader",
    company: "Canada Revenue Agency",
    image: "./profile-pic.png",
  },
  {
    testimonial:
      "I’ve had the pleasure of working with Steven at the Canada Revenue Agency, and I can confidently say he is an outstanding professional. His attention to detail, strong technical expertise, and problem-solving skills are exceptional.",
    name: "Sandra Paraskevilo",
    designation: "IT Analyst",
    company: "Canada Revenue Agency",
    image: "./profile-pic.png",
  },
  {
    testimonial:
      "Steven consistently delivered outstanding performance, achieving top grades. His attention to detail, strong analytical skills, and methodical approach to problem-solving set him apart as an exceptional student.",
    name: "Reza Khojasteh",
    designation: "Professor of DSA",
    company: "Seneca College",
    image: "./prof-reza.jpg",
  },
];

const projects = [
  {
    name: "Wonder-Cart",
    description:
      "Wonder Cart is a full-featured e-commerce web app with separate customer and seller experiences. The customer interface enables easy browsing, filtering, and secure Stripe-based checkout. Sellers have access to a powerful dashboard for managing products, categories, billboards, and viewing order histories. A dedicated backend API serves dynamic product data to the frontend, ensuring smooth and responsive user interactions.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: wonderCart,
    source_code_link: "https://github.com/code-Gambler/wonder-cart",
  },
  {
    name: "Fragments Microservice API",
    description:
      "The Fragments API is a data storage and conversion microservice supporting text, HTML, JSON, and image formats (PNG, JPG, WebP). It enables data transformations, like markdown to HTML and image format conversions, storing binary data in Amazon S3 and metadata in DynamoDB. With Cognito-based authentication, local AWS alternatives, structured logging, and a CI/CD pipeline, the API automates testing and deployment to AWS ECS for efficient and reliable service delivery.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "restfulapi",
        color: "blue-text-gradient",
      },
      {
        name: "s3",
        color: "pink-text-gradient",
      },
    ],
    image: fragment,
    source_code_link: "https://github.com/code-Gambler/fragments",
  },
  {
    name: "AFMV Project",
    description:
      "Upgraded the GCC compiler with Auto Function Multi-Versioning (AFMV), allowing programs to run seamlessly on different architectures, such as SVE and SVE2, without extra developer input. My contributions include implementing diagnostic output to track function cloning and pruning, and developing AFMV documentation, enhancing cross-platform compatibility and usability for developers.",
    tags: [
      {
        name: "gcc",
        color: "blue-text-gradient",
      },
      {
        name: "c",
        color: "green-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
      {
        name: "cmake",
        color: "blue-text-gradient",
      },
      {
        name: "opensource",
        color: "green-text-gradient",
      },
      {
        name: "SVE2",
        color: "pink-text-gradient",
      },
    ],
    image: afmv,
    source_code_link: "https://github.com/Seneca-CDOT/gcc",
  },
  {
    name: "Gesture Control Keyboard",
    description:
      "A Python application that uses OpenCV and the dima806/hand_gestures_image_detection model to recognize hand gestures and map them to customizable keyboard actions. The app supports 18 gestures with dual-key mapping options, making it ideal for hands-free controls during presentations. Enhanced model performance and accuracy through custom optimizations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "computervision",
        color: "pink-text-gradient",
      },
      {
        name: "opencv",
        color: "blue-text-gradient",
      }
    ],
    image: gestureRecogntion,
    source_code_link: "https://github.com/code-Gambler/gesture-key-mapping",
  },
  {
    name: "Museum Website",
    description:
      "Built a museum web app using Next.js, integrated with an open-source Museum API to display artifacts. Features include advanced search, user accounts, search history, and favorites, with data stored in MongoDB. Used JWT for secure authentication and RouteGuard to manage access. Implemented Bootstrap for UI and Jotai for state management, delivering a smooth and interactive user experience.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "apiIntegration",
        color: "blue-text-gradient",
      }
    ],
    image: musuemApp,
    source_code_link: "https://github.com/code-Gambler/Musuem-APP",
  },

  {
    name: "Movie Recommendation API",
    description:
      "Developed a Flask-based Movie Recommender API that suggests movies based on genre or previously watched titles using the MovieLens dataset. The API filters and sorts movies with pandas, numpy, and scikit-learn, providing recommendations in JSON format. The project features modular architecture with Flask Blueprints, and can be easily deployed locally or via Docker. Key endpoints include health checks and recommendations with support for query parameters.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      }
    ],
    image: movieRecommendationSystem,
    source_code_link: "https://github.com/code-Gambler/movie-recommender-api",
  },
];

export { services, technologies, experiences, testimonials, projects };
