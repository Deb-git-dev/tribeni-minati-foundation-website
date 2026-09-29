export interface GoverningMember {
  name: string;
  designation: string;
  activeSince?: string;
  uinMasked: string; // DPDP Compliant Masked UIN (Aadhaar)
  dob?: string;
  panMasked?: string; // DPDP Compliant Masked PAN
  parentName?: string;
  contact?: string;
  email?: string;
  occupation: string;
  address: string;
  note?: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  fileName: string;
  fileUrl: string;
  regNumber: string;
  issueDate: string;
  authority: string;
  description: string;
}

export interface TmfCampaign {
  id: string;
  title: string;
  bengaliTitle: string;
  tagline: string;
  category: string;
  description: string;
  imagePath: string;
  partner?: string;
  daysActive: string;
  targetBeneficiaries: string;
  highlights: string[];
}

export const TMF_META = {
  name: 'Tribeni Minati Foundation',
  bengaliName: 'ত্রিবেনী মিনতি ফাউন্ডেশন',
  type: 'Registered Non-Governmental Organization / Society',
  act: 'West Bengal Societies Registration Act, 1961 (Act XXVI of 1961)',
  estDate: '25th November 2013',
  legacyRegNo: 'S/2L/12276 (2013)',
  newRegNo: 'SO212276 (2013-2014)',
  regDisplay: 'SO212276 of 2013-2014 (Est. 25 Nov 2013)',
  ngoDarpanId: 'WB/2026/0939703',
  pan: 'AAPAT4811J',
  primaryEmail: 'tribeniminatifoundation@gmail.com',
  helpline: '+91-9143430927',
  slogans: {
    primary: '...your smile, our reward...',
    secondary: '...lets go, do something ....',
  },
  bank: {
    accountName: 'TRIBENI MINATI FOUNDATION',
    bankName: 'Central Bank of India',
    branch: 'Tarakeshwar Branch, Padamapukur, Dist. Hooghly, West Bengal - 712410',
    accountNumber: '5894594000',
    ifsc: 'CBIN0283860',
    micr: '712016857',
    upiId: '20260933445145-iservuqrsbrp@cbin',
    upiIdAlt: '5894594000@cbin',
    qrImage: '/tmf-assets/tmf-qr.jpeg',
    passbookDoc: '/tmf-assets/bank-account-of-tmf.pdf',
  },
  offices: {
    headOffice: {
      name: 'Primary Corporate Office',
      address: 'Kanthaltala (near water tank), Tribeni-Mogra Road, PO Tribeni, PS Mogra, Hooghly, West Bengal - 712503',
      coordinates: [22.9833, 88.3983] as [number, number],
      pin: '712503',
    },
    branchOffice: {
      name: 'Radhanagar Branch Office',
      address: 'Radhanagar, P.O. Gopinagar, P.S. Dhaniakhali, Hooghly, West Bengal - 712402',
      coordinates: [22.9575, 88.0936] as [number, number],
      pin: '712402',
    },
  },
  contacts: {
    secretary: '+91-9143430927',
    secretaryAlt: '+91-7003510047',
    president: '+91-9051120842',
    vicePresident: '+91-9674161999',
    asstSecretary: '+91-9830830346',
    treasurer: '+91-9832274345',
    asstTreasurer: '+91-9831811474',
    governingMember: '+91-8373009887',
    helplines: [
      '+91 91434 30927',
      '+91 70035 10047',
      '+91 90511 20842',
      '+91 96741 61999',
      '+91 98322 74345',
      '+91 98308 30346',
      '+91 98318 11474',
      '+91 83730 09887',
    ],
    emails: [
      'tribeniminatifoundation@gmail.com',
      'rudra_adhya@yahoo.com',
      'bhattacharyya.debapriya571@gmail.com',
    ],
    social: {
      facebook: 'https://www.facebook.com/tribeniminatifoundation/',
      facebookPhotos: 'https://www.facebook.com/tribeniminatifoundation/photos_by',
      facebookReels: 'https://www.facebook.com/tribeniminatifoundation/reels/',
      instagram: 'https://www.instagram.com/minatifoundation/',
    },
  },
};

export const MINATI_ACRONYM_DATA = [
  {
    letter: 'M',
    word: 'Minorities',
    bengaliWord: 'সংখ্যালঘু সম্প্রদায়',
    subtitle: 'Welfare, Social Inclusion & Cultural Harmony',
    desc: 'Empowering underprivileged minority communities through equal access to livelihood training, educational resources, and social security programs.',
    badgeImg: '/tmf-assets/minati-badges/icon_m_minorities.png',
    stat: '15,000+ Reached',
  },
  {
    letter: 'I',
    word: 'Illiterate',
    bengaliWord: 'নিরক্ষরতা দূরীকরণ',
    subtitle: 'Free Remedial Coaching & Child Literacy Centers',
    desc: 'Running free coaching centers for children of daily-wage earners with textbooks, stationery, and digital audio-visual learning tools.',
    badgeImg: '/tmf-assets/minati-badges/icon_i_illiterate.png',
    stat: '6,400+ Students',
  },
  {
    letter: 'N',
    word: 'Needy',
    bengaliWord: 'অসহায় ও দরিদ্র সেবা',
    subtitle: 'Humanitarian Winter Relief, Clothing & Food Aid',
    desc: 'Distributing warm winter clothing, blankets, and essential dry ration packets to destitute families, infants, and homeless individuals.',
    badgeImg: '/tmf-assets/minati-badges/icon_n_needy.png',
    stat: '4,800+ Families',
  },
  {
    letter: 'A',
    word: 'Abused',
    bengaliWord: 'নির্যাতিত সুরক্ষা ও মর্যাদা',
    subtitle: 'Protection & Dignity for Vulnerable Women & Children',
    desc: 'Providing compassionate counseling, legal guidance, rehabilitation support, and self-defense & vocational skills for vulnerable women and children.',
    badgeImg: '/tmf-assets/minati-badges/icon_a_abused.png',
    stat: '3,200+ Assisted',
  },
  {
    letter: 'T',
    word: 'Tribal',
    bengaliWord: 'প্রান্তিক জনজাতি উন্নয়ন',
    subtitle: 'Tribal Village Healthcare, Education & Drinking Water',
    desc: 'Dedicated field camps in remote tribal settlements offering free health checkups, clean water support, and traditional craft livelihood promotion.',
    badgeImg: '/tmf-assets/minati-badges/icon_t_tribal.png',
    stat: '25+ Tribal Hamlets',
  },
  {
    letter: 'I',
    word: 'Indians',
    bengaliWord: 'সকল ভারতবাসী',
    subtitle: 'Uniting Citizens for Grassroots National Transformation',
    desc: 'A transparent, secular platform inspiring volunteers and citizens across India to act together under the motto: "...Lets go.. Do something!!"',
    badgeImg: '/tmf-assets/minati-badges/icon_i_indians.png',
    stat: 'National Devotion',
  },
];

export const MINATI_ACRONYM = MINATI_ACRONYM_DATA;

export const GOVERNING_BODY: GoverningMember[] = [
  {
    name: 'Swagata Adhya',
    designation: 'President',
    activeSince: '25-11-2013 (Founding President)',
    uinMasked: 'XXXX-XXXX-8148',
    panMasked: 'XXXXX7443K',
    contact: '+91 90511 20842',
    email: 'tribeniminatifoundation@gmail.com',
    occupation: 'Social Service',
    address: 'Purba Bardhaman, West Bengal – 713102',
    note: 'Founding President and signatory to executive statutory registrations.',
  },
  {
    name: 'Kartick Kumar Mallick',
    designation: 'Vice President',
    uinMasked: 'XXXX-XXXX-9578',
    contact: '+91 96741 61999',
    email: 'tribeniminatifoundation@gmail.com',
    occupation: 'Social Work',
    address: 'Tribeni, P.S. Mogra, District Hooghly, West Bengal – 712503',
    note: 'Executive Vice President overseeing community outreach across Mogra, Tribeni, and Chinsurah.',
  },
  {
    name: 'Rudra Prasad Adhya',
    designation: 'Secretary (Chief Functionary)',
    activeSince: '25-11-2013 (Founding Functionary)',
    uinMasked: 'XXXX-XXXX-5180',
    panMasked: 'XXXXX7616A',
    contact: '+91 91434 30927 / +91 70035 10047',
    email: 'rudra_adhya@yahoo.com',
    occupation: 'Social Development',
    address: 'Vill- Bhastara, Dist- Hooghly, West Bengal – 712303',
    note: 'Founder & Chief Functionary authorized for statutory DARPAN filings, banking execution, and NGO operations.',
  },
  {
    name: 'Joydeep Banerjee',
    designation: 'Assistant Secretary',
    uinMasked: 'XXXX-XXXX-5764',
    contact: '+91 98308 30346',
    email: 'tribeniminatifoundation@gmail.com',
    occupation: 'Professional Service',
    address: 'Bhadreswar, District Hooghly, West Bengal – 712139',
    note: 'Coordinates institutional academic collaborations, volunteer mobilizations, and youth programs.',
  },
  {
    name: 'Debapriya Bhattacharyya',
    designation: 'Treasurer',
    activeSince: '25-11-2013 (Founding Treasurer)',
    uinMasked: 'XXXX-XXXX-2141',
    panMasked: 'XXXXX8739D',
    contact: '+91 98322 74345',
    email: 'bhattacharyya.debapriya571@gmail.com',
    occupation: 'Social Accounting & Tech',
    address: 'Vill- Gopinagar, P.S. Dhaniakhali, Dist- Hooghly, West Bengal – 712402',
    note: 'Authorised custodian of foundation accounts, statutory audit books, and financial disbursements.',
  },
  {
    name: 'Sukanta Chowdhury',
    designation: 'Assistant Treasurer',
    uinMasked: 'XXXX-XXXX-7791',
    contact: '+91 98318 11474',
    email: 'tribeniminatifoundation@gmail.com',
    occupation: 'Community Work',
    address: 'Tribeni, P.S. Mogra, District Hooghly, West Bengal – 712503',
    note: 'Manages physical logistics, relief material distribution, donation receipts, and field auditing.',
  },
  {
    name: 'Rajnandini Datta',
    designation: 'Governing Body Member',
    uinMasked: 'XXXX-XXXX-7498',
    contact: '+91 83730 09887',
    email: 'tribeniminatifoundation@gmail.com',
    occupation: 'Educationist',
    address: 'Purba Bardhaman, West Bengal – 713104',
    note: 'Executive member, education curriculum mentor, and witness to statutory DARPAN affidavits.',
  },
];

export const LEGAL_DOCS: LegalDocument[] = [
  {
    id: 'society-reg',
    title: 'Certificate of Society Registration',
    category: 'Government Registration',
    fileName: 'download.pdf',
    fileUrl: '/tmf-assets/download.pdf',
    regNumber: 'SO212276 (Legacy: S/2L/12276)',
    issueDate: '25-11-2013',
    authority: 'Registrar of Societies, West Bengal',
    description: 'Official Registration Certificate issued under the West Bengal Societies Registration Act, 1961.',
  },
  {
    id: 'ngo-darpan',
    title: 'NITI Aayog NGO DARPAN Certificate',
    category: 'Government of India',
    fileName: 'TMF DARPAN.pdf',
    fileUrl: '/tmf-assets/tmf-darpan.pdf',
    regNumber: 'WB/2026/0939703',
    issueDate: 'Active 2026',
    authority: 'NITI Aayog, Govt. of India',
    description: 'Verified Unique Identification registered on the National Portal for Central Govt Grants and CSR Partnerships.',
  },
  {
    id: 'bank-passbook',
    title: 'Central Bank of India Official Account Passbook',
    category: 'Banking Credentials',
    fileName: 'Bank Account of TMF.pdf',
    fileUrl: '/tmf-assets/bank-account-of-tmf.pdf',
    regNumber: 'A/C: 5894594000',
    issueDate: 'Tarakeshwar Branch',
    authority: 'Central Bank of India (IFSC: CBIN0283860)',
    description: 'Verified Institutional Savings Bank Account record of Tribeni Minati Foundation.',
  },
  {
    id: 'pan-profile',
    title: 'Income Tax PAN Registration Profile',
    category: 'Tax Registration',
    fileName: 'AAPAT4811J_registration_profile.pdf',
    fileUrl: '/tmf-assets/AAPAT4811J_registration_profile.pdf',
    regNumber: 'PAN: AAPAT4811J',
    issueDate: 'Income Tax Dept',
    authority: 'Govt. of India Income Tax Department',
    description: 'Permanent Account Number registration dossier for Tribeni Minati Foundation.',
  },
  {
    id: 'affidavit',
    title: 'Executive Verification Affidavit',
    category: 'Legal Affidavit',
    fileName: 'AAPAT4811J_Affidavit_draft.pdf',
    fileUrl: '/tmf-assets/AAPAT4811J_Affidavit_draft.pdf',
    regNumber: 'Affidavit 2026',
    issueDate: 'January 2026',
    authority: 'Notary Public, Govt of West Bengal',
    description: 'Sworn legal affidavit of the Governing Body confirming compliance and active non-profit status.',
  },
];

export const TMF_CAMPAIGNS: TmfCampaign[] = [
  {
    id: 'minati-education-center',
    title: 'Minati Free Education Center',
    bengaliTitle: 'মিনতি অবৈতনিক শিক্ষা নিকেতন',
    tagline: 'Academic guidance, free stationery & mentoring for Class I to X',
    category: 'Education & Child Guidance',
    description:
      'A dedicated free coaching and guidance initiative running 3 days every week (Wednesday, Thursday, and Friday from 4:30 PM to 6:30 PM) for underprivileged students of Class I to X in collaboration with Jotkamal Juba Sangha.',
    imagePath: '/tmf-assets/campaign-education-center.jpeg',
    partner: 'Jotkamal Juba Sangha (জ্যোতকমল যুব সংঘ)',
    daysActive: 'Wed, Thu, Fri (4:30 PM – 6:30 PM)',
    targetBeneficiaries: 'Students Class I to X',
    highlights: [
      'Free textbooks, notebooks, mathematical instruments, and stationery kits',
      'Specialized remedial tutoring in Mathematics, Science, English, and Bengali',
      'Daily wholesome nutritional snacks for attending students',
      'Periodic talent development, drawing competitions, and STEM exposure',
    ],
  },
  {
    id: 'winter-bedding-drive',
    title: 'Infant Winter Bedding & Clothing Drive',
    bengaliTitle: 'শীতবস্ত্র ও শিশু সুরক্ষা অভিযান',
    tagline: 'Protecting newborn infants and mothers from freezing winter cold',
    category: 'Child Care & Humanitarian Relief',
    description:
      'Annual winter humanitarian intervention distributing specialized insulated infant sleep mattresses, warm woolens, thermal blankets, and baby hygiene packages across rural hamlets.',
    imagePath: '/tmf-assets/campaign-winter-bedding.jpeg',
    partner: 'Tribeni Minati Foundation Relief Corps',
    daysActive: 'Annual Winter Campaign',
    targetBeneficiaries: 'Newborns, Infants & Mothers',
    highlights: [
      'Specially designed insulated mosquito-netted baby sleep bedding sets',
      'Thermal blankets and woolen sweaters distributed directly to village mothers',
      'Infant hygiene packs containing antiseptic soaps, baby oils, and cotton cloths',
      'On-the-spot neonatal health screening by volunteer pediatric nurses',
    ],
  },
  {
    id: 'women-empowerment-sewing',
    title: 'Nari Shakti Tailoring & Skill Center',
    bengaliTitle: 'নারী শক্তি সেলাই ও স্বনির্ভরতা কেন্দ্র',
    tagline: 'Vocational sewing machine training & micro-enterprise for rural women',
    category: 'Women Empowerment & Livelihood',
    description:
      'Empowering underprivileged village women with certified tailoring, embroidery, and apparel making courses with free sewing machines and direct market linkage.',
    imagePath: '/tmf-assets/3.jpg',
    partner: 'Tribeni Women Empowerment Hub',
    daysActive: 'Daily Vocational Batches',
    targetBeneficiaries: 'Rural Women & Self-Help Groups',
    highlights: [
      'Hands-on industrial sewing and pattern design masterclasses',
      'Free sewing machine distribution to top-graduating village women',
      'Direct order sourcing for school uniforms and hospital linens',
      'Micro-credit linkage and digital banking literacy',
    ],
  },
  {
    id: 'blood-medical-camps',
    title: 'Voluntary Blood Donation & Free Eye Clinics',
    bengaliTitle: 'বিনামূল্যে স্বাস্থ্য, চক্ষু ও রক্তদান শিবির',
    tagline: 'Lifesaving emergency blood reserves & specialist clinical consultations',
    category: 'Healthcare & Emergency Support',
    description:
      'Organizing periodic voluntary blood donation camps in association with district blood banks, accompanied by free eye checkups, cataract screenings, and free medicine distribution.',
    imagePath: '/tmf-assets/campaign-blood-medical.jpeg',
    partner: 'District Health Administration & Blood Bank',
    daysActive: 'Monthly Health Saturdays',
    targetBeneficiaries: 'Rural Families & Patients in Need',
    highlights: [
      'Direct contribution to government district blood banks for thalassemia patients',
      'Free ophthalmologist eye screenings and free corrective spectacles',
      'Free distribution of essential antibiotics, vitamins, and chronic illness medications',
      'Instant blood glucose, hemoglobin, and blood pressure screening',
    ],
  },
  {
    id: 'hunger-relief-elderly',
    title: 'Annapurna Rural Nutrition & Elderly Care',
    bengaliTitle: 'অন্নপূর্ণা গ্রামীণ পুষ্টি ও বয়স্ক সহায়তা',
    tagline: 'Fresh wholesome cooked meals and nutritional packages for destitute elders',
    category: 'Hunger Relief & Geriatric Care',
    description:
      'Daily cooked midday meals, high-protein khichdi, and monthly dry ration kits for abandoned destitute elderly villagers and children.',
    imagePath: '/tmf-assets/4.jpg',
    partner: 'Minati Community Kitchens',
    daysActive: 'Daily Nutrition Service',
    targetBeneficiaries: 'Destitute Elderly & Children',
    highlights: [
      'Freshly cooked hot nutritious meals with lentils, seasonal vegetables, and rice',
      'Specialized easy-to-digest geriatric meals for bedridden elders',
      'Monthly dry ration kits with pulses, mustard oil, rice, and salt',
      'Weekly geriatric health checkups by mobile health assistants',
    ],
  },
];

export interface RealFieldPhoto {
  id: string;
  title: string;
  category: string;
  bengaliCaption: string;
  imagePath: string;
  location: string;
  dateTag: string;
}

export const REAL_FIELD_GALLERY: RealFieldPhoto[] = [
  {
    id: 'field-photo-1',
    title: 'Free Child Remedial Coaching & Book Distribution',
    category: 'Education',
    bengaliCaption: 'মিনতি অবৈতনিক শিক্ষা নিকেতনে শিশুদের খাতা, বই ও শিক্ষা উপকরণ বিতরণ',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-1.jpeg',
    location: 'Hooghly Rural Center',
    dateTag: 'Verified Field Drive',
  },
  {
    id: 'field-photo-2',
    title: 'Classroom Mentoring & Digital Audio-Visual Study',
    category: 'Education',
    bengaliCaption: 'শ্রেণিকক্ষে শিক্ষার্থীদের পাঠদান ও নিয়মিত মূল্যায়ন',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-2.jpeg',
    location: 'Tribeni Education Hub',
    dateTag: 'Verified Field Drive',
  },
  {
    id: 'field-photo-3',
    title: 'Infant Winter Bedding & Blanket Distribution Ceremony',
    category: 'Winter Relief',
    bengaliCaption: 'মা ও শিশুদের মাঝে শীতবস্ত্র, কম্বল ও বেডিং সেট বিতরণ',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-3.jpg',
    location: 'Radhanagar & Dhaniakhali',
    dateTag: 'Winter Relief Camp',
  },
  {
    id: 'field-photo-4',
    title: 'Annapurna Midday Cooked Meal & Nutrition Distribution',
    category: 'Nutrition',
    bengaliCaption: 'অসহায় গ্রামীণ শিশুদের পুষ্টিকর রান্না করা খাবার বিতরণ',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-4.jpg',
    location: 'Village Community Center',
    dateTag: 'Community Service',
  },
  {
    id: 'field-photo-5',
    title: 'Free Health Screening & Eye Diagnosis Camp',
    category: 'Healthcare',
    bengaliCaption: 'বিনামূল্যে চক্ষু পরীক্ষা ও প্রবীণদের স্বাস্থ্য শিবির',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-5.jpg',
    location: 'Mogra Health Camp',
    dateTag: 'Medical Outreaches',
  },
  {
    id: 'field-photo-6',
    title: 'Community Gathering for Society Welfare & Awareness',
    category: 'Community',
    bengaliCaption: 'সমাজকল্যাণ ও সচেতনতা বিষয়ক উন্মুক্ত সমাবেশ',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-6.jpeg',
    location: 'Hooghly District',
    dateTag: 'Outreach Drive',
  },
  {
    id: 'field-photo-7',
    title: 'Winter Warmth Kits Handover to Rural Mothers',
    category: 'Winter Relief',
    bengaliCaption: 'গ্রামীণ মা ও নবজাতকদের সুরক্ষিত শীতবস্ত্র প্রদান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-7.jpeg',
    location: 'Dhaniakhali Rural',
    dateTag: 'Winter Relief Drive',
  },
  {
    id: 'field-photo-8',
    title: 'Foundation Coaching Classroom in Session',
    category: 'Education',
    bengaliCaption: 'মিনতি পাঠশালায় ক্লাসের ফাঁকে হাসিমুখে শিক্ষার্থীরা',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-8.jpeg',
    location: 'Jotkamal Youth Sangha',
    dateTag: 'Weekly Coaching',
  },
  {
    id: 'field-photo-9',
    title: 'Stationery & Educational Kit Handover',
    category: 'Education',
    bengaliCaption: 'ছাত্র-ছাত্রীদের পাঠ্যবই ও জ্যামিতি বক্স উপহার প্রদান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-9.jpeg',
    location: 'Tribeni Center',
    dateTag: 'Child Welfare',
  },
  {
    id: 'field-photo-10',
    title: 'Health Checkup & Prescription Support Camp',
    category: 'Healthcare',
    bengaliCaption: 'চিকিৎসকদের দ্বারা প্রেসক্রিপশন ও বিনামূল্যে ওষুধ বিতরণ',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-10.jpeg',
    location: 'Rural Outreaches',
    dateTag: 'Healthcare Service',
  },
  {
    id: 'field-photo-11',
    title: 'Volunteers Distributing Warm Woolen Blankets',
    category: 'Winter Relief',
    bengaliCaption: 'স্বেচ্ছাসেবকদের মাধ্যমে বয়স্কদের কম্বল প্রদান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-11.jpeg',
    location: 'Tarakeswar Sector',
    dateTag: 'Winter Drive',
  },
  {
    id: 'field-photo-12',
    title: 'Women Empowerment & Skill Handloom Session',
    category: 'Livelihood',
    bengaliCaption: 'স্বাবলম্বন প্রকল্পের আওতায় গ্রামীণ মহিলাদের হাতের কাজ',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-12.jpeg',
    location: 'Swabhiman Center',
    dateTag: 'Empowerment',
  },
  {
    id: 'field-photo-13',
    title: 'Child Nutrition & Milk Distribution Drive',
    category: 'Nutrition',
    bengaliCaption: 'শিশুদের সুষম পুষ্টি ও খাদ্য সহায়তা প্রদান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-13.jpeg',
    location: 'Tribeni Ward',
    dateTag: 'Nutrition Camp',
  },
  {
    id: 'field-photo-14',
    title: 'Village Outreach & Relief Material Logistics',
    category: 'Community',
    bengaliCaption: 'ত্রাণ সামগ্রী বণ্টন ও গ্রামভিত্তিক স্বেচ্ছাসেবক কার্যক্রম',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-14.jpeg',
    location: 'Gopinagar Belt',
    dateTag: 'Relief Logistics',
  },
  {
    id: 'field-photo-15',
    title: 'Educational Drawing & Creative Workshop',
    category: 'Education',
    bengaliCaption: 'শিক্ষার্থীদের অঙ্কন ও মেধা বিকাশ কর্মশালা',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-15.jpeg',
    location: 'Coaching Class',
    dateTag: 'Talent Camp',
  },
  {
    id: 'field-photo-16',
    title: 'Voluntary Blood Donation Camp In Action',
    category: 'Healthcare',
    bengaliCaption: 'থ্যালাসেমিয়া রোগীদের জন্য রক্তদান শিবির',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-16.jpeg',
    location: 'District Health Wing',
    dateTag: 'Blood Donation',
  },
  {
    id: 'field-photo-17',
    title: 'Elderly Destitute Support & Care Handover',
    category: 'Needy',
    bengaliCaption: 'অসহায় বয়স্ক নাগরিকদের সাহায্য ও শ্রদ্ধাঞ্জলি',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-17.jpeg',
    location: 'Hooghly Villages',
    dateTag: 'Elderly Care',
  },
  {
    id: 'field-photo-18',
    title: 'Community Ration & Nutrition Package Distribution',
    category: 'Nutrition',
    bengaliCaption: 'দরিদ্র পরিবারের মাঝে চাল, ডাল ও তেলের প্যাকেট প্রদান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-18.jpeg',
    location: 'Tribeni Block',
    dateTag: 'Ration Aid',
  },
  {
    id: 'field-photo-19',
    title: 'Infant Sleeping Wrap Demonstration for Mothers',
    category: 'Child Care',
    bengaliCaption: 'মশারিযুক্ত বেডিং ও শিশুর স্বাস্থ্য সচেতনতা প্রদর্শনী',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-19.jpeg',
    location: 'Mother & Child Care',
    dateTag: 'Neonatal Health',
  },
  {
    id: 'field-photo-20',
    title: 'Annual Foundation Day & Community Recognition',
    category: 'Community',
    bengaliCaption: 'ফাউন্ডেশনের বার্ষিক প্রতিষ্ঠা দিবস ও সমাজসেবীদের সংবর্ধনা',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-20.jpeg',
    location: 'Corporate Office',
    dateTag: 'Foundation Day',
  },
  {
    id: 'field-photo-21',
    title: 'Rural Children Receiving School Bags & Slates',
    category: 'Education',
    bengaliCaption: 'স্কুল ব্যাগ ও নতুন খাতা পেয়ে শিশুদের মুখের অমূল্য হাসি',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-21.jpeg',
    location: 'Minati Pathshala',
    dateTag: 'Free Education',
  },
  {
    id: 'field-photo-22',
    title: 'Winter Blanket Camp in Tribal Settlements',
    category: 'Tribal',
    bengaliCaption: 'প্রান্তিক আদিবাসী পল্লীতে শীতবস্ত্র বিতরণ অভিযান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-22.jpeg',
    location: 'Tribal Settlement',
    dateTag: 'Tribal Welfare',
  },
  {
    id: 'field-photo-23',
    title: 'Emergency Medical First Aid & Medicine Drive',
    category: 'Healthcare',
    bengaliCaption: 'জরুরি প্রাথমিক চিকিৎসা ও প্রয়োজনীয় ওষুধ পৌঁছে দেওয়া',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-23.jpeg',
    location: 'Rural First Aid Unit',
    dateTag: 'Emergency Medical',
  },
  {
    id: 'field-photo-24',
    title: 'Youth Volunteer Brigade Mobilization',
    category: 'Community',
    bengaliCaption: 'ত্রিবেনী মিনতি ফাউন্ডেশনের নিবেদিত যুব স্বেচ্ছাসেবক বাহিনী',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-24.jpeg',
    location: 'Youth Center',
    dateTag: 'Youth Brigade',
  },
  {
    id: 'field-photo-25',
    title: 'Mother Care Pack & Maternal Nutrition Distribution',
    category: 'Child Care',
    bengaliCaption: 'প্রসূতি মায়েদের পুষ্টিকর খাদ্য ও সুরক্ষাসামগ্রী প্রদান',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-25.jpeg',
    location: 'Maternal Wing',
    dateTag: 'Maternal Care',
  },
  {
    id: 'field-photo-26',
    title: 'Smiling Children of Minati Foundation Coaching',
    category: 'Education',
    bengaliCaption: '"...your smile, our reward..." — শিশুদের নির্মল হাসি',
    imagePath: '/tmf-assets/real-field-photos/tmf-field-26.jpeg',
    location: 'Hooghly Learning Center',
    dateTag: 'Our Pride',
  },
];
