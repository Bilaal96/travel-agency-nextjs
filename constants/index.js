// URL to make requests to Strapi CMS
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// Slides for Home page ImageSlider
export const homeSlides = [
  {
    image: {
      src: '/home-slide-01.jpg',
      alt: 'family walking on beach at sunset',
      priority: true,
    },
    content: {
      heading: 'Family Holidays',
      details: 'Create lasting memories',
    },
  },
  {
    image: {
      src: '/home-slide-02.jpg',
      alt: 'Birds-eye-view of couple seated on surf board in clear sea water on sunny day',
      priority: true,
    },
    content: {
      heading: 'Couples Getaway',
      details: 'Let the sparks fly',
    },
  },
  {
    image: {
      src: '/home-slide-03.jpg',
      alt: 'Taj Mahal in India at sunset',
      priority: true,
    },
    content: {
      heading: 'Sight Seeing',
      details: 'Check landmarks off your bucket list',
    },
  },
  {
    image: {
      src: '/home-slide-04.jpg',
      alt: 'People swimming in sea by the coast',
      priority: true,
    },
    content: {
      heading: 'Beach Break',
      details: 'Enjoy a coastline view in the summer sun',
    },
  },
  {
    image: {
      src: '/home-slide-05.jpg',
      alt: 'Person skiing down mountain slope',
      priority: true,
    },
    content: {
      heading: 'Skiing & Snowboarding',
      details: 'Chase thrilling adventures in the Alps',
    },
  },
];
