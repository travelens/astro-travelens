import type { ImageMetadata } from 'astro'

export const SiteMetadata = {
  site: 'https://travelens.github.io',
  title: 'travelens',
  description: 'Travels Through A Lens',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Sydney, Australia',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/travelens/travelens.github.io',
  social: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/christham',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/chris1tham',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/chris1tham',
      icon: 'instagram',
    },
    {
      name: 'Github',
      link: 'https://github.com/travelens',
      icon: 'github',
    },
  ],
  buildTime: new Date(),
}

export const NavigationLinks = [
  { name: 'Trips', href: '/trips' },
  { name: 'Places', href: '/#places' },
  { name: 'Tags', href: '/tags' },
  { name: 'About', href: '/#about' },
]

export const Websites = [
  {
    website: 'Chris Tham',
    link: 'https://christham.net'
  },
  {
    website: 'Hello Tham',
    link: 'https://hellotham.com'
  },
  {
    website: 'Buddhavacana',
    link: 'https://christham.net/buddhavacana/'
  },
  {
    website: 'Visual Voyager',
    link: 'https://visualvoyager.net'
  },
]
