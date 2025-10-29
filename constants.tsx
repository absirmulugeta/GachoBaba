
import React from 'react';
import type { NavLink, ServiceCardData, NewsItemData } from './types';

// Icons SVG components
const MegaphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 19.17 1 20.243 1v3.857M16 18v-1.54c0-1.203-.6-2.312-1.555-2.924M11 19c-1.12 0-2.167-.31-3.099-.852M12 5.882V5.514c0-.332.228-.64.54-.766l1.325-.53c.48-.192.985-.24 1.485-.14l2.122.424M12 5.882l-.454-.227c-.458-.228-1.01-.337-1.566-.337H7m6 0v-1.006c0-.553-.45-1-1-1H7.006c-.553 0-1 .447-1 1v1.006" />
    </svg>
);

const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0112 13a5.995 5.995 0 013 1.003m-3-1.003A4 4 0 0012 5.354M7.5 8.5A2.5 2.5 0 0110 6h4a2.5 2.5 0 012.5 2.5v3.5a2.5 2.5 0 01-2.5 2.5h-4A2.5 2.5 0 0110 14.5v-3.5z" />
    </svg>
);

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About Wereda', href: '#' },
  { name: 'Kebele Directory', href: '#' },
  { name: 'Education', href: '#' },
  { name: 'Health', href: '#' },
  { name: 'Agriculture', href: '#' },
  { name: 'Announcements', href: '#' },
  { name: 'Contact', href: '#' },
];

export const SERVICE_CARDS_DATA: ServiceCardData[] = [
  {
    icon: <MegaphoneIcon />,
    title: 'Announcements',
    description: 'Latest official news and public notices.',
    bgColor: 'bg-blue-100',
    textColor: 'text-brand-blue',
  },
  {
    icon: <BookOpenIcon />,
    title: 'Education Updates',
    description: 'School schedules, resources, and programs.',
    bgColor: 'bg-green-100',
    textColor: 'text-brand-green',
  },
  {
    icon: <HeartIcon />,
    title: 'Health Tips',
    description: 'Public health advisories and clinic info.',
    bgColor: 'bg-red-100',
    textColor: 'text-red-500',
  },
  {
    icon: <LeafIcon />,
    title: 'Agriculture Support',
    description: 'Farming resources and market updates.',
    bgColor: 'bg-yellow-100',
    textColor: 'text-amber-600',
  },
  {
    icon: <UsersIcon />,
    title: 'Kebele Contacts',
    description: 'Find your local kebele office and leaders.',
    bgColor: 'bg-gray-200',
    textColor: 'text-gray-700',
  },
];

export const NEWS_ITEMS_DATA: NewsItemData[] = [
    {
        image: 'https://picsum.photos/400/250?random=1',
        date: 'October 26, 2023',
        title: 'New Community Health Center Opens in Kebele 04',
        excerpt: 'The new facility aims to provide accessible healthcare services to over 5,000 residents, equipped with modern medical tools.'
    },
    {
        image: 'https://picsum.photos/400/250?random=2',
        date: 'October 22, 2023',
        title: 'Agricultural Training Program for Local Farmers Launched',
        excerpt: 'In partnership with the regional bureau, the woreda has started a new program to boost productivity through sustainable farming techniques.'
    },
    {
        image: 'https://picsum.photos/400/250?random=3',
        date: 'October 18, 2023',
        title: 'Wereda Administration Announces Digital ID Registration Drive',
        excerpt: 'Residents are encouraged to register for the new digital identification system starting next month at all kebele offices.'
    }
];
