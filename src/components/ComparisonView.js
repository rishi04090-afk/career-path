import React from 'react';

const stageColors = {
  school: '#667eea',
  work: '#ffb347',
  growth: '#7ed957',
};

const animateStyle = {
  animation: 'slideIn 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
};

const ComparisonView = ({ careers }) => {
  if (!careers.length) return null;

  // Find max values for scaling progress bars
  const maxTime = Math.max(...careers.map(c => c.steps.reduce((acc, s) => acc + (parseInt(s.duration) || 0), 0)));
  const maxCost = Math.max(...careers.map(c => c.steps.reduce((acc, s) => acc + (parseInt((s.cost || '').replace(/[^\d]/g, '')) || 0), 0)));
  const maxSalary = Math.max(...careers.map(c => {
    const last = c.steps[c.steps.length - 1];
    return last && last.salary_after ? parseInt((last.salary_after || '').replace(/[^\d]/g, '')) : 0;
  }));

  return (
    <div className="comparison-view" id="comparison-view-section" style={{ marginTop: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#764ba2', marginBottom: '2rem', letterSpacing: '-1px' }}>
        🎉 Compare Careers!
      </h2>
      <div className="comparison-cards" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {careers.map((career, idx) => {
          const totalTime = career.steps.reduce((acc, s) => acc + (parseInt(s.duration) || 0), 0);
          const totalCost = career.steps.reduce((acc, s) => {
            const cost = parseInt((s.cost || '').replace(/[^\d]/g, '')) || 0;
            return acc + cost;
          }, 0);
          const startSalary = career.steps.find(s => s.salary_after && s.type === 'work')?.salary_after || '-';
          const longSalary = career.steps[career.steps.length - 1]?.salary_after || '-';

          // Progress bar widths
          const timePct = maxTime ? Math.round((totalTime / maxTime) * 100) : 0;
          const costPct = maxCost ? Math.round((totalCost / maxCost) * 100) : 0;
          const salaryNum = longSalary && typeof longSalary === 'string' ? parseInt(longSalary.replace(/[^\d]/g, '')) : 0;
          const salaryPct = maxSalary ? Math.round((salaryNum / maxSalary) * 100) : 0;

          return (
            <div
              key={career.id}
              className="comparison-card"
              style={{
                background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(102,126,234,0.10)',
                padding: '2rem 1.5rem 1.5rem 1.5rem',
                minWidth: 260,
                maxWidth: 320,
                flex: '1 1 260px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                ...animateStyle,
              }}
              tabIndex={0}
              title={`Click to learn more about ${career.title}`}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 2px 8px #764ba2)' }}>{career.icon}</span>
                <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#764ba2', letterSpacing: '-1px' }}>{career.title}</span>
              </div>
              <div style={{ marginBottom: '1.2rem', color: '#555', fontSize: '1rem', minHeight: 40 }}>{career.description}</div>

              {/* Progress Bars */}
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{ fontWeight: 600, color: '#667eea', marginBottom: 4 }}>⏳ Time to Complete</div>
                <div className="progress-bar-bg" style={{ background: '#e0e7ef', borderRadius: 8, height: 14, width: '100%' }}>
                  <div className="progress-bar" style={{
                    width: `${timePct}%`,
                    background: 'linear-gradient(90deg, #667eea 60%, #764ba2 100%)',
                    height: 14,
                    borderRadius: 8,
                    transition: 'width 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
                  }} />
                </div>
                <div style={{ fontSize: '0.98rem', color: '#333', marginTop: 2 }}>{totalTime} years</div>
              </div>
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{ fontWeight: 600, color: '#ffb347', marginBottom: 4 }}>💸 Total Cost</div>
                <div className="progress-bar-bg" style={{ background: '#e0e7ef', borderRadius: 8, height: 14, width: '100%' }}>
                  <div className="progress-bar" style={{
                    width: `${costPct}%`,
                    background: 'linear-gradient(90deg, #ffb347 60%, #ff7f50 100%)',
                    height: 14,
                    borderRadius: 8,
                    transition: 'width 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
                  }} />
                </div>
                <div style={{ fontSize: '0.98rem', color: '#333', marginTop: 2 }}>${totalCost.toLocaleString()}</div>
              </div>
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{ fontWeight: 600, color: '#7ed957', marginBottom: 4 }}>💰 Potential Salary</div>
                <div className="progress-bar-bg" style={{ background: '#e0e7ef', borderRadius: 8, height: 14, width: '100%' }}>
                  <div className="progress-bar" style={{
                    width: `${salaryPct}%`,
                    background: 'linear-gradient(90deg, #7ed957 60%, #764ba2 100%)',
                    height: 14,
                    borderRadius: 8,
                    transition: 'width 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
                  }} />
                </div>
                <div style={{ fontSize: '0.98rem', color: '#333', marginTop: 2 }}>{longSalary}</div>
              </div>

              {/* Stages */}
              <div style={{ display: 'flex', gap: 6, marginTop: 18, flexWrap: 'wrap' }}>
                {career.steps.map((step, i) => (
                  <span
                    key={i}
                    style={{
                      background: stageColors[step.type] || '#e0e7ef',
                      color: '#fff',
                      borderRadius: 6,
                      padding: '0.3rem 0.7rem',
                      fontSize: '0.92rem',
                      fontWeight: 500,
                      boxShadow: '0 1px 4px rgba(102,126,234,0.10)',
                      letterSpacing: '-0.5px',
                      marginBottom: 2,
                      animation: 'popIn 0.5s',
                    }}
                  >
                    {step.type === 'school' && '🎓 '}
                    {step.type === 'work' && '💼 '}
                    {step.type === 'growth' && '🚀 '}
                    {step.label || step.type}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonView;
