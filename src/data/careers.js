// Verified career data with accurate timelines, costs, and salaries based on Statistics Canada, Job Bank, and Indeed Canada
export const careers = [
  {
    id: 'teacher',
    title: 'Teacher',
    icon: '🧑‍🏫',
    description: 'Guide and educate students in Canadian schools.',
    totalTime: '5-6 years',
    totalCost: '$30k–$60k CAD',
    salaryAfter5Years: '$75k–$90k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete Canadian high school education.' },
      { id: 2, title: 'Bachelor\'s in Education', duration: '4 years', cost: '$25k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Bachelor of Arts/Science in Education (varies by province).' },
      { id: 3, title: 'Teacher Certification', duration: '1 year', cost: '$5k–$10k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Provincial teaching certification.' },
      { id: 4, title: 'First Teaching Job', duration: '1 year', cost: '$0', salary_after: '$56k–$65k', requirements: 'Certification', type: 'work', details: 'Entry-level teacher position.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$75k–$90k', requirements: 'First Job', type: 'growth', details: 'Build expertise and increase salary.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$95k–$115k', requirements: 'Experience', type: 'growth', details: 'Department head, principal, or specialist.' }
    ]
  },
  {
    id: 'developer',
    title: 'Software Developer',
    icon: '💻',
    description: 'Build and maintain software applications in Canada.',
    totalTime: '3-5 years',
    totalCost: '$10k–$50k CAD',
    salaryAfter5Years: '$100k–$140k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in CS or Bootcamp', duration: '4 years or 3-6 months', cost: '$10k–$50k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Computer Science degree or coding bootcamp.' },
      { id: 3, title: 'Build Portfolio', duration: '3-6 months', cost: '$0', salary_after: '$0', requirements: 'During/After Education', type: 'work', details: 'Create projects to demonstrate skills.' },
      { id: 4, title: 'First Dev Job', duration: '1 year', cost: '$0', salary_after: '$70k–$90k', requirements: 'Education/Portfolio', type: 'work', details: 'Junior developer position.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$100k–$140k', requirements: 'First Job', type: 'growth', details: 'Mid-level developer role.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$130k–$180k', requirements: 'Experience', type: 'growth', details: 'Senior dev, tech lead, or architect.' }
    ]
  },
  {
    id: 'electrician',
    title: 'Electrician',
    icon: '🔌',
    description: 'Install and maintain electrical systems in Canada.',
    totalTime: '5 years',
    totalCost: '$1k–$3k CAD',
    salaryAfter5Years: '$75k–$95k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Electrical Apprenticeship', duration: '4-5 years', cost: '$0', salary_after: '$45k–$55k', requirements: 'High School', type: 'work', details: 'Paid apprenticeship (~8000 hours) through provincial trade boards.' },
      { id: 3, title: 'Journeyman License', duration: '6 months', cost: '$1k–$2k', salary_after: '$0', requirements: 'Apprenticeship', type: 'school', details: 'Pass provincial journeyman exam.' },
      { id: 4, title: 'Licensed Electrician', duration: '1 year', cost: '$0', salary_after: '$65k–$80k', requirements: 'License', type: 'work', details: 'Work as licensed electrician.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$75k–$95k', requirements: 'Licensed Work', type: 'growth', details: 'Build client base and experience.' },
      { id: 6, title: 'Master Electrician/Business', duration: 'Ongoing', cost: '$0–$3k', salary_after: '$90k–$130k', requirements: 'Experience', type: 'growth', details: 'Master electrician or own business.' }
    ]
  },
  {
    id: 'nurse',
    title: 'Nurse (RN)',
    icon: '⚕️',
    description: 'Provide patient care and healthcare support in Canada.',
    totalTime: '4-5 years',
    totalCost: '$25k–$60k CAD',
    salaryAfter5Years: '$85k–$105k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Nursing (BScN)', duration: '4 years', cost: '$25k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Bachelor of Science in Nursing.' },
      { id: 3, title: 'NCLEX-RN Exam', duration: '3-6 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'BScN', type: 'school', details: 'Pass nursing licensing exam through provincial board.' },
      { id: 4, title: 'First Nursing Job', duration: '1 year', cost: '$0', salary_after: '$65k–$78k', requirements: 'RN License', type: 'work', details: 'Hospital or clinic position.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$85k–$105k', requirements: 'First Job', type: 'growth', details: 'Gain specialization.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$15k', salary_after: '$110k–$140k', requirements: 'Experience', type: 'growth', details: 'Nurse practitioner or manager.' }
    ]
  },
  {
    id: 'lawyer',
    title: 'Lawyer',
    icon: '⚖️',
    description: 'Provide legal advice and represent clients in Canada.',
    totalTime: '7 years',
    totalCost: '$80k–$180k CAD',
    salaryAfter5Years: '$80k–$110k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$20k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Any bachelor\'s degree from Canadian university.' },
      { id: 3, title: 'Law School', duration: '3 years', cost: '$30k–$100k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Juris Doctor (JD) from accredited Canadian law school.' },
      { id: 4, title: 'Bar Exam & Articling', duration: '1-2 years', cost: '$2k–$5k', salary_after: '$0', requirements: 'Law School', type: 'school', details: 'Provincial bar exam (articling program varies by province).' },
      { id: 5, title: 'First Legal Job', duration: '2 years', cost: '$0', salary_after: '$80k–$110k', requirements: 'Bar License', type: 'work', details: 'Associate at law firm.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$130k–$200k+', requirements: 'Experience', type: 'growth', details: 'Partner, judge, or own firm.' }
    ]
  },
  {
    id: 'plumber',
    title: 'Plumber',
    icon: '🔧',
    description: 'Install and repair plumbing systems in Canada.',
    totalTime: '5 years',
    totalCost: '$500–1.5k CAD',
    salaryAfter5Years: '$80k–$100k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Plumbing Apprenticeship', duration: '4-5 years', cost: '$0', salary_after: '$40k–50k', requirements: 'High School', type: 'work', details: 'Paid apprenticeship (~8000 hours) through provincial trade boards.' },
      { id: 3, title: 'Journeyman License', duration: '6 months', cost: '$500–1k', salary_after: '$0', requirements: 'Apprenticeship', type: 'school', details: 'Pass provincial licensing exam.' },
      { id: 4, title: 'Licensed Plumber', duration: '1 year', cost: '$0', salary_after: '$65k–80k', requirements: 'License', type: 'work', details: 'Work as licensed plumber.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$80k–100k', requirements: 'Licensed Work', type: 'growth', details: 'Build client base.' },
      { id: 6, title: 'Master Plumber/Business', duration: 'Ongoing', cost: '$0–3k', salary_after: '$100k–140k', requirements: 'Experience', type: 'growth', details: 'Master plumber or business owner.' }
    ]
  },
  {
    id: 'hvac-technician',
    title: 'HVAC Technician',
    icon: '❄️',
    description: 'Install and repair heating and cooling systems.',
    totalTime: '4-5 years',
    totalCost: '$500–$2.5k',
    salaryAfter5Years: '$50k–$65k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'HVAC Training Program', duration: '6-12 months', cost: '$500–$2.5k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Trade school HVAC certification.' },
      { id: 3, title: 'Apprenticeship', duration: '3-4 years', cost: '$0', salary_after: '$35k–$45k', requirements: 'Training', type: 'work', details: 'Paid hands-on training.' },
      { id: 4, title: 'EPA & License Cert', duration: '6 months', cost: '$500–$1k', salary_after: '$0', requirements: 'Apprenticeship', type: 'school', details: 'EPA refrigerant cert.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$50k–$65k', requirements: 'License', type: 'growth', details: 'Specialist technician.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$10k', salary_after: '$70k–$95k', requirements: 'Experience', type: 'growth', details: 'Supervisor or business owner.' }
    ]
  },
  {
    id: 'web-developer',
    title: 'Web Developer',
    icon: '🌐',
    description: 'Create and maintain websites.',
    totalTime: '4-6 years',
    totalCost: '$10k–$60k',
    salaryAfter5Years: '$85k–$120k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Computer Science or Bootcamp', duration: '4 years or 3-6 months', cost: '$10k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Degree or coding bootcamp.' },
      { id: 3, title: 'Build Portfolio', duration: '3-6 months', cost: '$0', salary_after: '$0', requirements: 'Training', type: 'work', details: 'Create web projects.' },
      { id: 4, title: 'First Web Dev Job', duration: '1 year', cost: '$0', salary_after: '$58k–$75k', requirements: 'Portfolio', type: 'work', details: 'Junior web developer.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$85k–$120k', requirements: 'First Job', type: 'growth', details: 'Full-stack developer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$130k–$180k', requirements: 'Experience', type: 'growth', details: 'Lead dev or tech director.' }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: '📊',
    description: 'Analyze data to drive business decisions in Canada.',
    totalTime: '6 years',
    totalCost: '$30k–60k CAD',
    salaryAfter5Years: '$135k–$180k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Math/CS', duration: '4 years', cost: '$30k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Math, computer science, or statistics.' },
      { id: 3, title: 'Master\'s Preferred', duration: '2 years (optional)', cost: '$0–30k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Master\'s in Data Science or Analytics.' },
      { id: 4, title: 'First Data Science Role', duration: '1 year', cost: '$0', salary_after: '$90k–120k', requirements: 'Master\'s Preferred', type: 'work', details: 'Junior data scientist.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$135k–180k', requirements: 'First Job', type: 'growth', details: 'Senior data scientist.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$170k–260k+', requirements: 'Experience', type: 'growth', details: 'ML engineer or data lead.' }
    ]
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    icon: '🎨',
    description: 'Create visual content for Canadian brands and media.',
    totalTime: '4 years',
    totalCost: '$15k–40k CAD',
    salaryAfter5Years: '$65k–$85k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Design Degree or Bootcamp', duration: '2-4 years', cost: '$15k–40k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Design school or bootcamp.' },
      { id: 3, title: 'Build Portfolio', duration: '6 months', cost: '$0–3k', salary_after: '$0', requirements: 'Training', type: 'work', details: 'Create design projects.' },
      { id: 4, title: 'First Design Job', duration: '1 year', cost: '$0', salary_after: '$50k–62k', requirements: 'Portfolio', type: 'work', details: 'Graphic designer role.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$65k–85k', requirements: 'First Job', type: 'growth', details: 'Senior designer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$85k–120k', requirements: 'Experience', type: 'growth', details: 'Creative director or freelancer.' }
    ]
  },
  {
    id: 'accountant-cpa',
    title: 'Accountant (CPA)',
    icon: '💼',
    description: 'Manage financial records and tax planning in Canada.',
    totalTime: '5-7 years',
    totalCost: '$30k–60k CAD',
    salaryAfter5Years: '$80k–$105k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Accounting', duration: '4 years', cost: '$30k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Accounting degree from Canadian university.' },
      { id: 3, title: 'Work Experience', duration: '1-2 years', cost: '$0', salary_after: '$60k–75k', requirements: 'Bachelor\'s', type: 'work', details: 'Gain accounting experience.' },
      { id: 4, title: 'CPA Exam', duration: '6-12 months', cost: '$2k–4k', salary_after: '$0', requirements: 'Work Exp', type: 'school', details: 'Pass CPA (Canadian Professional Accountant) exam.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$80k–105k', requirements: 'CPA', type: 'growth', details: 'Senior accountant.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$110k–155k', requirements: 'Experience', type: 'growth', details: 'Manager or partner.' }
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    icon: '📋',
    description: 'Oversee projects and manage teams in Canada.',
    totalTime: '4-8 years',
    totalCost: '$20k–60k CAD',
    salaryAfter5Years: '$95k–$130k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$20k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Business or engineering degree.' },
      { id: 3, title: 'Entry-Level Role', duration: '2-3 years', cost: '$0', salary_after: '$55k–70k', requirements: 'Bachelor\'s', type: 'work', details: 'Coordinator or assistant role.' },
      { id: 4, title: 'PMP/CAPM Certification', duration: '6-12 months', cost: '$1.5k–4k', salary_after: '$0', requirements: '3+ Years Exp', type: 'school', details: 'Project Management Professional certification.' },
      { id: 5, title: 'Project Manager', duration: '3-5 years', cost: '$0', salary_after: '$95k–130k', requirements: 'PMP', type: 'growth', details: 'Lead projects.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$130k–180k', requirements: 'Experience', type: 'growth', details: 'Program manager or director.' }
    ]
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    icon: '📢',
    description: 'Plan and execute marketing strategies in Canada.',
    totalTime: '4-8 years',
    totalCost: '$30k–60k CAD',
    salaryAfter5Years: '$95k–$130k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Marketing/Business', duration: '4 years', cost: '$30k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Marketing or business degree.' },
      { id: 3, title: 'Marketing Coordinator', duration: '2-3 years', cost: '$0', salary_after: '$48k–60k', requirements: 'Bachelor\'s', type: 'work', details: 'Entry-level role.' },
      { id: 4, title: 'Senior Marketing Role', duration: '2-3 years', cost: '$0', salary_after: '$68k–88k', requirements: 'Coordinator', type: 'work', details: 'Specialist or supervisor.' },
      { id: 5, title: 'Marketing Manager', duration: '2-3 years', cost: '$0', salary_after: '$95k–130k', requirements: 'Senior Role', type: 'growth', details: 'Lead marketing team.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$140k–200k', requirements: 'Manager Exp', type: 'growth', details: 'Director or CMO.' }
    ]
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    icon: '💰',
    description: 'Close sales deals and manage accounts in Canada.',
    totalTime: '2-4 years',
    totalCost: '$2k–15k CAD',
    salaryAfter5Years: '$120k–$170k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Some College/Sales Training', duration: '1-2 years', cost: '$2k–15k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Sales training or courses.' },
      { id: 3, title: 'Sales Representative', duration: '1-2 years', cost: '$0', salary_after: '$50k–75k', requirements: 'Training', type: 'work', details: 'Entry-level sales position.' },
      { id: 4, title: 'Account Executive', duration: '2-3 years', cost: '$0', salary_after: '$85k–120k', requirements: 'Rep', type: 'work', details: 'Manage larger accounts.' },
      { id: 5, title: 'Senior/Leadership Sales', duration: '3-5 years', cost: '$0', salary_after: '$120k–170k', requirements: 'AE', type: 'growth', details: 'Sales manager.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$150k–280k+', requirements: 'Experience', type: 'growth', details: 'VP of sales or director.' }
    ]
  },
  {
    id: 'real-estate-agent',
    title: 'Real Estate Agent',
    icon: '🏠',
    description: 'Buy, sell, and manage properties in Canada.',
    totalTime: '1-2 years',
    totalCost: '$500–3k CAD',
    salaryAfter5Years: '$85k–$140k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Real Estate License Course', duration: '2-4 months', cost: '$400–1.2k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Provincial licensing course.' },
      { id: 3, title: 'License Exam', duration: '1 month', cost: '$400–800', salary_after: '$0', requirements: 'Course', type: 'school', details: 'Pass provincial exam.' },
      { id: 4, title: 'Real Estate Agent', duration: '1 year', cost: '$800–1.5k', salary_after: '$40k–75k', requirements: 'License', type: 'work', details: 'Start building client base.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$85k–140k', requirements: 'Agent', type: 'growth', details: 'Established agent.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–8k', salary_after: '$175k–330k+', requirements: 'Experience', type: 'growth', details: 'Broker or team lead.' }
    ]
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur/Business Owner',
    icon: '💡',
    description: 'Start and run your own business in Canada.',
    totalTime: '3-10 years',
    totalCost: '$5k–400k+ CAD',
    salaryAfter5Years: '$60k–$240k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Foundational education.' },
      { id: 2, title: 'Industry Experience', duration: '2-4 years', cost: '$5k–40k', salary_after: '$0', requirements: 'High School', type: 'work', details: 'Work in relevant field.' },
      { id: 3, title: 'Business Planning', duration: '6-12 months', cost: '$500–8k', salary_after: '$0', requirements: 'Experience', type: 'work', details: 'Develop and validate idea.' },
      { id: 4, title: 'Launch Business', duration: '1-2 years', cost: '$3k–80k+', salary_after: '$30k–100k', requirements: 'Plan', type: 'work', details: 'Begin operations.' },
      { id: 5, title: 'Growth Phase', duration: '2-5 years', cost: '$0–40k', salary_after: '$60k–240k', requirements: 'Launch', type: 'growth', details: 'Scale and expand.' },
      { id: 6, title: 'Established Business', duration: 'Ongoing', cost: '$0', salary_after: '$120k+', requirements: 'Growth', type: 'growth', details: 'Profitable operations.' }
    ]
  },
  {
    id: 'carpenter',
    title: 'Carpenter',
    icon: '🪚',
    description: 'Build and repair structures and furniture in Canada.',
    totalTime: '5 years',
    totalCost: '$500–1.8k CAD',
    salaryAfter5Years: '$62k–$82k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Carpentry Apprenticeship', duration: '3-4 years', cost: '$0–1.5k', salary_after: '$32k–42k', requirements: 'High School', type: 'work', details: 'Paid apprenticeship (~8000 hours) through provincial trade board.' },
      { id: 3, title: 'Journeyman Card', duration: '1 year', cost: '$800–2k', salary_after: '$0', requirements: 'Apprenticeship', type: 'school', details: 'Journeyman certification.' },
      { id: 4, title: 'Licensed Carpenter', duration: '1 year', cost: '$0', salary_after: '$42k–54k', requirements: 'Card', type: 'work', details: 'Licensed carpenter job.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$62k–82k', requirements: 'Licensed', type: 'growth', details: 'Master carpenter.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–15k', salary_after: '$90k–135k', requirements: 'Experience', type: 'growth', details: 'Contractor or business owner.' }
    ]
  },
  {
    id: 'mechanic',
    title: 'Automotive Mechanic',
    icon: '🔧',
    description: 'Repair and maintain vehicles in Canada.',
    totalTime: '3-4 years',
    totalCost: '$500–1.8k CAD',
    salaryAfter5Years: '$60k–$80k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Trade School', duration: '1-2 years', cost: '$500–1.5k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Automotive technician program.' },
      { id: 3, title: 'Apprenticeship', duration: '2-3 years', cost: '$0', salary_after: '$35k–48k', requirements: 'Trade School', type: 'work', details: 'Paid training period.' },
      { id: 4, title: 'ASE/Provincial Certification', duration: '6 months', cost: '$500–1k', salary_after: '$0', requirements: 'Apprenticeship', type: 'school', details: 'Industry certification.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$60k–80k', requirements: 'ASE', type: 'growth', details: 'Master technician.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–8k', salary_after: '$85k–125k', requirements: 'Experience', type: 'growth', details: 'Shop owner or manager.' }
    ]
  },
  {
    id: 'dentist',
    title: 'Dentist (DDS)',
    icon: '🦷',
    description: 'Provide dental care and treatment in Canada.',
    totalTime: '10-12 years',
    totalCost: '$80k–220k CAD',
    salaryAfter5Years: '$170k–$210k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus required.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$15k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-dental requirements.' },
      { id: 3, title: 'Dental School', duration: '4 years', cost: '$65k–160k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Doctor of Dental Surgery (DDS) from Canadian school.' },
      { id: 4, title: 'Licensure Exams', duration: '6 months', cost: '$1.5k–4k', salary_after: '$0', requirements: 'Dental School', type: 'school', details: 'National Dental Licensing exams.' },
      { id: 5, title: 'First Dental Position', duration: '1-2 years', cost: '$0', salary_after: '$170k–210k', requirements: 'License', type: 'work', details: 'Associate dentist.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–40k', salary_after: '$230k–320k+', requirements: 'Experience', type: 'growth', details: 'Specialist or practice owner.' }
    ]
  },
  {
    id: 'veterinarian',
    title: 'Veterinarian',
    icon: '🐾',
    description: 'Provide medical care for animals in Canada.',
    totalTime: '8-10 years',
    totalCost: '$60k–180k CAD',
    salaryAfter5Years: '$105k–$135k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$15k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-vet requirements.' },
      { id: 3, title: 'Veterinary School', duration: '4 years', cost: '$45k–120k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Doctor of Veterinary Medicine (DVM).' },
      { id: 4, title: 'Licensing Exams', duration: '6 months', cost: '$1.5k–4k', salary_after: '$0', requirements: 'Vet School', type: 'school', details: 'Veterinary licensing.' },
      { id: 5, title: 'First Veterinary Position', duration: '2 years', cost: '$0', salary_after: '$105k–135k', requirements: 'License', type: 'work', details: 'Clinic or hospital.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–35k', salary_after: '$155k–210k+', requirements: 'Experience', type: 'growth', details: 'Specialist or practice owner.' }
    ]
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    icon: '💊',
    description: 'Dispense medications and provide patient advice in Canada.',
    totalTime: '8-10 years',
    totalCost: '$75k–180k CAD',
    salaryAfter5Years: '$150k–$175k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$15k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-pharmacy requirements.' },
      { id: 3, title: 'Doctor of Pharmacy (PharmD)', duration: '4 years', cost: '$60k–120k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'PharmD degree from Canadian school.' },
      { id: 4, title: 'Licensing Exam', duration: '6 months', cost: '$1.5k–4k', salary_after: '$0', requirements: 'PharmD', type: 'school', details: 'PEBC exam (Pharmacists Examining Board of Canada).' },
      { id: 5, title: 'First Pharmacist Position', duration: '2 years', cost: '$0', salary_after: '$150k–175k', requirements: 'License', type: 'work', details: 'Hospital or retail pharmacy.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$180k–230k+', requirements: 'Experience', type: 'growth', details: 'Specialist pharmacist or manager.' }
    ]
  },
  {
    id: 'physical-therapist',
    title: 'Physical Therapist',
    icon: '🏥',
    description: 'Help patients recover from injury or illness in Canada.',
    totalTime: '7-8 years',
    totalCost: '$60k–160k CAD',
    salaryAfter5Years: '$105k–$130k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$15k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-PT requirements.' },
      { id: 3, title: 'Master\'s in PT', duration: '2-3 years', cost: '$45k–100k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Master of Physical Therapy.' },
      { id: 4, title: 'Licensing Exam', duration: '6 months', cost: '$1.5k–4k', salary_after: '$0', requirements: 'Master\'s', type: 'school', details: 'Provincial PT licensing exam.' },
      { id: 5, title: 'First PT Position', duration: '2 years', cost: '$0', salary_after: '$105k–130k', requirements: 'License', type: 'work', details: 'Clinic or hospital.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–15k', salary_after: '$140k–185k+', requirements: 'Experience', type: 'growth', details: 'Specialist or own practice.' }
    ]
  },
  {
    id: 'occupational-therapist',
    title: 'Occupational Therapist',
    icon: '🎯',
    description: 'Help patients regain independence in Canada.',
    totalTime: '6-7 years',
    totalCost: '$45k–130k CAD',
    salaryAfter5Years: '$85k–$105k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$15k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-OT requirements.' },
      { id: 3, title: 'Master\'s in OT', duration: '2-3 years', cost: '$30k–70k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Occupational therapy degree.' },
      { id: 4, title: 'Certification Exam', duration: '6 months', cost: '$1.5k–4k', salary_after: '$0', requirements: 'Master\'s', type: 'school', details: 'CAOT/OBC exam (Canadian Occupational Therapy).' },
      { id: 5, title: 'First OT Position', duration: '2 years', cost: '$0', salary_after: '$85k–105k', requirements: 'License', type: 'work', details: 'Clinic or hospital.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–8k', salary_after: '$115k–155k+', requirements: 'Experience', type: 'growth', details: 'Manager or specialist.' }
    ]
  },
  {
    id: 'registered-nurse-spec',
    title: 'Registered Nurse (Specialization)',
    icon: '👩‍⚕️',
    description: 'Specialized nursing in ICU, ER, or oncology in Canada.',
    totalTime: '5-6 years',
    totalCost: '$25k–60k CAD',
    salaryAfter5Years: '$95k–$125k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Nursing (BScN)', duration: '4 years', cost: '$25k–60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Bachelor of Science in Nursing.' },
      { id: 3, title: 'NCLEX-RN Exam', duration: '3-6 months', cost: '$1k–3k', salary_after: '$0', requirements: 'BScN', type: 'school', details: 'Nursing licensing exam.' },
      { id: 4, title: 'Nursing Position', duration: '1-2 years', cost: '$0', salary_after: '$70k–90k', requirements: 'RN License', type: 'work', details: 'General nursing role.' },
      { id: 5, title: 'Specialty Certification', duration: '1-2 years', cost: '$1k–2.5k', salary_after: '$95k–125k', requirements: 'Nursing Exp', type: 'growth', details: 'Specialized nursing cert.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–25k', salary_after: '$140k–190k+', requirements: 'Specialist', type: 'growth', details: 'Nurse manager or practitioner.' }
    ]
  },
  {
    id: 'police-officer',
    title: 'Police Officer',
    icon: '👮',
    description: 'Enforce laws and protect communities in Canada.',
    totalTime: '4-6 years',
    totalCost: '$8k–25k CAD',
    salaryAfter5Years: '$75k–$98k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Police Academy', duration: '3-6 months', cost: '$4k–12k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Provincial police training academy.' },
      { id: 3, title: 'Certification', duration: '1-2 months', cost: '$800–2.5k', salary_after: '$0', requirements: 'Academy', type: 'school', details: 'Police certification.' },
      { id: 4, title: 'Probationary Officer', duration: '1-2 years', cost: '$0', salary_after: '$58k–72k', requirements: 'Certification', type: 'work', details: 'Entry-level police officer.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$75k–98k', requirements: 'Probation', type: 'growth', details: 'Experienced officer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–8k', salary_after: '$105k–155k+', requirements: 'Experience', type: 'growth', details: 'Detective or captain.' }
    ]
  },
  {
    id: 'firefighter',
    title: 'Firefighter',
    icon: '🚒',
    description: 'Respond to emergencies and fire calls.',
    totalTime: '4-6 years',
    totalCost: '$5k–$20k',
    salaryAfter5Years: '$55k–$75k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Fire Academy', duration: '3-4 months', cost: '$5k–$10k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Fire training academy.' },
      { id: 3, title: 'Certification', duration: '1-2 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'Academy', type: 'school', details: 'Fire certification.' },
      { id: 4, title: 'Probationary Firefighter', duration: '1-2 years', cost: '$0', salary_after: '$45k–$55k', requirements: 'Cert', type: 'work', details: 'Entry-level firefighter.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$55k–$75k', requirements: 'Probation', type: 'growth', details: 'Experienced firefighter.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$10k', salary_after: '$80k–$110k+', requirements: 'Experience', type: 'growth', details: 'Captain or chief.' }
    ]
  },
  {
    id: 'truck-driver',
    title: 'Truck Driver (DZ)',
    icon: '🚚',
    description: 'Transport goods across long distances in Canada.',
    totalTime: '1-2 years',
    totalCost: '$1.5k–6k CAD',
    salaryAfter5Years: '$65k–90k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'DZ Training', duration: '3-6 weeks', cost: '$1.5k–6k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Commercial driver license training (DZ class in Canada).' },
      { id: 3, title: 'Get DZ License', duration: '1-2 weeks', cost: '$0', salary_after: '$0', requirements: 'Training', type: 'school', details: 'Pass provincial DZ exam.' },
      { id: 4, title: 'First Truck Driving Job', duration: '1 year', cost: '$0', salary_after: '$50k–70k', requirements: 'DZ', type: 'work', details: 'Long-haul or local routes.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$65k–90k', requirements: 'First Job', type: 'growth', details: 'Experienced driver.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–40k', salary_after: '$90k–130k+', requirements: 'Experience', type: 'growth', details: 'Owner-operator.' }
    ]
  },
  {
    id: 'pilot',
    title: 'Commercial Pilot',
    icon: '✈️',
    description: 'Operate aircraft and transport passengers in Canada.',
    totalTime: '4-8 years',
    totalCost: '$90k–230k CAD',
    salaryAfter5Years: '$95k–$125k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Flight Training', duration: '1-2 years', cost: '$75k–140k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Transport Canada certified flight program.' },
      { id: 3, title: 'Pilot Licenses', duration: '6-12 months', cost: '$9k–18k', salary_after: '$0', requirements: 'Flight Training', type: 'school', details: 'Commercial and instrument ratings.' },
      { id: 4, title: 'Flight Hours', duration: '1-2 years', cost: '$0', salary_after: '$45k–60k', requirements: 'Licenses', type: 'work', details: 'Build required flight hours.' },
      { id: 5, title: 'Regional Airline Position', duration: '3-5 years', cost: '$0', salary_after: '$95k–125k', requirements: 'Hours', type: 'work', details: 'Regional airline captain.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$140k–240k+', requirements: 'Experience', type: 'growth', details: 'Major airline or own charter.' }
    ]
  },
  {
    id: 'chef',
    title: 'Chef/Culinary Professional',
    icon: '👨‍🍳',
    description: 'Prepare and cook food in Canadian restaurants.',
    totalTime: '6-8 years',
    totalCost: '$4k–25k CAD',
    salaryAfter5Years: '$58k–$85k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Culinary School', duration: '2 years', cost: '$4k–18k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Professional cooking degree.' },
      { id: 3, title: 'Apprenticeship', duration: '1-2 years', cost: '$0–4k', salary_after: '$32k–42k', requirements: 'Culinary School', type: 'work', details: 'Work under experienced chefs.' },
      { id: 4, title: 'Line Cook', duration: '1-2 years', cost: '$0', salary_after: '$38k–50k', requirements: 'Apprenticeship', type: 'work', details: 'Kitchen station leader.' },
      { id: 5, title: 'Sous Chef', duration: '2-3 years', cost: '$0', salary_after: '$58k–85k', requirements: 'Line Cook', type: 'growth', details: 'Assistant head chef.' },
      { id: 6, title: 'Executive Chef', duration: 'Ongoing', cost: '$0–40k', salary_after: '$90k–145k+', requirements: 'Sous Chef', type: 'growth', details: 'Head chef or restaurant owner.' }
    ]
  },
  {
    id: 'restaurant-manager',
    title: 'Restaurant Manager',
    icon: '🍽️',
    description: 'Oversee restaurant operations.',
    totalTime: '4-6 years',
    totalCost: '$20k–$50k',
    salaryAfter5Years: '$58k–$75k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Hospitality Training/Degree', duration: '2 years', cost: '$20k–$50k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Hospitality or management training.' },
      { id: 3, title: 'Restaurant Staff Position', duration: '1-2 years', cost: '$0', salary_after: '$25k–$35k', requirements: 'Training', type: 'work', details: 'Server or kitchen staff.' },
      { id: 4, title: 'Assistant Manager', duration: '1-2 years', cost: '$0', salary_after: '$35k–$45k', requirements: 'Staff', type: 'work', details: 'Assistant manager role.' },
      { id: 5, title: 'Restaurant Manager', duration: '2-3 years', cost: '$0', salary_after: '$58k–$75k', requirements: 'Assistant', type: 'growth', details: 'Manage entire restaurant.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$50k', salary_after: '$85k–$130k+', requirements: 'Manager Exp', type: 'growth', details: 'Area manager or owner.' }
    ]
  },
  {
    id: 'hotel-manager',
    title: 'Hotel Manager',
    icon: '🏨',
    description: 'Oversee hotel operations and guest services.',
    totalTime: '4-6 years',
    totalCost: '$40k–$80k',
    salaryAfter5Years: '$50k–$65k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Hospitality', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Hotel/hospitality management.' },
      { id: 3, title: 'Front Desk/Department Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k–$30k', requirements: 'Degree', type: 'work', details: 'Hotel department experience.' },
      { id: 4, title: 'Department Manager', duration: '1-2 years', cost: '$0', salary_after: '$40k–$50k', requirements: 'Internship', type: 'work', details: 'Housekeeping or front office.' },
      { id: 5, title: 'Assistant Manager', duration: '2-3 years', cost: '$0', salary_after: '$50k–$65k', requirements: 'Department', type: 'growth', details: 'Assistant hotel manager.' },
      { id: 6, title: 'Hotel Manager', duration: 'Ongoing', cost: '$0', salary_after: '$100k–$160k+', requirements: 'Assistant Mgr', type: 'growth', details: 'General manager or regional.' }
    ]
  },
  {
    id: 'event-planner',
    title: 'Event Planner',
    icon: '🎉',
    description: 'Plan and organize events and conferences in Canada.',
    totalTime: '2-4 years',
    totalCost: '$10k–$40k CAD',
    salaryAfter5Years: '$65k–$88k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Event Planning Certificate/Degree', duration: '1-2 years', cost: '$10k–$30k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Event planning training.' },
      { id: 3, title: 'Event Coordinator', duration: '1-2 years', cost: '$0–$5k', salary_after: '$38k–$48k', requirements: 'Certificate', type: 'work', details: 'Entry-level coordinator.' },
      { id: 4, title: 'Event Manager', duration: '2-3 years', cost: '$0', salary_after: '$48k–$62k', requirements: 'Coordinator', type: 'work', details: 'Manage multiple events.' },
      { id: 5, title: 'Senior Event Planner', duration: '2-3 years', cost: '$0', salary_after: '$65k–$88k', requirements: 'Manager', type: 'growth', details: 'Lead event team.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$50k', salary_after: '$100k–$165k+', requirements: 'Senior Exp', type: 'growth', details: 'Director or own business.' }
    ]
  },
  {
    id: 'photographer',
    title: 'Photographer',
    icon: '📷',
    description: 'Capture images for various purposes.',
    totalTime: '1-4 years',
    totalCost: '$2k–$20k',
    salaryAfter5Years: '$50k–$75k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Photography Training', duration: '6 months-2 years', cost: '$2k–$10k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Certificate or self-taught.' },
      { id: 3, title: 'Build Portfolio', duration: '6-12 months', cost: '$0–$5k', salary_after: '$10k–$20k', requirements: 'Training', type: 'work', details: 'Create sample work.' },
      { id: 4, title: 'Freelance Photographer', duration: '1-2 years', cost: '$0–$5k', salary_after: '$32k–$48k', requirements: 'Portfolio', type: 'work', details: 'Build client base.' },
      { id: 5, title: 'Established Freelancer', duration: '3-5 years', cost: '$0', salary_after: '$50k–$75k', requirements: 'Freelance', type: 'growth', details: 'Regular clients.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$80k–$150k+', requirements: 'Established', type: 'growth', details: 'Studio owner or specialist.' }
    ]
  },
  {
    id: 'videographer',
    title: 'Videographer',
    icon: '🎬',
    description: 'Create video content for media.',
    totalTime: '1-4 years',
    totalCost: '$3k–$25k',
    salaryAfter5Years: '$55k–$85k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Video Production Training', duration: '6 months-2 years', cost: '$3k–$15k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Film/video certificate.' },
      { id: 3, title: 'Build Reel', duration: '6-12 months', cost: '$0–$5k', salary_after: '$15k–$25k', requirements: 'Training', type: 'work', details: 'Create video samples.' },
      { id: 4, title: 'Freelance Videographer', duration: '1-2 years', cost: '$0–$5k', salary_after: '$35k–$50k', requirements: 'Reel', type: 'work', details: 'Build client base.' },
      { id: 5, title: 'Established Videographer', duration: '3-5 years', cost: '$0', salary_after: '$55k–$85k', requirements: 'Freelance', type: 'growth', details: 'Regular clients.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$90k–$160k+', requirements: 'Established', type: 'growth', details: 'Production company or creative director.' }
    ]
  },
  {
    id: 'animator',
    title: 'Animator',
    icon: '🎨',
    description: 'Create animated content for film and games.',
    totalTime: '4 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$68k–$95k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Animation Degree/Training', duration: '2-4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Animation school.' },
      { id: 3, title: 'Build Portfolio', duration: '6-12 months', cost: '$0–$5k', salary_after: '$0', requirements: 'Training', type: 'work', details: 'Create animation samples.' },
      { id: 4, title: 'Junior Animator', duration: '1-2 years', cost: '$0', salary_after: '$48k–$62k', requirements: 'Portfolio', type: 'work', details: 'Entry-level position.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$68k–$95k', requirements: 'Junior', type: 'growth', details: 'Senior animator.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$100k–$180k+', requirements: 'Experience', type: 'growth', details: 'Lead animator or director.' }
    ]
  },
  {
    id: 'video-game-developer',
    title: 'Video Game Developer',
    icon: '🎮',
    description: 'Create and develop video games.',
    totalTime: '4-6 years',
    totalCost: '$20k–$60k',
    salaryAfter5Years: '$85k–$135k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'CS Degree or Game Dev Bootcamp', duration: '4 years or 3-6 months', cost: '$20k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Computer science or game dev.' },
      { id: 3, title: 'Build Game Portfolio', duration: '6-12 months', cost: '$0–$5k', salary_after: '$0', requirements: 'Training', type: 'work', details: 'Create game projects.' },
      { id: 4, title: 'Junior Game Developer', duration: '1-2 years', cost: '$0', salary_after: '$65k–$90k', requirements: 'Portfolio', type: 'work', details: 'Game studio position.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$95k–$140k', requirements: 'Junior', type: 'growth', details: 'Senior developer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$150k–$220k+', requirements: 'Experience', type: 'growth', details: 'Tech lead or creative director.' }
    ]
  },
  {
    id: 'musician',
    title: 'Musician/Music Producer',
    icon: '🎵',
    description: 'Create and perform music.',
    totalTime: '2-8 years',
    totalCost: '$5k–$60k',
    salaryAfter5Years: '$35k–$95k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Music Training/Degree', duration: '2-4 years', cost: '$5k–$40k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Music school or degree.' },
      { id: 3, title: 'Build Following', duration: '1-2 years', cost: '$0–$10k', salary_after: '$10k–$25k', requirements: 'Training', type: 'work', details: 'Perform and release music.' },
      { id: 4, title: 'Professional Musician', duration: '1-2 years', cost: '$0–$5k', salary_after: '$25k–$50k', requirements: 'Following', type: 'work', details: 'Recording or touring.' },
      { id: 5, title: 'Established Artist', duration: '3-5 years', cost: '$0', salary_after: '$45k–$85k', requirements: 'Professional', type: 'growth', details: 'Consistent income streams.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$100k–$300k+', requirements: 'Established', type: 'growth', details: 'Recording artist or producer.' }
    ]
  },
  {
    id: 'fashion-designer',
    title: 'Fashion Designer',
    icon: '👗',
    description: 'Design clothing and fashion collections.',
    totalTime: '4 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$55k–$85k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Fashion Design Degree', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Fashion design school.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$15k–$25k', requirements: 'Degree', type: 'work', details: 'Fashion house internship.' },
      { id: 4, title: 'Junior Designer', duration: '1-2 years', cost: '$0', salary_after: '$40k–$56k', requirements: 'Internship', type: 'work', details: 'Design assistant.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$60k–$90k', requirements: 'Junior', type: 'growth', details: 'Lead designer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$50k', salary_after: '$100k–$200k+', requirements: 'Experience', type: 'growth', details: 'Own label or creative director.' }
    ]
  },
  {
    id: 'interior-designer',
    title: 'Interior Designer',
    icon: '🛋️',
    description: 'Design interior spaces.',
    totalTime: '4 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$60k–$90k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Interior Design Degree', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Interior design school.' },
      { id: 3, title: 'Build Portfolio', duration: '6-12 months', cost: '$0–$5k', salary_after: '$0', requirements: 'Degree', type: 'work', details: 'Create design projects.' },
      { id: 4, title: 'Junior Designer', duration: '1-2 years', cost: '$0', salary_after: '$45k–$58k', requirements: 'Portfolio', type: 'work', details: 'Design firm position.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$62k–$90k', requirements: 'Junior', type: 'growth', details: 'Senior designer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$50k', salary_after: '$100k–$180k+', requirements: 'Experience', type: 'growth', details: 'Own firm or design director.' }
    ]
  },
  {
    id: 'architect',
    title: 'Architect',
    icon: '🏛️',
    description: 'Design buildings and structures.',
    totalTime: '7-8 years',
    totalCost: '$80k–$150k',
    salaryAfter5Years: '$85k–$135k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Architecture', duration: '5 years', cost: '$80k–$150k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Architecture degree.' },
      { id: 3, title: 'Internship', duration: '3 years', cost: '$0', salary_after: '$35k', requirements: 'During Degree', type: 'work', details: 'Architecture firm internship.' },
      { id: 4, title: 'Licensing Exams', duration: '6 months', cost: '$1k–$2k', salary_after: '$0', requirements: 'Degree', type: 'school', details: 'Pass licensing exams.' },
      { id: 5, title: 'Licensed Architect', duration: '2 years', cost: '$0', salary_after: '$60k–$75k', requirements: 'License', type: 'work', details: 'Associate architect.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$50k', salary_after: '$90k–$130k+', requirements: 'Licensed', type: 'growth', details: 'Principal or own firm.' }
    ]
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    icon: '🏗️',
    description: 'Design and build infrastructure.',
    totalTime: '4-6 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$85k–$125k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Civil Engineering', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Engineering degree.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k', requirements: 'During Degree', type: 'work', details: 'Engineering firm.' },
      { id: 4, title: 'Entry-Level Engineer', duration: '1-2 years', cost: '$0', salary_after: '$60k–$75k', requirements: 'Degree', type: 'work', details: 'Junior engineer.' },
      { id: 5, title: 'PE License', duration: '1-2 years', cost: '$1k–$3k', salary_after: '$0', requirements: '4+ Years Exp', type: 'school', details: 'Professional engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$90k–$130k+', requirements: 'PE License', type: 'growth', details: 'Senior engineer or manager.' }
    ]
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    icon: '⚙️',
    description: 'Design and build mechanical systems.',
    totalTime: '4-6 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$80k–$125k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Mechanical Eng', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Mechanical engineering.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k', requirements: 'During Degree', type: 'work', details: 'Engineering firm.' },
      { id: 4, title: 'Entry-Level Engineer', duration: '1-2 years', cost: '$0', salary_after: '$68k–$85k', requirements: 'Degree', type: 'work', details: 'Junior engineer.' },
      { id: 5, title: 'PE License', duration: '1-2 years', cost: '$1k–$3k', salary_after: '$0', requirements: '4+ Years Exp', type: 'school', details: 'Professional engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$98k–$140k+', requirements: 'PE License', type: 'growth', details: 'Senior engineer or manager.' }
    ]
  },
  {
    id: 'electrical-engineer',
    title: 'Electrical Engineer',
    icon: '⚡',
    description: 'Design electrical systems.',
    totalTime: '4-6 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$85k–$130k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Electrical Eng', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Electrical engineering.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k', requirements: 'During Degree', type: 'work', details: 'Engineering firm.' },
      { id: 4, title: 'Entry-Level Engineer', duration: '1-2 years', cost: '$0', salary_after: '$70k–$88k', requirements: 'Degree', type: 'work', details: 'Junior engineer.' },
      { id: 5, title: 'PE License', duration: '1-2 years', cost: '$1k–$3k', salary_after: '$0', requirements: '4+ Years Exp', type: 'school', details: 'Professional engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$105k–$150k+', requirements: 'PE License', type: 'growth', details: 'Senior engineer or manager.' }
    ]
  },
  {
    id: 'chemical-engineer',
    title: 'Chemical Engineer',
    icon: '🧪',
    description: 'Design chemical processes.',
    totalTime: '4 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$90k–$135k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Chemical Eng', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Chemical engineering.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k', requirements: 'During Degree', type: 'work', details: 'Chemical plant.' },
      { id: 4, title: 'Entry-Level Engineer', duration: '1-2 years', cost: '$0', salary_after: '$72k–$90k', requirements: 'Degree', type: 'work', details: 'Junior engineer.' },
      { id: 5, title: 'PE License', duration: '1-2 years', cost: '$1k–$3k', salary_after: '$0', requirements: '4+ Years Exp', type: 'school', details: 'Professional engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$108k–$155k+', requirements: 'PE License', type: 'growth', details: 'Senior engineer or manager.' }
    ]
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: '💻',
    description: 'Build software systems and platforms in Canada.',
    totalTime: '4-6 years',
    totalCost: '$10k–$60k CAD',
    salaryAfter5Years: '$110k–$180k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in CS or Bootcamp', duration: '4 years or 3-6 months', cost: '$10k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'CS degree or bootcamp.' },
      { id: 3, title: 'Build Projects', duration: '3-6 months', cost: '$0', salary_after: '$0', requirements: 'Training', type: 'work', details: 'Create portfolio.' },
      { id: 4, title: 'First Software Job', duration: '1 year', cost: '$0', salary_after: '$105k–$145k', requirements: 'Portfolio', type: 'work', details: 'Junior engineer.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$150k–$210k', requirements: 'First Job', type: 'growth', details: 'Senior engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$230k–$400k+', requirements: 'Experience', type: 'growth', details: 'Principal or director.' }
    ]
  },
  {
    id: 'systems-administrator',
    title: 'Systems Administrator',
    icon: '🖥️',
    description: 'Manage computer systems and networks in Canada.',
    totalTime: '2-4 years',
    totalCost: '$5k–$20k CAD',
    salaryAfter5Years: '$95k–$135k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'CompTIA/Cisco Certs', duration: '6-12 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'IT certifications.' },
      { id: 3, title: 'Help Desk Role', duration: '1-2 years', cost: '$0', salary_after: '$40k–$50k', requirements: 'Certs', type: 'work', details: 'Entry-level IT.' },
      { id: 4, title: 'Systems Administrator', duration: '2-3 years', cost: '$1k–$3k', salary_after: '$70k–$88k', requirements: 'Help Desk', type: 'work', details: 'Manage systems.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$95k–$135k', requirements: 'SysAdmin', type: 'growth', details: 'Senior administrator.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$145k–$200k+', requirements: 'Experience', type: 'growth', details: 'Manager or architect.' }
    ]
  },
  {
    id: 'network-administrator',
    title: 'Network Administrator',
    icon: '🌐',
    description: 'Manage computer networks in Canada.',
    totalTime: '2-4 years',
    totalCost: '$5k–$20k CAD',
    salaryAfter5Years: '$75k–$110k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Cisco/CompTIA Certs', duration: '6-12 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Network certifications.' },
      { id: 3, title: 'Help Desk Role', duration: '1-2 years', cost: '$0', salary_after: '$40k–$50k', requirements: 'Certs', type: 'work', details: 'Entry-level IT.' },
      { id: 4, title: 'Network Administrator', duration: '2-3 years', cost: '$1k–$3k', salary_after: '$68k–$85k', requirements: 'Help Desk', type: 'work', details: 'Manage networks.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$90k–$130k', requirements: 'Network Admin', type: 'growth', details: 'Senior administrator.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$140k–$195k+', requirements: 'Experience', type: 'growth', details: 'Manager or architect.' }
    ]
  },
  {
    id: 'database-administrator',
    title: 'Database Administrator',
    icon: '💾',
    description: 'Manage and secure databases.',
    totalTime: '2-4 years',
    totalCost: '$5k–$20k',
    salaryAfter5Years: '$95k–$130k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Oracle/SQL Certs', duration: '6-12 months', cost: '$2k–$5k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Database certifications.' },
      { id: 3, title: 'Help Desk Role', duration: '1-2 years', cost: '$0', salary_after: '$35k–$50k', requirements: 'Certs', type: 'work', details: 'Entry-level IT.' },
      { id: 4, title: 'Database Administrator', duration: '2-3 years', cost: '$1k–$3k', salary_after: '$70k–$88k', requirements: 'Help Desk', type: 'work', details: 'Manage databases.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$95k–$130k', requirements: 'DBA', type: 'growth', details: 'Senior DBA.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$145k–$195k+', requirements: 'Experience', type: 'growth', details: 'Manager or architect.' }
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    icon: '🔐',
    description: 'Protect computer systems from attacks in Canada.',
    totalTime: '4-6 years',
    totalCost: '$10k–$50k CAD',
    salaryAfter5Years: '$90k–$140k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in CS/Cyber Sec', duration: '4 years', cost: '$30k–$50k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Cybersecurity degree.' },
      { id: 3, title: 'Security Certifications', duration: '6-12 months', cost: '$2k–$5k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Security+, CEH certs.' },
      { id: 4, title: 'Junior Security Analyst', duration: '1-2 years', cost: '$0', salary_after: '$85k–$110k', requirements: 'Certs', type: 'work', details: 'Entry security role.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$125k–$180k', requirements: 'Junior', type: 'growth', details: 'Senior analyst.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$190k–$280k+', requirements: 'Experience', type: 'growth', details: 'Manager or consultant.' }
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    icon: '🚀',
    description: 'Build and maintain cloud infrastructure in Canada.',
    totalTime: '4-6 years',
    totalCost: '$10k–$50k CAD',
    salaryAfter5Years: '$110k–$155k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in CS', duration: '4 years', cost: '$20k–$50k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Computer science.' },
      { id: 3, title: 'Cloud & DevOps Training', duration: '6-12 months', cost: '$2k–$10k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'AWS, Docker, Kubernetes certs.' },
      { id: 4, title: 'Junior DevOps Engineer', duration: '1 year', cost: '$0', salary_after: '$110k–$145k', requirements: 'Training', type: 'work', details: 'Entry DevOps.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$160k–$220k', requirements: 'Junior', type: 'growth', details: 'Senior engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$240k–$340k+', requirements: 'Experience', type: 'growth', details: 'Lead or architect.' }
    ]
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    icon: '📱',
    description: 'Create mobile applications in Canada.',
    totalTime: '4-6 years',
    totalCost: '$10k–$60k CAD',
    salaryAfter5Years: '$100k–$155k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in CS or Bootcamp', duration: '4 years or 3-6 months', cost: '$10k–$60k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'CS degree or bootcamp.' },
      { id: 3, title: 'Build App Portfolio', duration: '3-6 months', cost: '$0', salary_after: '$0', requirements: 'Training', type: 'work', details: 'Create mobile apps.' },
      { id: 4, title: 'Junior Mobile Developer', duration: '1 year', cost: '$0', salary_after: '$90k–$120k', requirements: 'Portfolio', type: 'work', details: 'iOS or Android dev.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$135k–$185k', requirements: 'Junior', type: 'growth', details: 'Senior mobile dev.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$195k–$320k+', requirements: 'Experience', type: 'growth', details: 'Lead or architect.' }
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    icon: '🤖',
    description: 'Build machine learning systems in Canada.',
    totalTime: '6 years',
    totalCost: '$40k–$80k CAD',
    salaryAfter5Years: '$130k–$200k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in CS/Math', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'CS or math degree.' },
      { id: 3, title: 'Master\'s in ML (preferred)', duration: '2 years', cost: '$0–$40k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Master\'s in ML/AI.' },
      { id: 4, title: 'Junior ML Engineer', duration: '1 year', cost: '$0', salary_after: '$130k–$190k', requirements: 'Master\'s', type: 'work', details: 'Entry ML role.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$200k–$290k', requirements: 'Junior', type: 'growth', details: 'Senior ML engineer.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$320k–$460k+', requirements: 'Experience', type: 'growth', details: 'Research scientist or director.' }
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    icon: '📊',
    description: 'Manage product development and strategy in Canada.',
    totalTime: '4-8 years',
    totalCost: '$40k–$80k CAD',
    salaryAfter5Years: '$160k–$210k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Business/CS', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Business or CS degree.' },
      { id: 3, title: 'Entry-Level Product Role', duration: '2-3 years', cost: '$0', salary_after: '$75k–$95k', requirements: 'Bachelor\'s', type: 'work', details: 'Product analyst or coordinator.' },
      { id: 4, title: 'Associate Product Manager', duration: '1-2 years', cost: '$0', salary_after: '$105k–$130k', requirements: 'Entry Role', type: 'work', details: 'APM position.' },
      { id: 5, title: 'Senior Product Manager', duration: '3-5 years', cost: '$0', salary_after: '$160k–$210k', requirements: 'APM', type: 'growth', details: 'Lead product.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$230k–$400k+', requirements: 'Senior PM', type: 'growth', details: 'Director or VP.' }
    ]
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    icon: '📈',
    description: 'Analyze business requirements and solutions in Canada.',
    totalTime: '4 years',
    totalCost: '$30k–$70k CAD',
    salaryAfter5Years: '$110k–$155k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Business/IT', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Business or IT degree.' },
      { id: 3, title: 'Business Analyst Certifications', duration: '6-12 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'CCBA or other certs.' },
      { id: 4, title: 'Junior Business Analyst', duration: '1-2 years', cost: '$0', salary_after: '$65k–$82k', requirements: 'Certs', type: 'work', details: 'Entry BA role.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$110k–$155k', requirements: 'Junior BA', type: 'growth', details: 'Senior analyst.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$168k–$230k+', requirements: 'Experience', type: 'growth', details: 'Manager or consultant.' }
    ]
  },
  {
    id: 'financial-advisor',
    title: 'Financial Advisor (CFP)',
    icon: '💼',
    description: 'Advise clients on financial planning in Canada.',
    totalTime: '4-6 years',
    totalCost: '$20k–$50k CAD',
    salaryAfter5Years: '$110k–$175k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Finance', duration: '4 years', cost: '$20k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Finance or business degree.' },
      { id: 3, title: 'Series 7 License', duration: '3-6 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Securities licensing.' },
      { id: 4, title: 'Junior Financial Advisor', duration: '1-2 years', cost: '$0', salary_after: '$72k–$95k', requirements: 'Series 7', type: 'work', details: 'Entry advisory role.' },
      { id: 5, title: 'CFP Certification', duration: '1-2 years', cost: '$3k–$5k', salary_after: '$110k–$175k', requirements: 'Work Exp', type: 'school', details: 'Certified Financial Planner.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$210k–$400k+', requirements: 'CFP', type: 'growth', details: 'Manager or own practice.' }
    ]
  },
  {
    id: 'investment-banker',
    title: 'Investment Banker',
    icon: '🏦',
    description: 'Advise on mergers, acquisitions, and funding in Canada.',
    totalTime: '4-6 years',
    totalCost: '$40k–$80k CAD',
    salaryAfter5Years: '$175k–$350k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Finance/Business', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Finance degree.' },
      { id: 3, title: 'Banking Analyst Role', duration: '2-3 years', cost: '$0', salary_after: '$105k–$150k', requirements: 'Bachelor\'s', type: 'work', details: 'Entry banking position.' },
      { id: 4, title: 'MBA (valued but optional)', duration: '2 years', cost: '$40k–$80k', salary_after: '$0', requirements: '2 Years Exp', type: 'school', details: 'MBA program.' },
      { id: 5, title: 'Associate/VP Position', duration: '2-3 years', cost: '$0', salary_after: '$175k–$350k', requirements: 'Analyst Exp', type: 'work', details: 'Promoted role.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$350k–$920k+', requirements: 'VP+', type: 'growth', details: 'Managing director.' }
    ]
  },
  {
    id: 'public-accountant-cpa',
    title: 'Public Accountant (CPA)',
    icon: '💼',
    description: 'Provide accounting services to clients in Canada.',
    totalTime: '5-7 years',
    salaryAfter5Years: '$105k–$130k',
    sotalCost: '$40k–$80k CAD',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Accounting', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Accounting degree.' },
      { id: 3, title: 'Entry-Level Accountant', duration: '1-2 years', cost: '$0', salary_after: '$56k–$72k', requirements: 'Bachelor\'s', type: 'work', details: 'Junior accountant.' },
      { id: 4, title: 'CPA Exam', duration: '6-12 months', cost: '$3k–$5k', salary_after: '$0', requirements: '1 Year Exp', type: 'school', details: 'Pass CPA exam.' },
      { id: 5, title: '5+ Years CPA Experience', duration: '5 years', cost: '$0', salary_after: '$92k–$127k', requirements: 'CPA', type: 'growth', details: 'Senior accountant.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$150k–$230k+', requirements: 'Senior CPA', type: 'growth', details: 'Partner or manager.' }
    ]
  },
  {
    id: 'management-consultant',
    title: 'Management Consultant',
    icon: '📊',
    description: 'Advise organizations on strategy and operations in Canada.',
    salaryAfter5Years: '$110k–$160k',
    sotalTime: '4-8 years',
    totalCost: '$40k–$80k CAD',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s Degree', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Any bachelor\'s degree.' },
      { id: 3, title: 'Analyst Role', duration: '2-3 years', cost: '$0', salary_after: '$82k–$105k', requirements: 'Bachelor\'s', type: 'work', details: 'Entry consulting.' },
      { id: 4, title: 'MBA (highly valued)', duration: '2 years', cost: '$40k–$80k', salary_after: '$0', requirements: '2 Years Exp', type: 'school', details: 'MBA program.' },
      { id: 5, title: 'Consultant/Manager', duration: '2-3 years', cost: '$0', salary_after: '$150k–$230k', requirements: 'MBA', type: 'work', details: 'Consultant role.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$290k–$460k+', requirements: 'Manager+', type: 'growth', details: 'Senior manager or partner.' }
    ]
  },
  {
    id: 'hr-manager',
    title: 'HR Manager',
    icon: '👥',
    description: 'Manage human resources and hiring in Canada.',
    totalTime: '4-6 years',
    totalCost: '$30k–$70k CAD',
    salaryAfter5Years: '$80k–$120k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in HR/Business', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'HR or business degree.' },
      { id: 3, title: 'HR Coordinator/Specialist', duration: '2 years', cost: '$0', salary_after: '$45k–$56k', requirements: 'Bachelor\'s', type: 'work', details: 'Entry HR role.' },
      { id: 4, title: 'SHRM Certification', duration: '6-12 months', cost: '$500–$1k', salary_after: '$0', requirements: '2+ Years HR Exp', type: 'school', details: 'SHRM-CP cert.' },
      { id: 5, title: 'HR Manager', duration: '2-3 years', cost: '$0', salary_after: '$72k–$90k', requirements: 'SHRM', type: 'work', details: 'Manage HR team.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$145k–$210k+', requirements: 'Manager Exp', type: 'growth', details: 'Director or CHRO.' }
    ]
  },
  {
    id: 'recruiter',
    title: 'Recruiter/Staffing',
    icon: '🎯',
    description: 'Find and place qualified candidates in Canada.',
    totalTime: '1-2 years',
    totalCost: '$2k–$10k CAD',
    salaryAfter5Years: '$50k–$100k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Recruiting Training', duration: '1-3 months', cost: '$1k–$5k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Recruiting basics.' },
      { id: 3, title: 'Recruitment Coordinator', duration: '6-12 months', cost: '$0–$2k', salary_after: '$36k–$48k', requirements: 'Training', type: 'work', details: 'Entry recruiting.' },
      { id: 4, title: 'Recruiter Role', duration: '1-2 years', cost: '$0', salary_after: '$56k–$76k', requirements: 'Coordinator', type: 'work', details: 'Build placements.' },
      { id: 5, title: 'Senior Recruiter', duration: '2-3 years', cost: '$0', salary_after: '$87k–$140k', requirements: 'Recruiter', type: 'growth', details: 'Lead recruiting.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$150k–$290k+', requirements: 'Senior', type: 'growth', details: 'Director or own agency.' }
    ]
  },
  {
    id: 'landscaper',
    title: 'Landscaper',
    icon: '🌳',
    description: 'Design and maintain outdoor spaces.',
    totalTime: '1-2 years',
    totalCost: '$1k–$5k',
    salaryAfter5Years: '$45k–$70k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Landscaping Training', duration: '6 months', cost: '$500–$2k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Trade school.' },
      { id: 3, title: 'Landscaper', duration: '1 year', cost: '$0', salary_after: '$28k–$38k', requirements: 'Training', type: 'work', details: 'Entry position.' },
      { id: 4, title: 'Lead Landscaper', duration: '1-2 years', cost: '$0–$2k', salary_after: '$40k–$55k', requirements: 'Landscaper', type: 'work', details: 'Crew leader.' },
      { id: 5, title: 'Landscape Business Owner', duration: '3-5 years', cost: '$5k–$50k', salary_after: '$70k–$120k', requirements: 'Lead', type: 'growth', details: 'Own company.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$100k+', requirements: 'Business Owner', type: 'growth', details: 'Expand operations.' }
    ]
  },
  {
    id: 'construction-manager',
    title: 'Construction Manager',
    icon: '🏗️',
    description: 'Plan and oversee construction projects.',
    totalTime: '4-8 years',
    totalCost: '$20k–$80k',
    salaryAfter5Years: '$80k–$125k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Construction Mgmt', duration: '4 years', cost: '$20k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Construction management.' },
      { id: 3, title: 'Field Experience', duration: '2 years', cost: '$0', salary_after: '$35k–$50k', requirements: 'Bachelor\'s', type: 'work', details: 'Field supervisor.' },
      { id: 4, title: 'Assistant Project Manager', duration: '2 years', cost: '$0', salary_after: '$55k–$75k', requirements: 'Field Exp', type: 'work', details: 'APM role.' },
      { id: 5, title: 'Project Manager', duration: '2-3 years', cost: '$0', salary_after: '$85k–$120k', requirements: 'APM', type: 'growth', details: 'Manage projects.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$150k–$220k+', requirements: 'PM Exp', type: 'growth', details: 'Senior or director.' }
    ]
  },
  {
    id: 'paramedic',
    title: 'Paramedic',
    icon: '🚑',
    description: 'Provide emergency medical care.',
    totalTime: '3-4 years',
    totalCost: '$10k–$30k',
    salaryAfter5Years: '$65k–$85k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'EMT Basic Certification', duration: '3-6 months', cost: '$1k–$3k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Basic EMT cert.' },
      { id: 3, title: 'Paramedic Training', duration: '6-12 months', cost: '$5k–$15k', salary_after: '$0', requirements: 'EMT', type: 'school', details: 'Paramedic program.' },
      { id: 4, title: 'Certified Paramedic', duration: '1-2 years', cost: '$2k–$5k', salary_after: '$40k–$55k', requirements: 'Training', type: 'work', details: 'Licensed paramedic.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$52k–$75k', requirements: 'Paramedic', type: 'growth', details: 'Experienced paramedic.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$10k', salary_after: '$75k–$110k+', requirements: 'Experience', type: 'growth', details: 'Supervisor or instructor.' }
    ]
  },
  {
    id: 'biologist',
    title: 'Biologist',
    icon: '🧬',
    description: 'Study living organisms and ecosystems.',
    totalTime: '5-6 years',
    totalCost: '$50k–$100k',
    salaryAfter5Years: '$70k–$105k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus.' },
      { id: 2, title: 'Bachelor\'s in Biology', duration: '4 years', cost: '$50k–$100k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Biology degree.' },
      { id: 3, title: 'Lab/Research Role', duration: '1 year', cost: '$0', salary_after: '$38k–$48k', requirements: 'Bachelor\'s', type: 'work', details: 'Entry research.' },
      { id: 4, title: 'Master\'s (optional)', duration: '2 years', cost: '$0–$30k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Master\'s degree.' },
      { id: 5, title: 'Biologist Position', duration: '2-3 years', cost: '$0', salary_after: '$48k–$62k', requirements: 'Bachelor\'s+', type: 'work', details: 'Biologist role.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$30k', salary_after: '$68k–$95k+', requirements: 'Experience', type: 'growth', details: 'Researcher or manager.' }
    ]
  },
  {
    id: 'chemist',
    title: 'Chemist',
    icon: '🧪',
    description: 'Study matter and chemical reactions.',
    totalTime: '5-6 years',
    totalCost: '$50k–$100k',
    salaryAfter5Years: '$75k–$110k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus.' },
      { id: 2, title: 'Bachelor\'s in Chemistry', duration: '4 years', cost: '$50k–$100k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Chemistry degree.' },
      { id: 3, title: 'Lab/Research Role', duration: '1 year', cost: '$0', salary_after: '$40k–$52k', requirements: 'Bachelor\'s', type: 'work', details: 'Entry research.' },
      { id: 4, title: 'Master\'s (optional)', duration: '2 years', cost: '$0–$30k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Master\'s degree.' },
      { id: 5, title: 'Chemist Position', duration: '2-3 years', cost: '$0', salary_after: '$50k–$65k', requirements: 'Bachelor\'s+', type: 'work', details: 'Chemist role.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$30k', salary_after: '$70k–$100k+', requirements: 'Experience', type: 'growth', details: 'Researcher or manager.' }
    ]
  },
  {
    id: 'meteorologist',
    title: 'Meteorologist',
    icon: '🌦️',
    description: 'Study weather and atmospheric conditions.',
    totalTime: '5-6 years',
    totalCost: '$50k–$100k',
    salaryAfter5Years: '$85k–$125k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus.' },
      { id: 2, title: 'Bachelor\'s in Meteorology', duration: '4 years', cost: '$50k–$100k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Meteorology degree.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$20k–$30k', requirements: 'During Degree', type: 'work', details: 'Weather service.' },
      { id: 4, title: 'Entry Meteorologist Role', duration: '1 year', cost: '$0', salary_after: '$45k–$60k', requirements: 'Bachelor\'s', type: 'work', details: 'Weather forecaster.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$80k–$115k', requirements: 'Entry', type: 'growth', details: 'Senior meteorologist.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$130k–$200k+', requirements: 'Experience', type: 'growth', details: 'Manager or researcher.' }
    ]
  },
  {
    id: 'social-worker',
    title: 'Social Worker',
    icon: '🤝',
    description: 'Help people and families with challenges.',
    totalTime: '5-6 years',
    totalCost: '$40k–$80k',
    salaryAfter5Years: '$60k–$85k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Social Work', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'BSW degree.' },
      { id: 3, title: 'Social Worker Internship', duration: '6-12 months', cost: '$0', salary_after: '$28k–$36k', requirements: 'Bachelor\'s', type: 'work', details: 'Supervised practice.' },
      { id: 4, title: 'Licensed Social Worker', duration: '6-12 months', cost: '$500–$1k', salary_after: '$42k–$55k', requirements: 'Bachelor\'s', type: 'school', details: 'LCSW licensure.' },
      { id: 5, title: '5+ Years Experience', duration: '5 years', cost: '$0', salary_after: '$58k–$78k', requirements: 'Licensed', type: 'growth', details: 'Experienced social worker.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$10k', salary_after: '$85k–$130k+', requirements: 'Experience', type: 'growth', details: 'Supervisor or manager.' }
    ]
  },
  {
    id: 'counselor',
    title: 'Counselor/Therapist',
    icon: '💭',
    description: 'Provide mental health counseling.',
    totalTime: '6-7 years',
    totalCost: '$40k–$80k',
    salaryAfter5Years: '$65k–$90k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school.' },
      { id: 2, title: 'Bachelor\'s in Counseling/Psych', duration: '4 years', cost: '$40k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Bachelor\'s degree.' },
      { id: 3, title: 'Master\'s in Counseling', duration: '2 years', cost: '$20k–$40k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Required for practice.' },
      { id: 4, title: 'Licensed Counselor Internship', duration: '1-2 years', cost: '$0', salary_after: '$35k–$45k', requirements: 'Master\'s', type: 'work', details: 'Supervised practice.' },
      { id: 5, title: 'Licensed Professional Counselor', duration: '1-2 years', cost: '$500–$1k', salary_after: '$48k–$62k', requirements: 'Internship', type: 'school', details: 'LPC licensure.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0–$10k', salary_after: '$100k–$140k+', requirements: 'LPC+Exp', type: 'growth', details: 'Supervisor or own practice.' }
    ]
  },
  // Medical Doctor (MD)
  {
    id: 'medical-doctor',
    title: 'Medical Doctor (MD)',
    icon: '🩺',
    description: 'Diagnose and treat human illnesses as a physician.',
    totalTime: '11-15 years',
    totalCost: '$200k–$400k',
    salaryAfter5Years: '$200k–$280k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus recommended.' },
      { id: 2, title: 'Bachelor\'s Degree (Pre-Med)', duration: '4 years', cost: '$40k–$120k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-medical undergraduate degree.' },
      { id: 3, title: 'Medical School (MD)', duration: '4 years', cost: '$120k–$250k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Doctor of Medicine degree.' },
      { id: 4, title: 'Residency', duration: '3-7 years', cost: '$0', salary_after: '$58k–$75k', requirements: 'MD', type: 'work', details: 'Specialized medical training.' },
      { id: 5, title: 'Board Certification', duration: '6-12 months', cost: '$2k–$5k', salary_after: '$0', requirements: 'Residency', type: 'school', details: 'Pass board exams.' },
      { id: 6, title: 'Attending Physician', duration: 'Ongoing', cost: '$0', salary_after: '$180k–$350k+', requirements: 'Board Certified', type: 'growth', details: 'Practice as a physician or specialist.' }
    ]
  },
  // Pediatrician
  {
    id: 'pediatrician',
    title: 'Pediatrician',
    icon: '👶',
    description: 'Medical doctor specializing in children\'s health.',
    totalTime: '11-15 years',
    totalCost: '$200k–$400k',
    salaryAfter5Years: '$180k–$250k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus recommended.' },
      { id: 2, title: 'Bachelor\'s Degree (Pre-Med)', duration: '4 years', cost: '$40k–$120k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-medical undergraduate degree.' },
      { id: 3, title: 'Medical School (MD/DO)', duration: '4 years', cost: '$120k–$250k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Doctor of Medicine or Osteopathy.' },
      { id: 4, title: 'Pediatrics Residency', duration: '3 years', cost: '$0', salary_after: '$58k–$75k', requirements: 'MD/DO', type: 'work', details: 'Specialized pediatric training.' },
      { id: 5, title: 'Board Certification', duration: '6-12 months', cost: '$2k–$5k', salary_after: '$0', requirements: 'Residency', type: 'school', details: 'Pediatrics board exam.' },
      { id: 6, title: 'Practicing Pediatrician', duration: 'Ongoing', cost: '$0', salary_after: '$170k–$280k+', requirements: 'Board Certified', type: 'growth', details: 'Practice as a pediatrician.' }
    ]
  },
  // Surgeon
  {
    id: 'surgeon',
    title: 'Surgeon',
    icon: '🔪',
    description: 'Medical doctor specializing in surgery.',
    totalTime: '13-17 years',
    totalCost: '$250k–$500k',
    salaryAfter5Years: '$250k–$400k+',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Science focus recommended.' },
      { id: 2, title: 'Bachelor\'s Degree (Pre-Med)', duration: '4 years', cost: '$40k–$120k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Pre-medical undergraduate degree.' },
      { id: 3, title: 'Medical School (MD/DO)', duration: '4 years', cost: '$120k–$250k', salary_after: '$0', requirements: 'Bachelor\'s', type: 'school', details: 'Doctor of Medicine or Osteopathy.' },
      { id: 4, title: 'Surgical Residency', duration: '5-7 years', cost: '$0', salary_after: '$60k–$80k', requirements: 'MD/DO', type: 'work', details: 'General surgery training.' },
      { id: 5, title: 'Fellowship (optional)', duration: '1-3 years', cost: '$0', salary_after: '$70k–$90k', requirements: 'Residency', type: 'work', details: 'Subspecialty training.' },
      { id: 6, title: 'Board Certification', duration: '6-12 months', cost: '$2k–$5k', salary_after: '$0', requirements: 'Residency/Fellowship', type: 'school', details: 'Surgery board exam.' },
      { id: 7, title: 'Practicing Surgeon', duration: 'Ongoing', cost: '$0', salary_after: '$300k–$600k+', requirements: 'Board Certified', type: 'growth', details: 'Practice as a surgeon.' }
    ]
  },
  // Aerospace Engineer
  {
    id: 'aerospace-engineer',
    title: 'Aerospace Engineer',
    icon: '🛩️',
    description: 'Design and develop aircraft and spacecraft.',
    totalTime: '4-6 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$95k–$150k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Aerospace Eng', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Aerospace engineering degree.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k', requirements: 'During Degree', type: 'work', details: 'Aerospace firm internship.' },
      { id: 4, title: 'Entry-Level Engineer', duration: '1-2 years', cost: '$0', salary_after: '$70k–$90k', requirements: 'Degree', type: 'work', details: 'Junior aerospace engineer.' },
      { id: 5, title: 'PE License (optional)', duration: '1-2 years', cost: '$1k–$3k', salary_after: '$0', requirements: '4+ Years Exp', type: 'school', details: 'Professional engineer license.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$110k–$180k+', requirements: 'Experience', type: 'growth', details: 'Senior engineer or manager.' }
    ]
  },
  // Environmental Engineer
  {
    id: 'environmental-engineer',
    title: 'Environmental Engineer',
    icon: '🌱',
    description: 'Solve environmental problems using engineering.',
    totalTime: '4-6 years',
    totalCost: '$30k–$70k',
    salaryAfter5Years: '$85k–$130k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Math and science focus.' },
      { id: 2, title: 'Bachelor\'s in Environmental Eng', duration: '4 years', cost: '$30k–$70k', salary_after: '$0', requirements: 'High School', type: 'school', details: 'Environmental engineering degree.' },
      { id: 3, title: 'Internship', duration: '6-12 months', cost: '$0', salary_after: '$25k', requirements: 'During Degree', type: 'work', details: 'Environmental firm internship.' },
      { id: 4, title: 'Entry-Level Engineer', duration: '1-2 years', cost: '$0', salary_after: '$60k–$75k', requirements: 'Degree', type: 'work', details: 'Junior environmental engineer.' },
      { id: 5, title: 'PE License', duration: '1-2 years', cost: '$1k–$3k', salary_after: '$0', requirements: '4+ Years Exp', type: 'school', details: 'Professional engineer license.' },
      { id: 6, title: 'Advanced Roles', duration: 'Ongoing', cost: '$0', salary_after: '$90k–$130k+', requirements: 'PE License', type: 'growth', details: 'Senior engineer or manager.' }
    ]
  }
];
