import { Icons } from "@/components/icons";
import { FileText, House } from "lucide-react";

export const DATA = {
  name: "Michael Briden",
  initials: "MB",
  url: "https://bridenmj.github.io",
  location: "Santa Cruz, CA",
  locationLink: "https://www.google.com/maps/place/Santa+Cruz,+CA",
  description:
    "Machine learning researcher focused on medical forecasting, multimodal clinical data, and uncertainty-aware models.",
  summary:
    "I develop trustworthy machine learning methods for noisy and limited clinical data. My work combines generative modeling, survival analysis, efficient fine-tuning, and representation learning, with applications in [wound healing](#projects) and EEG. I completed my Ph.D. in Computer Science at UC Santa Cruz in 2025.",
  avatarUrl: "/michael-briden.jpg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 6, enabled: false, heading: "Research", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Methods & Tools" },
    projects: {
      order: 2,
      enabled: true,
      label: "Selected Work",
      heading: "Research projects and publications",
      text: "Selected work in longitudinal wound modeling, multimodal prediction, and representation learning for biomedical data.",
    },
    photos: { order: 6, enabled: false, heading: "Photos" },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in touch",
      text: "For research, applied ML, and collaboration inquiries, email me at mbriden@ucsc.edu.",
    },
  },
  photos: [],
  skills: [
    { name: "PyTorch", icon: undefined },
    { name: "TensorFlow", icon: undefined },
    { name: "scikit-learn", icon: undefined },
    { name: "Hugging Face", icon: undefined },
    { name: "Survival Analysis", icon: undefined },
    { name: "Generative Modeling", icon: undefined },
    { name: "Representation Learning", icon: undefined },
    { name: "Efficient Fine-tuning", icon: undefined },
    { name: "Domain Adaptation", icon: undefined },
    { name: "Python", icon: undefined },
    { name: "R", icon: undefined },
    { name: "SQL", icon: undefined },
    { name: "CUDA", icon: undefined },
    { name: "Docker", icon: undefined },
    { name: "Kubernetes", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/files/Michael_Briden_Resume.docx", icon: FileText, label: "Résumé" },
  ],
  contact: {
    email: "mbriden@ucsc.edu",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bridenmj",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaelbriden/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mbriden@ucsc.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Tell Me If It Heals",
      href: "#projects",
      badges: ["Ongoing"],
      location: "Santa Cruz, CA",
      title: "Multimodal medical outcome prediction",
      logoUrl: "",
      start: "Fall 2024",
      end: undefined,
      description:
        "Developing a parameter-efficient multimodal generative model that integrates wound images, RNA measurements, and text for medical outcome prediction.",
    },
    {
      company: "Uniform Selection and Representation Matching",
      href: "#projects",
      badges: ["EMBC 2023"],
      location: "Santa Cruz, CA",
      title: "Robust wound-stage classification",
      logoUrl: "",
      start: "Fall 2022",
      end: "Fall 2022",
      description:
        "Implemented Co-Teaching and contrastive learning to relabel noisy wound images and improve wound-stage classification stability in medical-device pipelines.",
    },
    {
      company: "WaveFusion Squeeze-and-Excitation",
      href: "#projects",
      badges: ["EMBC 2021"],
      location: "Santa Cruz, CA",
      title: "Explainable EEG modeling",
      logoUrl: "",
      start: "Fall 2019",
      end: "Spring 2022",
      description:
        "Integrated explainable deep learning methods for EEG-based classification and localization tasks.",
    },
  ],
  education: [
    {
      school: "University of California, Santa Cruz",
      href: "https://www.ucsc.edu",
      degree:
        "Ph.D., Computer Science — Representation Learning and Generative Forecasting for Noisy and Limited Clinical Data",
      logoUrl: "",
      start: "2018",
      end: "2025",
    },
    {
      school: "Pacific Lutheran University",
      href: "https://www.plu.edu",
      degree: "B.Sc., Mathematics — Probability & Statistics",
      logoUrl: "",
      start: "2012",
      end: "2015",
    },
    {
      school: "Pierce College",
      href: "https://www.pierce.ctc.edu",
      degree: "A.S. — Mathematics, statistics, and introductory computer science",
      logoUrl: "",
      start: "2010",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "Tell Me If It Heals",
      href: "https://github.com/bridenmj/wound-forecasting",
      dates: "Submitted 2026",
      active: true,
      description:
        "A comparative study of LLaMA-Adapter, River CFM, and DyneODE for forecasting 21-day wound-image trajectories from sparse early observations. LLaMA-Adapter produced the most perceptually realistic progression (KID 0.123), while DyneODE achieved the highest PSNR and SSIM but often generated oversmoothed forecasts.",
      technologies: ["LLaMA-Adapter", "River CFM", "DyneODE", "Longitudinal Forecasting", "Medical Imaging"],
      links: [
        {
          type: "Code",
          href: "https://github.com/bridenmj/wound-forecasting",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tell-me-if-it-heals.png",
      video: "",
    },
    {
      title: "Spatiotemporal Wound Dynamics",
      href: "/files/Spatiotemporal-Wound-Dynamics.pdf",
      dates: "Ongoing analysis",
      active: true,
      description:
        "Used non-negative matrix factorization and gene-set annotation to identify latent biological programs in 144 porcine wound RNA-seq samples. A rank-7 decomposition yielded four retained healing-specific metagenes spanning inflammation, tissue development, skin morphogenesis, and barrier formation over 21 days.",
      technologies: ["RNA-seq", "NMF", "Gene-set analysis", "PCA", "UMAP"],
      links: [
        {
          type: "Slides",
          href: "/files/Spatiotemporal-Wound-Dynamics.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/wound-dynamics-pca-umap.png",
      video: "",
    },
    {
      title: "Uniform Selection and Representation Matching",
      href: "https://ieeexplore.ieee.org/abstract/document/10340460",
      dates: "EMBC 2023",
      active: false,
      description:
        "A robust training strategy for wound-stage classification that combines uniform sample selection with representation matching to reduce the effects of noisy labels.",
      technologies: ["Wound Imaging", "Noisy Labels", "Contrastive Learning", "Domain Adaptation"],
      links: [
        {
          type: "Paper",
          href: "https://ieeexplore.ieee.org/abstract/document/10340460",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/uniform-selection.png",
      video: "",
    },
    {
      title: "Towards Metacognition",
      href: "https://github.com/bridenmj/Metacognition",
      dates: "Biological Cybernetics 2023 · CVPR NeuroVision 2022",
      active: false,
      description:
        "Subject-aware supervised contrastive learning with deep fusion networks for confidence analysis from EEG data.",
      technologies: ["EEG", "Contrastive Learning", "Deep Fusion", "Explainability"],
      links: [
        {
          type: "Code",
          href: "https://github.com/bridenmj/Metacognition",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://drive.google.com/file/d/1Nea9FWOAzDYEan3KPcKEUsy5JReY8eeR/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/towards-metacognition.png",
      video: "",
    },
    {
      title: "WaveFusion Squeeze-and-Excitation",
      href: "",
      dates: "EMBC 2021",
      active: false,
      description:
        "An accurate and explainable deep-learning framework for neuroscience, supporting EEG classification and localization.",
      technologies: ["EEG", "Deep Learning", "Explainability", "Signal Processing"],
      links: [],
      image: "/projects/wavefusion-se-fc.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
