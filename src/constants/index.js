import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  whatsapp,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Inicio",
    url: "#hero",
  },
  {
    id: "3",
    title: "Proceso de creacion ",
    url: "#roadmap",
  },
  {
    id: "1",
    title: "Precios",
    url: "#pricing",
  },
  // {
  //   id: "2",
  //   title: "How to use",
  //   url: "#how-to-use",
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Consulta",
    text: "se lleva a cabo una reunión inicial entre el cliente y el equipo de desarrollo web para discutir los requisitos del proyecto, los objetivos comerciales, las preferencias de diseño y cualquier otra consideración relevante.",
    date: "paso 1",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Tiempo Estimado y Aprovacion",
    text: "el equipo de desarrollo web evalúa los requisitos del proyecto y proporciona al cliente un estimado del tiempo necesario para completar el trabajo. Una vez que se establece un acuerdo sobre el alcance del proyecto y los plazos, el cliente aprueba formalmente el plan propuesto.",
    date: "paso 2",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Diseño y Desarrollo",
    text: " el equipo de desarrollo web crea los diseños visuales y la arquitectura de la página web, incorporando los elementos gráficos y funcionales según las especificaciones del cliente. Se realizan revisiones iterativas para garantizar que el diseño y la funcionalidad cumplan con las expectativas del cliente.",
    date: "paso 3",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Lanzamiento",
    text: "En esta etapa final, el sitio web completado se somete a pruebas exhaustivas para garantizar su funcionamiento óptimo en diferentes dispositivos y navegadores. Una vez que se han realizado todas las correcciones y se ha obtenido la aprobación final del cliente, el sitio se lanza oficialmente y se pone a disposición del público.",
    date: "paso 4",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "PRO",
    description: "Creacion de Landing Page",
    price: "50000",
    features: [
      "Rapida creacion",
      "Ideal para negocios y publicidad",
      "Diseño responsivo",
    ],
  },
  // {
  //   id: "1",
  //   title: "Premium",
  //   description: "Prioriza el soporte tecnico y manejo del dashboard",
  //   price: "60000",
  //   features: [
  //     "Diseño personalizado",
  //     "Diseño responsivo",
  //     "Soporte para resolucion de problemas",
  //   ],
  // },
  {
    id: "1",
    title: "Ecommerce",
    description: "Especial para ventas de productos en linea",
    price: "100000",
    features: [
      "Diseño responsivo",
      "Seguridad SSH",
      "Carrito de compra y posibilidad de pago con mercado pago",
    ],
  },
  {
    id: "2",
    title: "Empresarial",
    description: "Lleva tu negocio al siguiente niuvel",
    price: 150000,
    features: [
      "Diseño responsivo",
      "Manejo de Dashboard para usuarios Admin",
      "Carrito de compra y posibilidad de pago con mercado pago",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "1",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "#",
  // },
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/webconnect_/?next=https%3A%2F%2Fwww.instagram.com%2F",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61555220143166",
  },
  {
    id: "2",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: "#",
  },
];
