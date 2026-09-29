import type {
  PillarItem,
  CampaignItem,
  StoryItem,
  SDGItem,
  PartnerLogoItem,
  StatItem,
  LedgerTransaction,
  StateOperation,
  TestimonialItem,
  FAQItem,
  CertificationItem,
} from '../types';
import { TMF_META } from './tmfVerifiedData';

export const FOUNDATION_META = {
  name: TMF_META.name,
  shortName: TMF_META.name,
  bengaliName: TMF_META.bengaliName,
  initials: 'TMF',
  tagline: TMF_META.slogans.primary,
  secondaryTagline: TMF_META.slogans.secondary,
  projectTitle: 'Tribeni Minati Foundation — Est. 2013',
  ngoEntity: 'Tribeni Minati Foundation',
  ngoType: 'Registered Non-Profit Society (West Bengal Societies Registration Act, 1961)',
  ngoCin: 'Reg No: SO212276 of 2013-2014 (12A & 80G Certified)',
  regNumber: TMF_META.newRegNo,
  legacyRegNumber: TMF_META.legacyRegNo,
  ngoDarpanId: TMF_META.ngoDarpanId,
  pan: TMF_META.pan,
  estDate: TMF_META.estDate,
  email: TMF_META.primaryEmail,
  csrEmail: TMF_META.primaryEmail,
  secretaryEmail: TMF_META.contacts.emails[1],
  treasurerEmail: TMF_META.contacts.emails[2],
  phone: TMF_META.helpline,
  helpline: TMF_META.helpline,
  secretaryPhone: TMF_META.contacts.secretary,
  presidentPhone: TMF_META.contacts.president,
  treasurerPhone: TMF_META.contacts.treasurer,
  address: TMF_META.offices.headOffice.address,
  delhiLiaison: TMF_META.offices.branchOffice.address,
  headOfficeAddress: TMF_META.offices.headOffice.address,
  branchOfficeAddress: TMF_META.offices.branchOffice.address,
  upiId: TMF_META.bank.upiId,
  upiIdAlt: TMF_META.bank.upiIdAlt,
  qrImage: TMF_META.bank.qrImage,
  bankName: TMF_META.bank.bankName,
  branchName: TMF_META.bank.branch,
  accountNumber: TMF_META.bank.accountNumber,
  ifsc: TMF_META.bank.ifsc,
  micr: TMF_META.bank.micr,
};

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'education',
    tag: 'M-I-N-A-T-I Illiterate & Child Welfare',
    title: 'Free Child Remedial Coaching Center',
    subtitle: 'After-School Academic Coaching, Notebooks & Daily Nutrition',
    body: 'Permanent free coaching center for children of rural daily-wage earners in Mogra and Tribeni, providing continuous academic tutoring, books, and morning breakfast.',
    longDescription:
      'Our Free Child Remedial Education Center addresses foundational literacy and numeracy gaps among first-generation schoolgoers in rural Hooghly. Dedicated volunteer educators conduct daily batches, distribute free geometry boxes, notebooks, and school bags, and provide morning protein meals to prevent dropout and childhood malnutrition.',
    iconName: 'GraduationCap',
    metrics: [
      { label: 'Students Enrolled Daily', value: '500+' },
      { label: 'Volunteer Teachers', value: '18 Educators' },
      { label: 'School Retention Rate', value: '98.5%' },
      { label: 'Nutrition Meals Served', value: '45,000+' },
    ],
    highlights: [
      'Daily Bengali & English literacy coaching for primary & secondary students',
      'Free distribution of school bags, notebooks, geometry sets, and uniforms',
      'Daily morning nutritious breakfast (milk, boiled eggs, and fruits)',
      'Quarterly parent-teacher counseling to prevent child labor',
    ],
    sdgGoals: ['SDG 4: Quality Education', 'SDG 2: Zero Hunger', 'SDG 10: Reduced Inequalities'],
    beneficiaryQuote: {
      text: 'Thanks to Minati Free Coaching, my daughter scored 82% in her school finals and received all her books for free.',
      author: 'Subhash Mondal (Daily Wage Laborer)',
      location: 'Mogra, Hooghly, West Bengal',
    },
  },
  {
    id: 'winter-relief',
    tag: 'M-I-N-A-T-I Needy & Infant Protection',
    title: 'Infant Winter Bedding & Blanket Drive',
    subtitle: 'Thermal Zipped Baby Bedding & Heavy Blankets Distribution',
    body: 'Protecting rural newborns, infants, and destitute elderly villagers from severe winter hypothermia across Dhaniakhali and Tribeni hamlets.',
    longDescription:
      'During extreme cold waves across rural Bengal, vulnerable infants sleeping on damp mud floors face acute respiratory infections. Tribeni Minati Foundation manufactures and distributes specialized thermal insulated zipped mattress kits, woollen sweaters, and heavy fleece blankets directly at village doorsteps.',
    iconName: 'ShieldAlert',
    metrics: [
      { label: 'Infant Bedding Distributed', value: '1,200+ Kits' },
      { label: 'Elderly Blankets Given', value: '2,800+ Fleece' },
      { label: 'Hamlets Covered', value: '38 Villages' },
      { label: 'Doorstep Verifications', value: '100% On-Ground' },
    ],
    highlights: [
      'Specialized thermal insulated zipped bedding designed for newborns and infants',
      'High-grade heavy woollen blankets for destitute elderly and widows',
      'Direct doorstep distribution across remote mud hamlets in Dhaniakhali',
      'Free baby winter clothing and thermal caps package',
    ],
    sdgGoals: ['SDG 3: Good Health & Well-being', 'SDG 1: No Poverty', 'SDG 10: Reduced Inequalities'],
    beneficiaryQuote: {
      text: 'The zipped warm baby bedding kept my 4-month-old infant completely protected throughout the severe winter chill.',
      author: 'Anima Murmu',
      location: 'Radhanagar, Dhaniakhali, Hooghly',
    },
  },
  {
    id: 'healthcare',
    tag: 'M-I-N-A-T-I Healthcare & Mobile Camps',
    title: 'Rural Diagnostic Health & Eye Camps',
    subtitle: 'Free Doctor Consultations, Pediatric Care & Medicines',
    body: 'Deploying qualified physicians, pediatricians, and optometrists to remote rural hamlets for free diagnostic screenings, medicine disbursement, and cataract detection.',
    longDescription:
      'Bridging the rural healthcare gap in Hooghly, Tribeni Minati Foundation conducts regular diagnostic camps providing free general medicine, pediatric diagnostics, blood pressure and blood sugar checks, eye screenings, and distribution of prescription medicines and reading spectacles.',
    iconName: 'Activity',
    metrics: [
      { label: 'Patients Treated', value: '3,500+' },
      { label: 'Camps Executed', value: '42+ Drives' },
      { label: 'Free Spectacles Given', value: '850+ Pairs' },
      { label: 'Medicines Disbursed', value: '100% Free' },
    ],
    highlights: [
      'Expert consultations by licensed physicians and pediatricians',
      'Free diagnostic blood sugar, ECG, and blood pressure screenings',
      'Comprehensive optometrist eye exams and free reading spectacles',
      'Prescription generic medicine kits distributed at zero cost to patients',
    ],
    sdgGoals: ['SDG 3: Good Health & Well-being', 'SDG 10: Reduced Inequalities'],
    beneficiaryQuote: {
      text: 'The foundation doctor detected my eye problem and gave me free reading glasses. Now I can weave without headache.',
      author: 'Biren Roy',
      location: 'Tribeni, Hooghly, West Bengal',
    },
  },
  {
    id: 'women-empowerment',
    tag: 'M-I-N-A-T-I Abused & Women Self-Reliance',
    title: 'Women SHG Tailoring & Jute Craft Center',
    subtitle: 'Vocational Stitching, Jute Bag Production & Micro-Incomes',
    body: 'Empowering marginalized rural women, single mothers, and domestic violence survivors through certified tailoring, garment stitching, and eco-friendly jute handicraft production.',
    longDescription:
      'Our Women Empowerment Hub in Tribeni provides free vocational training on industrial sewing machines, pattern cutting, and eco-friendly jute bag fabrication. Trainees receive raw materials, market linkages, and self-help group micro-savings support to establish independent household incomes.',
    iconName: 'Users',
    metrics: [
      { label: 'Women Trained & Certified', value: '85+ Artisans' },
      { label: 'Active Sewing Machines', value: '14 Units' },
      { label: 'Avg Monthly Earnings', value: '₹4,500 - ₹8,000' },
      { label: 'SHGs Formed', value: '6 Collectives' },
    ],
    highlights: [
      'Comprehensive hands-on training on motorized and manual sewing machines',
      'Production of eco-friendly jute shopping bags, school bags, and garments',
      'Market linkage and bulk procurement tie-ups with local cooperatives',
      'Zero-interest raw material loans and financial literacy counseling',
    ],
    sdgGoals: ['SDG 5: Gender Equality', 'SDG 8: Decent Work & Economic Growth', 'SDG 1: No Poverty'],
    beneficiaryQuote: {
      text: 'After completing the 3-month tailoring course at Minati Hub, I now stitch school uniforms and earn independently.',
      author: 'Kakali Ghosh',
      location: 'Kanthaltala, Tribeni, Hooghly',
    },
  },
  {
    id: 'blood-donation',
    tag: 'M-I-N-A-T-I Emergency Life Support',
    title: 'Voluntary Blood Donation & Emergency Cell',
    subtitle: 'Life-Saving Blood Drives & 24/7 Donor Coordination',
    body: 'Organizing periodic voluntary blood donation camps in association with State Blood Transfusion Council and maintaining emergency donor registry for critical patients.',
    longDescription:
      'In emergency hospital transfers and thalassemia patient care across Hooghly and Burdwan, availability of safe blood units is critical. Tribeni Minati Foundation coordinates regular blood donation camps and maintains a 24/7 active volunteer blood donor network.',
    iconName: 'Truck',
    metrics: [
      { label: 'Blood Units Mobilized', value: '850+ Units' },
      { label: 'Annual Mega Camps', value: '4 Drives/Yr' },
      { label: 'Emergency Donor Network', value: '350+ Donors' },
      { label: 'Thalassemia Units Support', value: '120+ Patients' },
    ],
    highlights: [
      'Organized in direct compliance with State Blood Transfusion Council norms',
      'Certified donor testing, nutritious refreshments, and donor donor cards',
      '24/7 emergency blood coordination helpline managed by General Secretary',
      'Awareness campaigns to eradicate taboos surrounding voluntary donation',
    ],
    sdgGoals: ['SDG 3: Good Health & Well-being', 'SDG 17: Partnerships for the Goals'],
    beneficiaryQuote: {
      text: 'When my father needed rare O-negative blood for surgery, TMF volunteer reached the hospital in 30 minutes to donate.',
      author: 'Pritam Sarkar',
      location: 'Chinsurah, Hooghly',
    },
  },
  {
    id: 'food-relief',
    tag: 'M-I-N-A-T-I Needy & Community Feeding',
    title: 'Emergency Food Security & Annadaan',
    subtitle: 'Staple Ration Kits & Extreme Climate Feeding Drives',
    body: 'Providing dry ration kits (rice, pulses, mustard oil, salt, baby food) to destitute families, elderly widows, and climate-distressed households.',
    longDescription:
      'During monsoon floodings, unseasonal agricultural loss, or extreme weather distress, Tribeni Minati Foundation deploys rapid relief food packets containing essential staples to ensure zero hunger in the most vulnerable rural pockets.',
    iconName: 'Sprout',
    metrics: [
      { label: 'Ration Kits Distributed', value: '3,200+ Kits' },
      { label: 'Hot Meals Served', value: '15,000+' },
      { label: 'Flood-Distressed Families', value: '650+ Assisted' },
      { label: 'Nutritional Dry Packets', value: '100% Free' },
    ],
    highlights: [
      'Fortified ration packages with 10kg rice, 2kg lentils, mustard oil, and salt',
      'Baby food supplements, biscuits, and milk powder for nursing mothers',
      'Immediate deployment during seasonal Ganges riverbank floodings',
      'Transparent verification with local Gram Panchayat beneficiary registers',
    ],
    sdgGoals: ['SDG 2: Zero Hunger', 'SDG 1: No Poverty', 'SDG 10: Reduced Inequalities'],
    beneficiaryQuote: {
      text: 'During the waterlogging crisis, the Minati Foundation team reached our hamlet by boat with dry rations and drinking water.',
      author: 'Sanjoy Soren',
      location: 'Dhaniakhali Rural, Hooghly',
    },
  },
];

export const STORIES_OF_CHANGE: StoryItem[] = [
  {
    id: 'story-priya',
    title: 'From Absentee Child to Class Topper in Mogra',
    category: 'Education',
    location: 'Mogra, Hooghly, West Bengal',
    beneficiaryName: 'Priya Das',
    age: 10,
    beforeSituation: 'Priya was on the verge of dropping out from primary school due to her parents inability to afford tuition and stationery.',
    afterTransformation: 'After enrolling in the Minati Free Remedial Coaching Center, Priya received daily tutoring, school bags, and notebooks. She scored 88% in her 4th standard final exams.',
    quote: 'মিনতি সেন্টারে শিক্ষকরা আমাদের নিজের সন্তানের মতো পড়ান। আমি বড় হয়ে শিক্ষিকা হতে চাই।',
    readTime: '3 min read',
    imageUrl: '/tmf-assets/generated/story_student_priya.jpg',
  },
  {
    id: 'story-anima',
    title: 'Protecting a Newborn Infant from Severe Winter Frost',
    category: 'Winter Relief',
    location: 'Radhanagar, Dhaniakhali, Hooghly',
    beneficiaryName: 'Anima Murmu',
    age: 24,
    beforeSituation: 'Living in a kutcha mud house with drafty walls, Anima was terrified for her 2-month-old infant during the 9°C winter freeze.',
    afterTransformation: 'Tribeni Minati Foundation volunteers delivered an insulated zipped mattress kit, woollen baby suit, and mother thermal shawl directly to her doorstep.',
    quote: 'এই জিপ দেওয়া শীতের নরম বিছানা আমার ছোট্ট সন্তানকে কনকনে ঠান্ডায় সুরক্ষিত রেখেছে।',
    readTime: '4 min read',
    imageUrl: '/tmf-assets/generated/winter_infant_bedding.jpg',
  },
  {
    id: 'story-biren',
    title: 'Restoring Clear Vision for an Elderly Handloom Artisan',
    category: 'Healthcare',
    location: 'Tribeni Ghats, Hooghly',
    beneficiaryName: 'Biren Roy',
    age: 64,
    beforeSituation: 'Severe eye strain and blurred vision prevented Biren from operating his handloom loom, threatening his family daily income.',
    afterTransformation: 'At our free diagnostic medical and eye camp, an optometrist evaluated his vision and provided free customized reading spectacles and eye drops.',
    quote: 'বিনামূল্যে চশমা পাওয়ার পর আমি আবার তাঁতের কাজ শুরু করতে পেরেছি। আমার সংসার বেঁচে গেল।',
    readTime: '3 min read',
    imageUrl: '/tmf-assets/generated/story_elderly_artisan.jpg',
  },
  {
    id: 'story-kakali',
    title: 'Micro-Livelihood Transformation via Jute Craft Hub',
    category: 'Women Empowerment',
    location: 'Kanthaltala, Tribeni, Hooghly',
    beneficiaryName: 'Kakali Ghosh',
    age: 32,
    beforeSituation: 'As a single mother without steady income, Kakali struggled to feed her two school-age children.',
    afterTransformation: 'She completed the 3-month tailoring and jute bag stitching training at Minati Hub and now earns a steady monthly income supplying local markets.',
    quote: 'নিজের উপার্জনে ছেলেমেয়েদের পড়াচ্ছি—এই আত্মসম্মান মিনতি ফাউন্ডেশন আমাকে দিয়েছে।',
    readTime: '4 min read',
    imageUrl: '/tmf-assets/generated/women_tailoring_hub.jpg',
  },
  {
    id: 'story-sanjoy',
    title: 'Clean Water & Healthcare Access in Remote Tribal Hamlet',
    category: 'Farming & Livelihood',
    location: 'Dhaniakhali Rural Hamlets, Hooghly',
    beneficiaryName: 'Sanjoy Soren',
    age: 42,
    beforeSituation: 'The village suffered recurrent water-borne illnesses and lacked access to basic diagnostic health facilities.',
    afterTransformation: 'TMF established regular mobile clinical health camps and provided water sanitization kits, reducing seasonal dysentery cases by 75%.',
    quote: 'ডাক্তারবাবুরা আমাদের গ্রামে এসে ওষুধ দেন। ফাউন্ডেশনের উদ্যোগে আমাদের গ্রামের মানুষের অনেক উপকার হয়েছে।',
    readTime: '3 min read',
    imageUrl: '/tmf-assets/generated/rural_medical_camp.jpg',
  },
];

export const CAMPAIGNS_DATA: CampaignItem[] = [
  {
    id: 'camp-child-education',
    title: 'Sponsor a Child Remedial Schooling & Nutrition Kit',
    tagline: 'Provide 1 full year of after-school tutoring, textbooks & daily nutrition.',
    category: 'Education',
    description: 'Empowers children of daily-wage laborers with foundational literacy, digital classes, and morning protein meals.',
    targetAmount: 250000,
    raisedAmount: 185000,
    beneficiariesCount: '500+ Children',
    tag: 'High Priority',
    gradient: 'from-[#1B3B2B] to-[#26533D]',
    imageUrl: '/tmf-assets/real-field-photos/tmf-field-10.jpeg',
    sponsorOptions: [
      { label: '1 Child (1 Year)', amount: 3500, impact: 'Books, school uniform & daily nutrition for 1 full year' },
      { label: '3 Children Batch', amount: 10000, impact: 'Complete academic sponsorship for 3 underprivileged students' },
      { label: 'Coaching Classroom Sponsor', amount: 25000, impact: 'Covers teacher honorarium, study desks & teaching kits' },
    ],
  },
  {
    id: 'camp-infant-winter',
    title: 'Infant Thermal Sleeping Bedding & Blanket Drive',
    tagline: 'Protect 1,200+ rural newborns and elderly widows from severe winter frost.',
    category: 'Healthcare',
    description: 'Distributes specialized zipped mattress sleeping pods and heavy fleece blankets directly in mud hamlets.',
    targetAmount: 200000,
    raisedAmount: 162000,
    beneficiariesCount: '1,200+ Infants & Elders',
    tag: 'Seasonal Relief',
    gradient: 'from-[#1B3B2B] to-[#26533D]',
    imageUrl: '/tmf-assets/real-field-photos/tmf-field-14.jpeg',
    sponsorOptions: [
      { label: '2 Infant Bedding Kits', amount: 1200, impact: '2 thermal zipped mattress pods for newborns' },
      { label: 'Family Winter Pack', amount: 3000, impact: '2 infant bedding kits + 2 heavy woollen blankets for elderly' },
      { label: 'Hamlet Winter Shield', amount: 15000, impact: 'Covers an entire rural tribal hamlet of 25+ families' },
    ],
  },
  {
    id: 'camp-rural-health',
    title: 'Free Diagnostic Medical, Eye & Blood Camps',
    tagline: 'Comprehensive doctor checkups, medicines and free reading spectacles.',
    category: 'Healthcare',
    description: 'Brings licensed physicians, pediatricians, and optometrists to remote villages in Hooghly.',
    targetAmount: 300000,
    raisedAmount: 240000,
    beneficiariesCount: '3,500+ Patients',
    tag: 'Medical Mission',
    gradient: 'from-[#1B3B2B] to-[#26533D]',
    imageUrl: '/tmf-assets/real-field-photos/tmf-field-23.jpeg',
    sponsorOptions: [
      { label: 'Medicine Kit for 10 Patients', amount: 1500, impact: 'Free prescription antibiotics, vitamins & eye drops' },
      { label: '10 Pairs Spectacles', amount: 3000, impact: '10 custom reading glasses for senior artisans' },
      { label: 'Full Village Camp Sponsor', amount: 20000, impact: 'Doctor fees, diagnostic testing strips & medicine stock' },
    ],
  },
];

export const STATS_DATA: StatItem[] = [
  { value: '500+', numericValue: 500, label: 'Daily Remedial Students', description: 'Children receiving free tutoring & nutrition' },
  { value: '1,200+', numericValue: 1200, label: 'Infant Bedding Kits', description: 'Zipped thermal mattress sets distributed' },
  { value: '3,500+', numericValue: 3500, label: 'Patients Treated', description: 'Free diagnostic medical & eye checkups' },
  { value: '100%', numericValue: 100, label: '80G Tax Exemption', description: 'CBDT Form 10BE certified donations' },
];

export const IMPACT_STATS = STATS_DATA;

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Is my donation to Tribeni Minati Foundation eligible for tax exemption in India?',
    answer: 'Yes. Tribeni Minati Foundation is certified under Section 80G of the Income Tax Act, 1961 (Reg: SO212276, PAN: AAPAT4811J). All donations are eligible for a 50% tax deduction with instant Form 10BE filing compliance.',
    category: 'Donations & 80G',
  },
  {
    question: 'How do I transfer funds directly to the foundation bank account?',
    answer: 'You can transfer directly to our official account: Bank: Central Bank of India, Tarakeshwar Branch, Account Name: TRIBENI MINATI FOUNDATION, Account Number: 5894594000, IFSC Code: CBIN0283860. Passbook proof is available in our Document Vault.',
    category: 'Donations & 80G',
  },
  {
    question: 'Where are your physical offices and coaching centers located?',
    answer: 'Our Primary Corporate HQ is located at Kanthaltala (near water tank), Tribeni-Mogra Road, PO Tribeni, Dist Hooghly - 712503. Our Regional Operations Branch is at Radhanagar, PO Gopinagar, PS Dhaniakhali, Dist Hooghly - 712402.',
    category: 'Operations',
  },
  {
    question: 'Can corporate companies partner with TMF for CSR grants under Schedule VII?',
    answer: 'Yes. We are fully registered on NITI Aayog NGO DARPAN (Unique ID: WB/2026/0939703) and compliant with Section 135 Companies Act 2013 for CSR allocations in Education, Healthcare, and Relief.',
    category: 'CSR & Corporates',
  },
];

export const FAQ_DATA = FAQS_DATA;

export const STATE_OPERATIONS: StateOperation[] = [
  {
    state: 'West Bengal (Hooghly & Bardhaman)',
    code: 'WB',
    districtsCovered: 2,
    activeProjects: ['Free Child Remedial Coaching', 'Infant Winter Bedding Relief', 'Rural Health & Eye Camps', 'Women SHG Tailoring'],
    beneficiaries: '15,000+',
    hubLocation: 'Tribeni Corporate HQ & Radhanagar Dhaniakhali Field Office',
    keyInitiative: 'M-I-N-A-T-I Grassroots Ecosystem',
  },
];

export const VOLUNTEER_ROLES = [
  {
    title: 'Remedial Child Educator',
    pillar: 'Education',
    location: 'Mogra / Tribeni Hubs',
    commitment: '4-6 hours / week',
    description: 'Teach basic literacy, numeracy, and arts to primary school students.',
  },
  {
    title: 'Relief Field Coordinator',
    pillar: 'Winter Relief & Food Security',
    location: 'Dhaniakhali Rural Hamlets',
    commitment: 'Weekend drives',
    description: 'Distribute infant bedding, blankets, and dry ration kits directly to verified mud hamlets.',
  },
  {
    title: 'Medical & Diagnostic Volunteer',
    pillar: 'Healthcare',
    location: 'Hooghly Camps',
    commitment: 'Camp days',
    description: 'Assist doctors and optometrists with patient registrations, blood sugar testing, and medicine distribution.',
  },
  {
    title: 'Women SHG Skill Mentor',
    pillar: 'Women Empowerment',
    location: 'Tribeni Hub',
    commitment: 'Flexible',
    description: 'Guide rural women artisans in sewing quality control and local market linkages.',
  },
];

export const STATUTORY_CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Certificate of Society Registration',
    code: 'SO212276 of 2013-2014',
    authority: 'Registrar of Societies, Govt of West Bengal',
    validity: 'Permanent / Active',
    description: 'Registered under the West Bengal Societies Registration Act, 1961 (Act XXVI of 1961).',
  },
  {
    title: 'NITI Aayog NGO DARPAN ID',
    code: 'WB/2026/0939703',
    authority: 'NITI Aayog, Government of India',
    validity: 'Verified 2026',
    description: 'Central government unique identification for grants, CSR partnerships, and national initiatives.',
  },
  {
    title: 'Income Tax Exemption',
    code: 'Section 80G & 12A Certified',
    authority: 'Income Tax Department, Government of India',
    validity: 'Active (CBDT Form 10BE Compliant)',
    description: '50% tax deduction eligibility for all Indian corporate and individual donations.',
  },
  {
    title: 'Income Tax Permanent Account Number',
    code: 'AAPAT4811J',
    authority: 'Govt. of India',
    validity: 'Permanent',
    description: 'Verified statutory PAN card registered under Tribeni Minati Foundation.',
  },
];

export const CORPORATE_PARTNERS: PartnerLogoItem[] = [
  {
    name: 'State Blood Transfusion Council',
    category: 'Healthcare Partner',
    description: 'Collaborating on annual mega voluntary blood donation drives across Hooghly.',
  },
  {
    name: 'Gram Panchayat Welfare Cell',
    category: 'Community Partner',
    description: 'Beneficiary doorstep verification for winter infant bedding and flood relief.',
  },
  {
    name: 'Central Bank of India',
    category: 'Banking Partner',
    description: 'Designated statutory treasury bank handling all 80G donor and institutional receipts.',
  },
  {
    name: 'Local Jute & Handloom Cooperatives',
    category: 'Livelihood Partner',
    description: 'Procuring eco-friendly jute bags manufactured by our trained women SHGs.',
  },
];

export const SDG_DATA: SDGItem[] = [
  {
    number: 4,
    title: 'Quality Education',
    description: 'Free remedial coaching centers, textbooks, and drawing kits for first-generation learners.',
    color: '#C5192D',
    iconName: 'GraduationCap',
    ourPrograms: ['Minati Free Remedial Coaching Center (Mogra & Tribeni)'],
  },
  {
    number: 3,
    title: 'Good Health & Well-being',
    description: 'Infant thermal sleeping bedding, rural diagnostic doctor camps, and blood donation drives.',
    color: '#4C9F38',
    iconName: 'Activity',
    ourPrograms: ['Infant Winter Bedding Protection', 'Diagnostic Health & Eye Camps', 'Blood Donation Cell'],
  },
  {
    number: 5,
    title: 'Gender Equality',
    description: 'Vocational tailoring and jute handicraft training ensuring economic independence for rural women.',
    color: '#FF3A21',
    iconName: 'Users',
    ourPrograms: ['Women SHG Tailoring & Jute Craft Hub (Tribeni)'],
  },
  {
    number: 2,
    title: 'Zero Hunger',
    description: 'Nutritional morning meals for coaching students and emergency dry ration relief for flood victims.',
    color: '#DDA63A',
    iconName: 'Sprout',
    ourPrograms: ['Daily Student Morning Nutrition', 'Emergency Ration Kits'],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: 'Tribeni Minati Foundation embodies true grassroots commitment. Seeing their volunteers hand over zipped baby bedding directly to tribal mothers in Dhaniakhali is deeply inspiring.',
    author: 'Dr. S. Mukherjee',
    role: 'Visiting Medical Officer',
    organization: 'Hooghly Rural Health Network',
    avatarText: 'SM',
    category: 'Healthcare Professional',
  },
  {
    quote: 'The level of statutory transparency and dedication of Secretary Rudra Adhya and his team is commendable. Every rupee is accounted for with audited receipts and Form 10BE filing.',
    author: 'Debabrata Ghosh',
    role: 'Senior CSR Advisor',
    organization: 'Kolkata Philanthropy Network',
    avatarText: 'DG',
    category: 'Corporate Partner',
  },
  {
    quote: 'My children received free notebooks and coaching at Minati Center. Their dedication to our village children is a true blessing.',
    author: 'Subhash Mondal',
    role: 'Parent & Daily Wage Worker',
    organization: 'Mogra Rural Beneficiary',
    avatarText: 'SM',
    category: 'Beneficiary',
  },
];

export const LEDGER_TRANSACTIONS: LedgerTransaction[] = [
  {
    id: 'tx-2026-001',
    hash: '0x8f2d...3a19',
    timestamp: '2026-08-28 11:30 AM',
    project: 'Infant Thermal Bedding Kits (Dhaniakhali)',
    state: 'West Bengal',
    amount: '₹35,000',
    beneficiariesCount: '30 Infants',
    verifier: 'General Secretary Rudra Adhya',
    status: 'Verified',
  },
  {
    id: 'tx-2026-002',
    hash: '0x7e1a...9c44',
    timestamp: '2026-08-25 04:15 PM',
    project: 'Free Remedial Coaching Books & Nutrition (Mogra)',
    state: 'West Bengal',
    amount: '₹48,500',
    beneficiariesCount: '120 Students',
    verifier: 'Treasurer Debapriya Bhattacharyya',
    status: 'Audited',
  },
  {
    id: 'tx-2026-003',
    hash: '0x3c9f...8b21',
    timestamp: '2026-08-20 02:00 PM',
    project: 'Diagnostic Doctor & Eye Camp Spectacles (Tribeni)',
    state: 'West Bengal',
    amount: '₹62,000',
    beneficiariesCount: '140 Patients',
    verifier: 'Statutory Audit Cell',
    status: 'Settled',
  },
];

export const BLOCKCHAIN_LEDGER_DATA = LEDGER_TRANSACTIONS;
