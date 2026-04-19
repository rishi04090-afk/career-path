// Career path data with step-by-step roadmaps
export const careers = [
  {
    id: 'teacher',
    title: 'Teacher',
    icon: '🧑‍🏫',
    description: 'Guide and educate students in schools.',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school' },
      { id: 2, title: 'Bachelor’s Degree', duration: '4 years', cost: '$20k–$80k', salary_after: '$0', requirements: 'High School', type: 'school' },
      { id: 3, title: 'Teacher’s College', duration: '1–2 years', cost: '$10k–$30k', salary_after: '$0', requirements: 'Bachelor’s', type: 'school' },
      { id: 4, title: 'First Job', duration: '1 year', cost: '$0', salary_after: '$45k', requirements: 'Degree + College', type: 'work' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$55k', requirements: 'First Job', type: 'growth' },
      { id: 6, title: 'Advanced Roles', duration: 'Varies', cost: '$0', salary_after: '$65k+', requirements: 'Experience', type: 'growth' }
    ]
  },
  {
    id: 'developer',
    title: 'Software Developer',
    icon: '💻',
    description: 'Build and maintain software applications.',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school' },
      { id: 2, title: 'Bachelor’s in CS', duration: '4 years', cost: '$20k–$80k', salary_after: '$0', requirements: 'High School', type: 'school' },
      { id: 3, title: 'Internship', duration: '3–6 months', cost: '$0', salary_after: '$0', requirements: 'Enrolled in Degree', type: 'work' },
      { id: 4, title: 'First Job', duration: '1 year', cost: '$0', salary_after: '$65k', requirements: 'Degree', type: 'work' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$90k', requirements: 'First Job', type: 'growth' },
      { id: 6, title: 'Advanced Roles', duration: 'Varies', cost: '$0', salary_after: '$120k+', requirements: 'Experience', type: 'growth' }
    ]
  },
  {
    id: 'electrician',
    title: 'Electrician',
    icon: '🔌',
    description: 'Install and maintain electrical systems.',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school' },
      { id: 2, title: 'Apprenticeship', duration: '4–5 years', cost: '$0', salary_after: '$35k', requirements: 'High School', type: 'work' },
      { id: 3, title: 'Journeyman License', duration: '1 year', cost: '$1k', salary_after: '$50k', requirements: 'Apprenticeship', type: 'school' },
      { id: 4, title: 'First Job', duration: '1 year', cost: '$0', salary_after: '$55k', requirements: 'License', type: 'work' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$65k', requirements: 'First Job', type: 'growth' },
      { id: 6, title: 'Advanced Roles', duration: 'Varies', cost: '$0', salary_after: '$80k+', requirements: 'Experience', type: 'growth' }
    ]
  }
];
