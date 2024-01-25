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
  name: "Raphaël Sarfati",
  initials: "RS",
  location: "New Haven, USA, EST",
  locationLink: "https://www.google.com/maps/place/New+Haven,+CT/",
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
      company: "University of Colorado Boulder",
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
    "Random Processes",
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
      description: "Vision Transformer for detection of firefly flashes in noisy images",
      logo: ,
      link: {
        label: "tinyghosts",
        href: "",
      },
    },
    {
      title: "firefl-eye-net",
      techStack: [
        "Matlab", 
        "NN",
      ],
      description:
        "Training set and neural networks for accurate localization of firefly flashes in natural images and movie frames",
      logo: ,
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
        "Calibration-free 3D reconstruction of firefly swarms from 360-degree cameras",
      logo: ,
      link: {
        label: "oorb",
        href: "",
      },
    },
    {
      title: "flash sequence classifier",
      techStack: ["RNN", 
                  "Python",
                  "peer-reviewed"
                 ],
      description:
        "RNN for classification of firefly flash sequences",
      logo: Minimal,
      link: {
        label: "seqclass",
        href: "https://www.biorxiv.org/content/10.1101/2023.03.08.531653",
      },
    },
    {
      title: "blinkorsync.org",
      techStack: [
        "Web", 
        "JS", 
      ],
      description:
        "Web app to evaluate whether a firefly collective display is synchronous or not",
      logo: ,
      link: {
        label: "blinkorsync",
        href: "https://blinkorsync.org",
      },
    },
    {
      title: "fonoflies.org",
      techStack: [
        "Web", 
        "SonicPi", 
      ],
      description: "acoustic experiment to translate firefly light patterns into melodies",
      logo: ,
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
      logo: ,
      link: {
        label: "lulu",
        href: "https://rapsar.github.io",
      },
    },
    {
      title: "Physics",
      techStack: [
        "Soft Matter",
        "Stochastic Processes",
        "Behavior",
        "Emergence",
        "Trajectory Analysis",
      ],
      description:
        "Academic research in biophysics, random walks, and physics of animal collective behavior",
      logo: ,
      link: {
        label: "evercast.us",
        href: "https://scholar.google.com/citations?user=9aaGkZQAAAAJ&hl=en",
      },
    },
  ],
} as const;
