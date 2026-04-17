import React from 'react';

const ComparisonView = ({ careers }) => {
  if (!careers.length) return null;
  return (
    <div className="comparison-view">
      <h2>Compare Careers</h2>
      <table>
        <thead>
          <tr>
            <th>Career</th>
            <th>Total Time</th>
            <th>Total Cost</th>
            <th>Starting Salary</th>
            <th>Long-term Salary</th>
          </tr>
        </thead>
        <tbody>
          {careers.map(career => {
            const totalTime = career.steps.reduce((acc, s) => acc + (parseInt(s.duration) || 0), 0);
            const totalCost = career.steps.reduce((acc, s) => {
              const cost = parseInt((s.cost || '').replace(/[^\d]/g, '')) || 0;
              return acc + cost;
            }, 0);
            const startSalary = career.steps.find(s => s.salary_after && s.type === 'work')?.salary_after || '-';
            const longSalary = career.steps[career.steps.length - 1]?.salary_after || '-';
            return (
              <tr key={career.id}>
                <td>{career.title}</td>
                <td>{totalTime} yrs</td>
                <td>${totalCost.toLocaleString()}</td>
                <td>{startSalary}</td>
                <td>{longSalary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonView;
