import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import vectorprofilepic from '../images/vectorprofilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Debbie's site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  profileImageSrc: vectorprofilepic,
  name: `Debbie Fan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Toronto based <strong className="text-stone-100">Civil Engineer</strong>, currently working
        at <strong className="text-stone-100">WSP</strong>.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! My name is Debbie Fan, I graduated from University of Waterloo's Civil Engineering program 
  and am currently working at WSP, a civil engineering consulting firm. I've enjoyed learning how to design and manage projects and work
  successfully with peers in fluid teams. As someone who's constantly looking to learn and develop my professional skills, I'm currently looking for new career 
  opportunities in a new industry, to try something that my current job opportunities cannot provide.`,
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Hong Kong', Icon: FlagIcon},
    {label: 'Interests', text: 'Drawing, DnD, Board Games, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Waterloo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'WSP', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Cantonese',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'HTML/CSS/Javascript',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'SQL',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015 - 2020',
    location: 'University of Waterloo',
    title: 'BASc Civil Engineering',
    content: <p>5 year program with 6 co-op terms in Civil Engineering: a broad program teaching teamwork, 
      and problem-solving skills. The co-op terms provide valuable work experience in developing project management and design skills.</p>
    // content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'Fall 2018',
    location: 'University of Leeds',
    title: 'International Exchange',
    content: <p>4 month international exchange term in England. A great experience in exploring other cultures and adapting to a 
      different education system. Fall term is especially fun with the Christmas markets!</p>,
  },
  {
    date: 'April 2023',
    location: 'Harvard - Online Course',
    title: 'CS50: Introduction to Computer Science',
    content: <p>Self-directed learning on the fundamentals of computer science. Taught by David J. Malan, the course is engaging, 
      thorough, and increased my interest and confidence in programming.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - Present',
    location: 'WSP',
    title: 'Designer, EIT',
    content: (
      <ul>
        <li>Design pipe network solutions that meet the restrictions and requirements set by the municipalities.</li>
        <li>Coordinate with team members from multiple industries to efficiently complete tasks within deadlines.</li>
        <li>Train new hires and co-op students on best practices with using AutoCAD Civil3D, BIM360, and design processes.</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2019 - May 2022',
    location: 'Urbantech Consulting | A Division of Leighton-Zec Ltd.',
    title: 'Design Assistant',
    content: (
      <ul>
        <li>Two 4-month co-ops followed by full-time employment after graduation.</li>
        <li>Prepare preliminary and detailed engineering design drawings, including Plan & Profiles, Grading Plans, etc. using AutoCAD Civil3D.</li>
        <li>Assist with preparation of submission letters, ECA applications, and FSRs.</li>
        <li>Coordinate with project managers, clients, and approval agencies to prepare projects for submission.</li>
        <li>Draft, design and make revisions to engineering plans for subdivision and site plan projects throughout the GTA.</li>
      </ul>
    ),
  },
  {
    date: 'May 2018 - Aug 2018',
    location: 'Engage Engineering Ltd.',
    title: 'Engineering Designer - Co-op',
    content: (
      <ul>
        <li>Completed storm and sanitary design sheets and drainage plans.</li>
        <li>Assisted with the calculations and writing of FSR and SWM Reports.</li>
        <li>Reduced the time required for calculations by automating excel processes with VBA code.</li>
      </ul>
    ),
  },
  {
    date: 'Sep 2017 - Dec 2017',
    location: 'City of Hamilton',
    title: 'Development Engineering Assistant - Co-op',
    content: (
      <ul>
        <li>Reviewed engineering drawings for subdivision projects according  to City standards.</li>
        <li>Corresponded with developers and consultants regarding subdivision project statuses in the review process.</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2017 - Apr 2017',
    location: 'York Region',
    title: 'Development Review Technician - Co-op',
    content: (
      <ul>
        <li>Reviewed development proposals, ensuring applications met York Region standards.</li>
        <li>Assisted in drafting approval letters for site plan, commercial, and subdivision projects.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'debbiehmfan@outlook.com',
      href: 'mailto:debbiehmfan@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
      href: 'https://maps.app.goo.gl/iwLDyQt6i3KsnAnA9',
    },
    {
      type: ContactType.Instagram,
      text: '@dubbydraws',
      href: 'https://www.instagram.com/dubbydraws/',
    },
    {
      type: ContactType.Github,
      text: 'debbie-fan',
      href: 'https://github.com/debbie-fan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/debbie-fan'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/debbiefan/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/dubbydraws/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
