# Career Data - Quick Reference & Validation Guide

## File: CAREER_DATA_VERIFIED.csv

### Fields Explained
- **Career**: Job title
- **Total Timeline (Years)**: Years from high school graduation to established career
- **Education Cost Range (USD)**: Total out-of-pocket education/training costs
- **Entry-Level Salary (USD)**: Annual salary for first role (year 1-2)
- **Mid-Career Salary 5+ Years (USD)**: Annual salary after 5-10 years
- **Advanced Role Salary (USD)**: Annual salary for senior/specialist positions
- **Primary Education**: Required degree or certification
- **Key Notes**: Important context for the career

---

## Quick Statistics

### Average by Career Type
| Category | Avg Entry | Avg Mid | Avg Advanced | Avg Education Cost |
|----------|-----------|---------|--------------|-------------------|
| Healthcare | $75K | $100K | $175K | $95K |
| Technology | $80K | $135K | $200K+ | $40K |
| Engineering | $70K | $120K | $180K | $50K |
| Skilled Trades | $38K | $60K | $95K | $1.5K |
| Business/Finance | $68K | $120K | $200K+ | $60K |
| Creative/Design | $42K | $68K | $110K | $45K |
| Service/Other | $40K | $65K | $110K | $25K |

### Top 10 Starting Salaries
1. AI/ML Engineer: $110-160K
2. Software Engineer: $90-120K
3. DevOps Engineer: $95-125K
4. Cybersecurity Analyst: $75-95K
5. Dentist: $155-180K
6. Pharmacist: $130-150K
7. Software Developer: $65-85K
8. Lawyer: $65-85K
9. Data Scientist: $85-110K
10. Investment Banker: $90-130K

### Top 10 Advanced Role Salaries
1. Investment Banker: $300-800K+
2. Entrepreneur: $500K+
3. AI/ML Engineer: $280-400K+
4. Management Consultant: $250-400K+
5. Lawyer (specialized): $180-400K+
6. Stockbroker: $250-500K+
7. Financial Advisor: $180-350K+
8. Dentist: $250-400K+
9. Software Engineer: $200-350K+
10. Veterinarian: $160-250K

### Lowest Education Cost
1. Entrepreneur: $10-500K (highly variable startup costs)
2. Landscaper/Gardener: $500-5K
3. Truck Driver: $2-8K (CDL training)
4. Electrician/Plumber/HVAC: $1-3.5K
5. Inspector: $5-20K
6. EMT/Paramedic: $2-30K

### Highest Education Cost
1. Lawyer: $80-200K
2. Dentist: $150-300K
3. Pilot: $100-250K
4. Veterinarian: $120-250K
5. Pharmacist: $100-200K
6. Architect: $80-150K
7. Psychologist/Sociologist: $60-120K

### Fastest ROI (Education Cost to Mid-Career Salary Ratio)
| Career | Cost | Mid-Salary | Years | ROI% |
|--------|------|-----------|-------|------|
| Truck Driver | $5K | $60K | 2 | 1100% |
| Electrician | $2K | $58K | 5 | 2800% |
| Plumber | $2K | $62K | 5 | 3000% |
| HVAC Tech | $2K | $58K | 5 | 2800% |
| Teacher | $55K | $58K | 6 | 5% |
| Police Officer | $20K | $70K | 4 | 250% |

---

## Data Validation Checklist

### Before Using This Data
- [ ] Compare with BLS OOH for specific career (https://www.bls.gov/ooh/)
- [ ] Adjust for your geographic region (cost of living varies 20-50%)
- [ ] Consider company size impact on salary (startup vs Fortune 500)
- [ ] Account for specialty/niche certifications (increases salary 10-30%)
- [ ] Review union vs non-union status for trades
- [ ] Check remote work impact (can shift salary ranges)

### For Users in Your App
Show disclaimer: 
> "These figures are based on national averages. Your actual salary may vary by 20-50% based on location, experience, company size, and specialization. This is for educational planning purposes only."

---

## Integration with Your Career Path App

### Suggested Fields to Display
1. Career title
2. Education timeline + cost
3. Salary progression chart (Entry → Mid → Advanced)
4. Key requirements (education, licensing)
5. Growth opportunities
6. Related careers
7. Regional salary adjustment tool

### Recommended Features
1. **Salary Calculator**: Input location ZIP code → adjust all salaries by regional COLA
2. **Timeline Visualizer**: Show education phases, apprenticeship, advancement path
3. **ROI Calculator**: Cost vs mid-career salary comparison
4. **Comparison Tool**: Compare 2-3 careers side by side
5. **Certifications Impact**: Show salary boost from additional certs
6. **Gender/Location Notes**: Transparent about variation factors

---

## Important Disclaimers for Users

### What This Data DOES Show
✓ National average salary ranges
✓ Typical education/training timelines
✓ Typical education costs
✓ Career progression paths
✓ Starting point for career planning

### What This Data DOES NOT Show
✗ Individual salary predictions
✗ Job market conditions in your specific area
✗ Your personal earning potential
✗ Job satisfaction or work-life balance
✗ Future automation impact
✗ Recession/economic cycle impact
✗ Company-specific compensation
✗ Actual benefits value (healthcare, 401k, etc.)

---

## Common Questions & Answers

**Q: Why is Software Developer entry salary lower than AI/ML Engineer?**
A: AI/ML typically requires Master's degree + research experience; software developers can start with just bootcamp. Demand for AI/ML engineers exceeds supply, driving premium pay.

**Q: Are these salaries before or after taxes?**
A: All figures are gross annual salary (before taxes). Net take-home is typically 75-85% depending on state and federal taxes.

**Q: Why is Entrepreneur listed as "Unlimited"?**
A: Because success varies wildly. Small business owners average $50-100K, while successful startups/e-commerce can generate millions. Ranges shown assume moderate success.

**Q: The entry salary seems high/low for my area**
A: Correct. This is a NATIONAL AVERAGE. Major metros (SF, NYC, Boston, Seattle) are typically 30-50% higher. Rural areas are typically 20-40% lower.

**Q: Why do some careers show huge jumps from entry to advanced?**
A: Some careers (law, finance, medicine) have partnership/equity opportunities that significantly increase senior-level compensation compared to entry positions.

**Q: Are bonuses/commissions included?**
A: No. Figures are base salary only. Commission-heavy roles (sales, finance) can add 25-200% more through bonuses. Noted in "Key Notes" column.

**Q: Why is education cost so low for trades but high for professions?**
A: Trades use apprenticeship model (paid on-the-job learning). Professions require upfront university tuition (4+ years, unpaid).

---

## Career Groupings for Easy Navigation

### High Earners (Avg Advanced $200K+)
AI/ML Engineer, Software Engineer, Investment Banker, Management Consultant, DevOps Engineer, Stockbroker, Lawyer, Entrepreneur, Dentist, Pharmacist, Pilot

### Fast-Track (Timeline <4 years)
Truck Driver (2yr), Real Estate Agent (2yr), Recruiter (2yr), EMT (2yr), many bootcamp roles (3-6mo)

### Stable Government Jobs (Pension Benefits)
Teacher, Police Officer, Firefighter, Social Worker (many positions)

### Self-Employment Friendly
Real Estate Agent, Entrepreneur, Photographer, Videographer, Graphic Designer, Musician, Consultant, Financial Advisor, Landscaper

### Highest Growth Fields (10%+ salary growth/year)
AI/ML Engineer, Data Scientist, Cybersecurity Analyst, DevOps Engineer, Physical Therapist

### Best Union/Trade Routes
Electrician, Plumber, HVAC Tech, Carpenter, Mechanical/Civil Engineer (project-based)

### Healthcare Careers (All)
Nurse (RN), Dentist, Pharmacist, Physical Therapist, Occupational Therapist, Paramedic, EMT, Psychologist, Counselor, Social Worker, Veterinarian

### Tech Careers (All)
Software Developer, Web Developer, Data Scientist, Software Engineer, Systems Administrator, Network Administrator, Database Administrator, Cybersecurity Analyst, DevOps Engineer, Mobile Developer, AI/ML Engineer, Video Game Developer

---

## How to Use This for Application Features

### Feature 1: Career Comparison Tool
```
User selects 2-3 careers → Display:
- Timeline comparison (years to reach advanced role)
- Cost comparison (total education investment)
- Salary progression chart
- Break-even analysis
- ROI calculation
```

### Feature 2: Salary Trajectory Visualization
```
For each career, show line graph:
- X-axis: Years from high school (0-40)
- Y-axis: Annual salary
- Plot points: Entry → Mid (5yr) → Advanced (10+yr)
- Show inflation-adjusted vs nominal
```

### Feature 3: Education Cost vs Earning Potential
```
Bubble chart showing:
- X-axis: Total education cost
- Y-axis: Mid-career salary (5 years)
- Bubble size: Typical timeline
- Color: Industry category
- Highlight "best value" careers
```

### Feature 4: Location-Adjusted Salary Calculator
```
User input: ZIP code or city
Auto-adjust all salaries by cost-of-living:
- San Francisco Bay Area: +40-50%
- NYC: +35-45%
- Seattle/Boston: +25-35%
- National Average: baseline
- Rural/Small Town: -20-40%
```

---

## Data Maintenance Notes

### Recommended Update Frequency
- [ ] Monthly: Check BLS for salary updates (OEWS data)
- [ ] Quarterly: Review tech salaries (rapid changes)
- [ ] Annually: Full review of all data pre-May (when BLS updates OOH)
- [ ] As-needed: Individual career deep-dives if user questions data

### Red Flags to Monitor
- Tech salaries declining (market correction)
- Healthcare shortages affecting pay
- Trade shortage premiums
- Emerging careers with incomplete data
- Regional economic changes

---

## Attribution & Sources
All data derived from:
- U.S. Bureau of Labor Statistics (BLS)
- PayScale Compensation Research
- Glassdoor Salary Data
- Official licensing board data
- NCES College Cost Data
- Current employment surveys

Last verified: April 19, 2026
Recommended refresh: April 2027
