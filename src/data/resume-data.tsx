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
    "physicist & explorer",
  summary:
    "Pluridisciplinary scientist, multicultural thinker, and outdoorsman. I have a broad curiosity for all natural and cultural phenoma. My current interests interlace trajectory analysis, the physics of animal collective behavior, and emergent capabilities of Large Language Models.",
  avatarUrl: "",
  personalWebsiteUrl: "https://raphaelsarfati.xyz",
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
      end: "&nbsp;&nbsp;&nbsp;&nbsp;",
      description:
        "Lost in Transformation: geometry and trajectories in the transformer architecture of Large Language Models",
    },
    {
      company: "University of Colorado Boulder",
      link: "https://www.colorado.edu/biofrontiers/",
      badges: [],
      title: "Posdoctoral Associate",
      logo: Minimal,
      start: "2017",
      end: "2023",
      description:
        "Stochastic processes, animal collective behavior",
    },
  ],
  skills: [
    "Physics",
    "Diffusion",
    "Behavior Analysis",
    "Matlab",
    "Python",
    "Computer Vision",
    "ML",
    "LLM",
  ],
  projects: [
    {
      title: "LLM equation solver",
      techStack: [
        "LLM",
        "Python",
        "Llama",
        "ICML",
      ],
      description: "Using LLMs to solve dynamical systems",
      logo: Minimal,
      link: {
        label: "LLMtime",
        href: "",
      },
    },
    {
      title: "tiny-ghosts",
      techStack: [
        "ViT",
        "Python",
        "fine-tuning",
        "LLaVA",
      ],
      description: "Vision Transformers for detection of firefly flashes in noisy images",
      logo: Minimal,
      link: {
        label: "tinyghosts",
        href: "",
      },
    },
    {
      title: "firefl-eye-net",
      techStack: [
        "NN", 
        "Matlab",
      ],
      description:
        "Training set and neural networks for accurate localization of firefly flashes in natural images and movie frames",
      logo: Minimal,
      link: {
        label: "firefleyenet",
        href: "",
      },
    },
    {
      title: "oorb",
      techStack: ["Matlab", 
                  "3D"
                 ],
      description:
        "Calibration-free 3D reconstruction of firefly swarms from 360-degree cameras",
      logo: Minimal,
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
        "JS", 
        "SciComm", 
      ],
      description:
        "Web app to evaluate whether a firefly collective display is synchronous or not",
      logo: Minimal,
      link: {
        label: "blinkorsync",
        href: "https://blinkorsync.org",
      },
    },
    {
      title: "fonoflies.org",
      techStack: [
        "SonicPi", 
        "HTML", 
      ],
      description: "acoustic experiment to translate firefly light patterns into melodies",
      logo: Minimal,
      link: {
        label: "fonoflies.org",
        href: "https://fonoflies.org",
      },
    },
    {
      title: "lucidluminescence.org",
      techStack: [
        "HTML",
        "SciComm",
      ],
      description:
        "the science of firefly swarms",
      logo: Minimal,
      link: {
        label: "lulu",
        href: "https://rapsar.github.io",
      },
    },
    {
      title: "raphaelsarfati.xyz",
      techStack: [
        "CSS",
      ],
      description:
        "personal website",
      logo: Minimal,
      link: {
        label: "rs.xyz",
        href: "https://raphaelsarfati.xyz",
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
      logo: Minimal,
      link: {
        label: "physics",
        href: "https://scholar.google.com/citations?user=9aaGkZQAAAAJ&hl=en",
      },
    },
  ],
} as const;
