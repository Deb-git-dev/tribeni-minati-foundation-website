export type PageId =
  | 'home'
  | 'about'
  | 'program'
  | 'programs'
  | 'stories'
  | 'gallery'
  | 'csr'
  | 'volunteer'
  | 'transparency'
  | 'calculator'
  | 'donor-portal'
  | 'donor-login'
  | 'login'
  | 'events'
  | 'contact';

export interface PillarItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  longDescription: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  sdgGoals: string[];
  imagePlaceholder?: string;
  beneficiaryQuote?: {
    text: string;
    author: string;
    location: string;
  };
}

export interface CampaignItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Healthcare' | 'Education' | 'Women Empowerment' | 'Agribusiness' | 'Disaster Relief';
  description: string;
  targetAmount: number;
  raisedAmount: number;
  beneficiariesCount: string;
  sponsorOptions: { label: string; amount: number; impact: string }[];
  tag: string;
  gradient: string;
  imageUrl?: string;
}

export interface StoryItem {
  id: string;
  title: string;
  category: 'Healthcare' | 'Education' | 'Women Empowerment' | 'Farming & Livelihood' | 'Winter Relief';
  location: string;
  beneficiaryName: string;
  age?: number;
  beforeSituation: string;
  afterTransformation: string;
  quote: string;
  videoDuration?: string;
  embedVideoId?: string;
  readTime: string;
  imageUrl?: string;
}

export interface SDGItem {
  number: number;
  title: string;
  description: string;
  color: string;
  iconName: string;
  ourPrograms: string[];
}

export interface PartnerLogoItem {
  name: string;
  category: string;
  description: string;
}

export interface VolunteerApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  interestArea: string;
  availability: string;
  experienceNotes: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface LedgerTransaction {
  id: string;
  hash: string;
  timestamp: string;
  project: string;
  state: string;
  amount: string;
  beneficiariesCount: string;
  verifier: string;
  status: 'Verified' | 'Audited' | 'Settled';
}

export interface StateOperation {
  state: string;
  code: string;
  districtsCovered: number;
  activeProjects: string[];
  beneficiaries: string;
  hubLocation: string;
  keyInitiative: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarText: string;
  category: 'Corporate Partner' | 'Beneficiary' | 'Healthcare Professional';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Donations & 80G' | 'CSR & Corporates' | 'Operations' | 'Governance';
}

export interface CertificationItem {
  title: string;
  code: string;
  authority: string;
  validity: string;
  description: string;
}
