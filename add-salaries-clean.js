#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/careers.js');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// Split careers and find each one
const careerBlocks = fileContent.split(/(?=\n  \{[\s\n]*id:)/);
let firstBlock = careerBlocks[0];  // Keep the header
const careers = careerBlocks.slice(1);

const salaryData = {
    'teacher': '$75k–$90k',
    'developer': '$100k–$140k',
    'electrician': '$75k–$95k',
    'nurse': '$85k–$105k',
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
    'truck-driver': '$65k–$90k',
    'pilot': '$95k–$125k',
    'chef': '$58k–$85k',
    'restaurant-manager': '$58k–$75k',
    'hotel-manager': '$50k–$65k',
    'event-planner': '$65k–$88k',
    'photographer': '$50k–$75k',
    'videographer': '$55k–$85k',
    'animator': '$68k–$95k',
    'video-game-developer': '$95k–$140k',
    'musician': '$45k–$85k',
    'fashion-designer': '$60k–$90k',
    'interior-designer': '$62k–$90k',
    'architect': '$60k–$75k',
    'civil-engineer': '$60k–$75k',
    'mechanical-engineer': '$68k–$85k',
    'electrical-engineer': '$150k–$210k',
    'chemical-engineer': '$150k–$210k',
    'software-engineer': '$150k–$210k',
    'systems-administrator': '$95k–$135k',
    'network-administrator': '$90k–$130k',
    'database-administrator': '$95k–$130k',
    'cybersecurity-analyst': '$125k–$180k',
    'devops-engineer': '$160k–$220k',
    'mobile-developer': '$135k–$185k',
    'ai-ml-engineer': '$200k–$290k',
    'product-manager': '$160k–$210k',
    'business-analyst': '$110k–$155k',
    'financial-advisor': '$110k–$175k',
    'investment-banker': '$175k–$350k',
    'public-accountant-cpa': '$92k–$127k',
    'management-consultant': '$150k–$230k',
    'hr-manager': '$72k–$90k',
    'recruiter': '$87k–$140k',
    'landscaper': '$70k–$120k',
    'construction-manager': '$85k–$120k',
    'paramedic': '$52k–$75k',
    'biologist': '$48k–$62k',
    'chemist': '$50k–$65k',
    'meteorologist': '$80k–$115k',
    'social-worker': '$58k–$78k',
    'counselor': '$48k–$62k',
    'medical-doctor': '$70k–$90k',
    'pediatrician': '$70k–$90k',
    'surgeon': '$70k–$90k',
    'aerospace-engineer': '$70k–$90k',
    'environmental-engineer': '$60k–$75k'
};

const updatedCareers = [];

for (let i = 0; i < careers.length; i++) {
    let career = careers[i];
    
    // Extract the career ID
    const idMatch = career.match(/id:\s*'([^']+)'/);
    if (!idMatch) continue;
    
    const careerId = idMatch[1];
    const salary = salaryData[careerId];
    
    if (!salary) {
        console.log(`WARNING: No salary data for ${careerId}`);
        updatedCareers.push(career);
        continue;
    }
    
    // Check if it already has the field
    if (career.includes('salaryAfter5Years:')) {
        console.log(`Already has field: ${careerId}`);
        updatedCareers.push(career);
        continue;
    }
    
    // Find the totalCost line and insert salaryAfter5Years after it
    const pattern = /(totalCost:\s*'[^']*',\n)/;
    if (career.match(pattern)) {
        career = career.replace(pattern, `$1    salaryAfter5Years: '${salary}',\n`);
        console.log(`Added for: ${careerId}: ${salary}`);
    } else {
        console.log(`Could not find totalCost pattern for: ${careerId}`);
    }
    
    updatedCareers.push(career);
}

// Rebuild the file
let newContent = firstBlock;
for (const career of updatedCareers) {
    newContent += '\n  {' + career;
}

fs.writeFileSync(filePath, newContent);

// Verify
const updated = fs.readFileSync(filePath, 'utf-8');
const count = (updated.match(/salaryAfter5Years:/g) || []).length;
console.log(`\nDone! File updated with ${count} salaryAfter5Years fields`);
