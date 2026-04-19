const express = require('express');
const router = express.Router();

// Sample careers data - in production, this would be in the database
const careers = [
  {
    id: 'teacher',
    title: 'Teacher',
    icon: '🧑‍🏫',
    description: 'Guide and educate students in schools.',
    totalTime: '9–11 years',
    totalCost: '$30k–$110k',
    steps: [
      { id: 1, title: 'High School Diploma', duration: '4 years', cost: '$0', salary_after: '$0', requirements: 'None', type: 'school', details: 'Complete high school education. Take courses in English, Math, Science.' },
      { id: 2, title: "Bachelor's Degree", duration: '4 years', cost: '$20k–$80k', salary_after: '$0', requirements: 'High School', type: 'school', details: "Pursue a Bachelor's in Education or subject specialization.", schools: ['University of Toronto', 'McGill University', 'UBC'] },
      { id: 3, title: "Teacher's College", duration: '1–2 years', cost: '$10k–$30k', salary_after: '$0', requirements: "Bachelor's Degree", type: 'school', details: 'Complete teacher training program with practicum experience.' },
      { id: 4, title: 'First Teaching Job', duration: '1 year', cost: '$0', salary_after: '$45k', requirements: 'Teaching Certificate', type: 'work', details: 'Start as a full-time or substitute teacher in a school.' },
      { id: 5, title: '5 Years Experience', duration: '5 years', cost: '$0', salary_after: '$55k', requirements: 'First Job', type: 'growth', details: 'Build experience, possibly pursue specialization or leadership roles.' },
      { id: 6, title: 'Advanced Roles', duration: 'Varies', cost: '$0', salary_after: '$65k+', requirements: 'Experience', type: 'growth', details: 'Department head, admin, curriculum specialist, or principal track.' }
    ]
  },
  // Add other careers here...
];

// Get all careers
router.get('/', (req, res) => {
  try {
    res.json(careers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single career by ID
router.get('/:id', (req, res) => {
  try {
    const career = careers.find(c => c.id === req.params.id);
    if (!career) {
      return res.status(404).json({ error: 'Career not found' });
    }
    res.json(career);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get career steps
router.get('/:id/steps', (req, res) => {
  try {
    const career = careers.find(c => c.id === req.params.id);
    if (!career) {
      return res.status(404).json({ error: 'Career not found' });
    }
    res.json(career.steps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
