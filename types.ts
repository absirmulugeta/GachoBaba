// Fix: Import React to resolve "Cannot find namespace 'React'" error.
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

export interface NewsItemData {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}