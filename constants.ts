import { NavItem, Property, MarketData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Dubai', href: '#dubai' },
  { label: 'Services', href: '#services' },
  { label: 'Invest', href: '#investment' },
  { label: 'Philosophy', href: '#real-estate' }, // Renamed from Real Estate to Philosophy to fit content better
  { label: 'Market Update', href: '#market-update' },
  { label: 'Contact', href: '#contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "The Royal Penthouse",
    price: "$12,500,000",
    location: "Downtown Dubai",
    beds: 4,
    baths: 5,
    sqft: 6500,
    image: "https://picsum.photos/800/600?random=1",
    type: "Sale"
  },
  {
    id: 2,
    title: "Palm Jumeirah Villa",
    price: "$8,200,000",
    location: "Palm Jumeirah",
    beds: 6,
    baths: 7,
    sqft: 8200,
    image: "https://picsum.photos/800/600?random=2",
    type: "Sale"
  },
  {
    id: 3,
    title: "Marina Heights Loft",
    price: "$450,000/yr",
    location: "Dubai Marina",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "https://picsum.photos/800/600?random=3",
    type: "Rent"
  }
];

export const MARKET_DATA: MarketData[] = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 550 },
  { month: 'Apr', value: 500 },
  { month: 'May', value: 700 },
  { month: 'Jun', value: 650 },
  { month: 'Jul', value: 800 },
];

export const LOGO_URL = "https://i.postimg.cc/Y0Xmj9QX/wwwwwwwwww.png";