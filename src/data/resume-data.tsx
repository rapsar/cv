import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Raphael Sarfati",
  initials: "RS",
  location: "New Haven, USA, EST",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Physicist and explorer",
  summary:
    "I am broadly interested in trajectories and emergent phenomena. This includes notably animal collective behavior and emergent capabilities of Large Language Models.",
  avatarUrl: "",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "raphael.sarfati@aya.yale.edu",
    tel: "+12034919397",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rapsar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raphaelsarfati/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/RaphaelSarfati",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Yale University",
      degree: "Ph.D. Applied Physics",
      start: "2010",
      end: "2017",
    },
    {
      school: "Ecole Polytechnique",
      degree: "Master of Engineering, Science and Technology",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Cornell University",
      link: "https://sciaicenter.engineering.cornell.edu",
      badges: ["Remote"],
      title: "Research Associate",
      logo: ParabolLogo,
      start: "2023",
      end: "",
      description:
        "Lost in Transformation: geometry and trajectories in the transformer architecture of Large Language Models",
    },
    {
      company: "Unievrsity of Colorado Boulder",
      link: "https://www.colorado.edu/biofrontiers/",
      badges: [],
      title: "Posdoctoral Associate",
      logo: ClevertechLogo,
      start: "2017",
      end: "2023",
      description:
        "Stochastic processes, animal collective behavior",
    },
  ],
  skills: [
    "Physics",
    "Random Porcesses",
    "Behavior Analysis",
    "Matlab",
    "Python",
    "Computer Vision",
    "ML",
    "LLM",
  ],
  projects: [
    {
      title: "tiny-ghosts",
      techStack: [
        "ViT",
        "fine-tuning",
      ],
      description: "Vision Transfomer for detection of firefly flashes in noisy images",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "fireflEyeNet",
      techStack: [
        "Matlab", 
        "NN",
      ],
      description:
        "Training set and neural networks for accurate identification and localization of firefly flashes in natural images",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "oorb",
      techStack: ["Matlab", 
                  "3D"
                 ],
      description:
        "calibration-free 3D reconstruction of firefly swarms from 360-degree cameras",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "flash sequence classifier",
      techStack: ["NN", 
                 ],
      description:
        "Automated firefly flash sequence recognition using neural network",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "blinkorsync.org",
      techStack: [
        "Web", 
        "Java", 
      ],
      description:
        "Web app to evaluate whether a firefly collective display is synchronous or not",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "fonoflies.org",
      techStack: [
        "Web", 
        "SonicPi", 
      ],
      description: "acoustic experiment to translate firefly light patterns into melodies",
      logo: YearProgressLogo,
      link: {
        label: "fonoflies.org",
        href: "https://fonoflies.org",
      },
    },
    {
      title: "lucidluminescence.org",
      techStack: [
        "Web",
        "SciComm",
      ],
      description:
        "the science of firefly swarms",
      logo: ParabolLogo,
      link: {
        label: "lulu",
        href: "https://rapsar.github.io",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
  ],
} as const;
