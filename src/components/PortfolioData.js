import coreProc from '@/assets/img/portfolio/CoreProc-Clone.webp'
import booCyberSec from '@/assets/img/portfolio/booCyberSecurity.webp'
import netflix from '@/assets/img/portfolio/netflix.webp'
import plants from '@/assets/img/portfolio/plants.webp'
import sodaCans from '@/assets/img/portfolio/sodaCans.webp'
import riteNLite from '@/assets/img/portfolio/RiteNLite.webp'
import bulsuGrad from '@/assets/img/portfolio/Bulsu-Cict-Trailer.webp'
import SMT from '@/assets/img/portfolio/Service-Management.webp'
import underwater from '@/assets/img/portfolio/Underwater.webp'
import lucifer from '@/assets/img/portfolio/Lucifer.webp'
import landscape from '@/assets/img/portfolio/LandscapePink.webp'

export default {
  name: 'portfolioData',

  portfolio: {
    websites: [
      {
        thumbnail: coreProc,
        feature: 'website',
        title: 'CoreProc, Inc. Clone',
        description: 'The project was inspired by the Company that I am working CoreProc, Inc. This is an approach to clone and redesign the landing page of our main website. Some of the assets that are included here are gathered in the CoreProc website, but the redesign was fixed and manipulated in Adobe XD.\n\nThe approach I took for it is to be lively featuring people, animations, and other colors to showcase life, growth, and technology.',
        link: 'https://coreproc-clone.web.app/'
      },

      {
        thumbnail: booCyberSec,
        feature: 'website',
        title: 'Boo Cyber Security',
        description: 'The project design was made using Adobe Illustrator, I decided to use Ghosts as my sort of mascots because, in cyber security the company is protecting you even though you cannot see it physically. In a way where ghosts does the same thing like float or just be there watching you.\n\nMy approach to this is quite playful where ghosts follows you to showcase that Boo Cyber Security is tracking you in order to protect you from malwares or any cyber attacks in general.',
        link: 'https://boo-cyber-security.web.app/'
      },

      {
        thumbnail: netflix,
        feature: 'Website Cloning',
        title: 'Netflix Clone',
        description: "Since the pandemic that had happened, socializing is quite limited, yes granted that we have different social media for us to communicate with each other we do still get bored, that is why Netflix is one of the things that I used to reduce boredom when I'm just alone.\n\nThis project is done using ReactJS and TailwindCss for the Front End and Axios, Firebase, and TheMovieDB for the Back End.",
        link: 'https://netflix-react-clone-b9706.web.app/'
      },

      {
        thumbnail: plants,
        feature: 'Website Codepen.io',
        title: 'Plants',
        description: 'Since the pandemic has kept people inside their homes, my mother enjoyed planting and taking care of different plants to keep her mind off of boredom. Watching her water the plants, change its soil, replacing their pots. I learned a thing or two about the plants that she is taking care of. \n\n This inspired me to make this little website inside Codepen where I added the different plants I liked and plants I wanted to have in the future.',
        link: 'https://codepen.io/Minosuke/full/XWyVvWN'
      },

      {
        thumbnail: sodaCans,
        feature: 'Website Codepen.io',
        title: 'Soda Cans',
        description: 'The reason for the creation of this website is when I saw a video reel on Facebook showing how to create a figma design for soda cans, then I was fascinated by the idea of it that I tried to recreate it in Codepen. Featuring hovers, sliders, responsiveness and its overall colorfullness, plus my likeness to these soda brands, it really made me happy.',
        link: 'https://codepen.io/Minosuke/full/qBQxVgr'
      }
    ],

    'UI/UX Design': [],

    videos: [
      {
        thumbnail: riteNLite,
        feature: 'Video Commercial',
        title: "Rite n' Lite Soda Commercial",
        description: 'The soda commercial is done using Adobe Premiere Pro, all the videos of the can rolling, ice hitting the glass, and glass filling up with soda is all done and videograph by myself. The commercial is a project of mine in my previous subject in my college and in the subject of Mandarin.',
        link: 'https://www.youtube.com/watch?v=4UYqmoFG7n8'
      },

      {
        thumbnail: bulsuGrad,
        feature: 'Teaser Trailer',
        title: 'BulSu CICT Graduation',
        description: 'The culmination of dreams especially the students that are awaiting for their graduation is hyped by this teaser video which is made in Adobe After Effects and was done by me. This was given to me by our College Publication for the Graduation of the students in Academic Year 2020-2021.',
        link: 'https://www.youtube.com/watch?v=FNDjo-7m0IU'
      },

      {
        thumbnail: SMT,
        feature: 'Explanation Video',
        title: 'Service Management Track',
        description: 'When a new students enrolls for a specialization, it is quite hard for them to choose and grasp what is the difference between each specialization. Having the video that tackles what Service Management Program does for a student and what can the students expect when they take this track or specialization in college. The project is done using Adobe After Effects and the images where done using Adobe Illustrator.',
        link: 'https://www.youtube.com/watch?v=Vs1Uf9NXyBQ&ab'
      }
    ],

    'vector arts': [
      {
        thumbnail: underwater,
        feature: 'vector art',
        title: 'Underwater',
        description: 'I have always been fascinated with the deep waters, some find it eerie or full of nightmares, but for me I always find it calming and quite relaxing especially when seeing sea creatures. This Artwork is created and done with Adobe Illustrator.',
        link: underwater
      },

      {
        thumbnail: lucifer,
        feature: 'vector art',
        title: 'Lucifer Fallen Angel',
        description: "Lucifers depiction in this artwork is where a story which there is a War in Heaven and it is the instance that Lucifer was expelled or banished from the heavenly realm and arrived in the terrestrial. Lucifer's emotion boasts how prideful of a character he is and the ambition caused him be lustful of power exceeding of God. This Artwork is created and done with Adobe Illustrator.",
        link: lucifer
      },

      {
        thumbnail: landscape,
        feature: 'vector art',
        title: 'Landscape',
        description: 'Mountains and hills are some of the top places I have always wanted to go to, creating this art made me really excited on the possibility that maybe sooner or later I will be able to climb and traverse such beauty. This Artwork is created and done with Adobe Illustrator.',
        link: landscape
      }
    ]
  },

  resume: [
    {
      title: 'UI Engineer',
      date: 'CoreProc, Inc. | 2022 - Present',
      about: 'Creating UI/UX via Figma and Adobe XD, making Front-End websites using Vuejs, Next.js, Sass, and TailwindCss'
    },
    {
      title: 'Freelance Video Editor',
      date: 'Upwork | 2021 - July 2022',
      about: 'Editing 2D motion graphics, Commercials, Timeline Video, and Interview / Testimonial videos.'
    }
  ]
}
