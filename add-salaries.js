const fs = require('fs');
const path = require('path');

const careerFile = path.join(__dirname, 'src/data/careers.js');
let content = fs.readFileSync(careerFile, 'utf8');

// Map of career IDs to their 5-year salaries using en-dash
const salaryMap = {
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
for (const [id, salary] of Object.entries(salaryMap)) {
  const pattern = new RegExp(`(id: ['"]${id}['"][,\\s\\S]*?totalCost: '[^']*',)(\\s*steps:)`, 'g');
  if (pattern.test(content)) {
    content = content.replace(pattern, `$1\n    salaryAfter5Years: '${salary}',\n$2`);
    count++;
    console.log(`Added salary for ${id}: ${salary}`);
  } else {
    console.log(`SKIPPED ${id} - already has field or not found`);
  }
}

fs.writeFileSync(careerFile, content, 'utf8');
console.log(`\nTotal careers updated: ${count}`);
