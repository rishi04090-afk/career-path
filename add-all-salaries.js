const fs = require('fs');
const path = require('path');

const careerFile = path.join(__dirname, 'src/data/careers.js');
let content = fs.readFileSync(careerFile, 'utf8');

// All 73 careers with their 5-year salaries
const allSalaries = {
  'teacher': '$75k–$90k',
  'software-developer': '$100k–$140k',
  'electrician': '$75k–$95k',
  'registered-nurse': '$85k–$105k',
  'lawyer': '$80k–$110k',
  'plumber': '$80k–$100k',
  'hvac-technician': '$50k–$65k',
  'web-developer': '$85k–$120k',
  'data-scientist': '$135k–$180k',
  'graphic-designer': '$65k–$85k',
  'accountant-cpa': '$80k–$105k',
  'project-manager': '$95k–$130k',
  'marketing-manager': '$95k–$130k',
  'sales-executive': '$120k–$170k',
  'real-estate-agent': '$85k–$140k',
  'entrepreneur': '$60k–$240k',
  'carpenter': '$62k–$82k',
  'mechanic': '$60k–$80k',
  'dentist': '$170k–$210k',
  'veterinarian': '$105k–$135k',
  'pharmacist': '$150k–$175k',
  'physical-therapist': '$105k–$130k',
  'occupational-therapist': '$85k–$105k',
  'registered-nurse-spec': '$95k–$125k',
  'police-officer': '$75k–$98k',
  'firefighter': '$55k–$75k',
  'truck-driver': '$65k–90k',
  'pilot': '$95k–$125k',
  'chef': '$58k–$85k',
  'restaurant-manager': '$58k–$75k',
  'hotel-manager': '$50k–$65k',
  'event-planner': '$65k–$88k',
  'photographer': '$50k–$75k',
  'videographer': '$55k–$85k',
  'animator': '$68k–$95k',
  'video-game-developer': '$85k–$135k',
  'musician': '$35k–$95k',
  'fashion-designer': '$55k–$85k',
  'interior-designer': '$60k–$90k',
  'architect': '$85k–$135k',
  'civil-engineer': '$85k–$125k',
  'mechanical-engineer': '$80k–$125k',
  'electrical-engineer': '$85k–$130k',
  'chemical-engineer': '$90k–$135k',
  'software-engineer': '$110k–$180k',
  'systems-administrator': '$75k–$105k',
  'network-administrator': '$75k–$110k',
  'database-administrator': '$95k–$130k',
  'cybersecurity-analyst': '$90k–$140k',
  'devops-engineer': '$110k–$155k',
  'mobile-developer': '$100k–$155k',
  'ai-ml-engineer': '$130k–$200k',
  'product-manager': '$110k–$160k',
  'business-analyst': '$85k–$125k',
  'financial-advisor': '$80k–$150k',
  'investment-banker': '$150k–$300k+',
  'public-accountant-cpa': '$90k–$130k',
  'management-consultant': '$100k–$160k',
  'hr-manager': '$80k–$120k',
  'recruiter': '$50k–$100k',
  'landscaper': '$45k–$70k',
  'construction-manager': '$80k–$125k',
  'paramedic': '$65k–$85k',
  'biologist': '$70k–$105k',
  'chemist': '$75k–$110k',
  'meteorologist': '$85k–$125k',
  'social-worker': '$60k–$85k',
  'counselor': '$65k–$90k',
  'medical-doctor': '$200k–$280k',
  'pediatrician': '$180k–$250k',
  'surgeon': '$250k–$400k+',
  'aerospace-engineer': '$95k–$150k',
  'environmental-engineer': '$85k–$130k'
};

let count = 0;
let added = [];

for (const [id, salary] of Object.entries(allSalaries)) {
  // Check if the career already has salaryAfter5Years
  if (content.includes(`id: '${id}'`) && !new RegExp(`id: '${id}'[\\s\\S]*?salaryAfter5Years:`).test(content)) {
    // Find and add the salary field
    const pattern = new RegExp(`(id: '${id}'[\\s\\S]*?totalCost: '[^']*',)(\\s*steps:)`, 'g');
    if (pattern.test(content)) {
      content = content.replace(pattern, `$1\n    salaryAfter5Years: '${salary}',\n$2`);
      count++;
      added.push(id);
    }
  }
}

fs.writeFileSync(careerFile, content, 'utf8');
console.log(`Added ${count} careers:`);
console.log(added.join(', '));
