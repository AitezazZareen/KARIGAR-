export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon: string; // Ionicons name
};

export const services: ServiceCategory[] = [
  { id: 'electrician', name: 'Electrician', description: 'Wiring, Faults, New Connections', icon: 'flash' },
  { id: 'plumber', name: 'Plumber', description: 'Pipes, Leakages, Fittings', icon: 'water' },
  { id: 'ac', name: 'AC Technician', description: 'AC Repair, Installation, Gas Refill', icon: 'snow' },
  { id: 'carpenter', name: 'Carpenter', description: 'Furniture, Doors, Wood Work', icon: 'construct' },
  { id: 'painter', name: 'Painter', description: 'Wall Paint, Texture, Polish', icon: 'color-palette' },
  { id: 'mason', name: 'Mason', description: 'Brick Work, Plaster, Construction', icon: 'business' },
  { id: 'mechanic', name: 'Mechanic', description: 'Bike & Car Repair, Maintenance', icon: 'bicycle' },
  { id: 'cleaning', name: 'Cleaning Services', description: 'Home, Office, Deep Cleaning', icon: 'sparkles' },
  { id: 'more', name: 'More Services', description: 'View all categories', icon: 'grid' },
];

export const popularServices = services.slice(0, 8);

export type Worker = {
  id: string;
  name: string;
  verified: boolean;
  profession: string;
  serviceId: string;
  rating: number;
  reviews: number;
  distanceKm: number;
  completedJobs: number;
  yearsExp: number;
  estimate: number;
  availability: string;
  availableNow: boolean;
  bestMatch?: boolean;
  about: string;
  skills: string[];
  avatarColor: string;
};

export const workers: Worker[] = [
  {
    id: 'w1',
    name: 'Muhammad Usman',
    verified: true,
    profession: 'Electrician',
    serviceId: 'electrician',
    rating: 4.8,
    reviews: 128,
    distanceKm: 1.2,
    completedJobs: 128,
    yearsExp: 3,
    estimate: 1800,
    availability: 'tomorrow at 10:00 AM',
    availableNow: true,
    bestMatch: true,
    about:
      'I am a professional electrician with 3 years of experience in house wiring, fault fixing, and new connections.',
    skills: ['House Wiring', 'Fault Finding', 'New Connections', 'CCTV Wiring', 'DB Installation'],
    avatarColor: '#F5A623',
  },
  {
    id: 'w2',
    name: 'Bilal Ahmad',
    verified: false,
    profession: 'Electrician',
    serviceId: 'electrician',
    rating: 4.6,
    reviews: 98,
    distanceKm: 2.4,
    completedJobs: 98,
    yearsExp: 2,
    estimate: 1600,
    availability: 'tomorrow at 11:00 AM',
    availableNow: true,
    about: 'Reliable electrician handling residential and commercial wiring jobs.',
    skills: ['Wiring', 'Panel Repair'],
    avatarColor: '#4A90D9',
  },
  {
    id: 'w3',
    name: 'Shahbaz Ali',
    verified: true,
    profession: 'Electrician',
    serviceId: 'electrician',
    rating: 4.5,
    reviews: 76,
    distanceKm: 3.14,
    completedJobs: 76,
    yearsExp: 4,
    estimate: 1900,
    availability: '09:00 AM',
    availableNow: false,
    about: 'Experienced in new connections and fault diagnosis across Islamabad.',
    skills: ['New Connections', 'Fault Finding'],
    avatarColor: '#8E6DD1',
  },
  {
    id: 'w4',
    name: 'Imran Sheikh',
    verified: true,
    profession: 'Plumber',
    serviceId: 'plumber',
    rating: 4.7,
    reviews: 112,
    distanceKm: 0.8,
    completedJobs: 112,
    yearsExp: 5,
    estimate: 1500,
    availability: 'today at 4:00 PM',
    availableNow: true,
    about: 'Specialist in pipe fitting, leak repair, and bathroom fittings across Islamabad.',
    skills: ['Pipe Fitting', 'Leak Repair', 'Bathroom Fittings'],
    avatarColor: '#3AA6A0',
  },
  {
    id: 'w5',
    name: 'Rashid Mehmood',
    verified: true,
    profession: 'AC Technician',
    serviceId: 'ac',
    rating: 4.9,
    reviews: 150,
    distanceKm: 1.5,
    completedJobs: 150,
    yearsExp: 6,
    estimate: 2200,
    availability: 'today at 5:30 PM',
    availableNow: true,
    about: 'AC installation, gas refill, and split unit repair specialist with 6 years of field experience.',
    skills: ['AC Installation', 'Gas Refill', 'Split AC Repair'],
    avatarColor: '#4FA3E3',
  },
  {
    id: 'w6',
    name: 'Waqas Iqbal',
    verified: false,
    profession: 'Carpenter',
    serviceId: 'carpenter',
    rating: 4.4,
    reviews: 60,
    distanceKm: 2.0,
    completedJobs: 60,
    yearsExp: 4,
    estimate: 2500,
    availability: 'tomorrow at 09:00 AM',
    availableNow: false,
    about: 'Custom woodwork, furniture repair, and door fitting for homes and offices.',
    skills: ['Furniture Repair', 'Door Fitting', 'Custom Woodwork'],
    avatarColor: '#B07D4F',
  },
  {
    id: 'w7',
    name: 'Nasir Hussain',
    verified: true,
    profession: 'Painter',
    serviceId: 'painter',
    rating: 4.6,
    reviews: 85,
    distanceKm: 1.1,
    completedJobs: 85,
    yearsExp: 3,
    estimate: 1800,
    availability: 'today at 3:00 PM',
    availableNow: true,
    about: 'Wall painting, texture work, and waterproofing done neatly and on schedule.',
    skills: ['Wall Painting', 'Texture Work', 'Waterproofing'],
    avatarColor: '#E0678A',
  },
  {
    id: 'w8',
    name: 'Zeeshan Tariq',
    verified: false,
    profession: 'Mason',
    serviceId: 'mason',
    rating: 4.3,
    reviews: 40,
    distanceKm: 3.2,
    completedJobs: 40,
    yearsExp: 7,
    estimate: 3000,
    availability: 'tomorrow at 08:00 AM',
    availableNow: false,
    about: 'Brick laying, plastering, and tile work for new construction and repairs.',
    skills: ['Brick Laying', 'Plastering', 'Tile Work'],
    avatarColor: '#9B8E70',
  },
  {
    id: 'w9',
    name: 'Kashif Nawaz',
    verified: true,
    profession: 'Mechanic',
    serviceId: 'mechanic',
    rating: 4.7,
    reviews: 95,
    distanceKm: 0.5,
    completedJobs: 95,
    yearsExp: 5,
    estimate: 1200,
    availability: 'today at 2:00 PM',
    availableNow: true,
    about: 'Bike and car repair, servicing, and engine diagnostics at your doorstep.',
    skills: ['Bike Repair', 'Car Servicing', 'Engine Diagnostics'],
    avatarColor: '#6E7BC2',
  },
  {
    id: 'w10',
    name: 'Sadia Bano',
    verified: true,
    profession: 'Cleaning Services',
    serviceId: 'cleaning',
    rating: 4.8,
    reviews: 140,
    distanceKm: 1.8,
    completedJobs: 140,
    yearsExp: 4,
    estimate: 1000,
    availability: 'today at 1:00 PM',
    availableNow: true,
    about: 'Deep cleaning, kitchen cleaning, and office cleaning with a trusted, trained team.',
    skills: ['Deep Cleaning', 'Kitchen Cleaning', 'Office Cleaning'],
    avatarColor: '#5FBF7A',
  },
];

export type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  positive: boolean;
  date: string;
  icon: string;
};

export const transactions: Transaction[] = [
  { id: 't1', title: 'Job Payment', subtitle: 'House Wiring Fixing', amount: 1800, positive: true, date: '12 May, 2024', icon: 'flash' },
  { id: 't2', title: 'Job Payment', subtitle: 'Fan Installation', amount: 900, positive: true, date: '10 May, 2024', icon: 'construct' },
  { id: 't3', title: 'Withdrawn to JazzCash', subtitle: 'Rob the Wallet', amount: -2000, positive: false, date: '08 May, 2024', icon: 'card' },
  { id: 't4', title: 'Referral Bonus', subtitle: 'House Wiring Fixing', amount: 250, positive: true, date: '05 May, 2024', icon: 'gift' },
];

export type Conversation = {
  id: string;
  name: string;
  verified?: boolean;
  message: string;
  time: string;
  unread?: number;
  avatarColor: string;
};

export const conversations: Conversation[] = [
  { id: 'c1', name: 'Muhammad Usman', verified: true, message: 'On the way', time: '10:30 AM', unread: 1, avatarColor: '#F5A623' },
  { id: 'c2', name: 'Bilal Ahmad', message: 'Can you share more details?', time: 'Yesterday', avatarColor: '#4A90D9' },
  { id: 'c3', name: 'Ali Raza', message: 'Thank you for your service!', time: 'Yesterday', avatarColor: '#5FBF7A' },
  { id: 'c4', name: 'Karigar Support', message: 'Your payment of Rs. 1,800 is completed.', time: '12 May', avatarColor: '#1C2B3A' },
  { id: 'c5', name: 'Shahbaz Ali', message: 'I am available at 11:00 AM', time: '12 May', avatarColor: '#8E6DD1' },
];

export const activeJob = {
  title: 'House Wiring Fixing',
  location: 'DHA Phase 2, Islamabad',
  time: 'Tomorrow, 10:00 AM',
  price: 1800,
  worker: workers[0],
  etaMinutes: 8,
  status: 'onTheWay' as 'accepted' | 'onTheWay' | 'inProgress' | 'completed',
};
