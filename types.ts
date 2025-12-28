import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: 'Sale' | 'Rent';
}

export interface MarketData {
  month: string;
  value: number;
}

export interface SectionProps {
  id: string;
  className?: string;
  children?: ReactNode;
}