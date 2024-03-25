import React from 'react';
import './index.js'
const Team = () => {
  // Array containing team member data
  const teamMembers = [
    { name: 'Mahesh S Reddy', role: 'Co-Founder & CEO' },
    { name: 'S N Thrijala Reddy', role: 'Chief Legal Officer' },
    // Add more team members as needed
  ];

  return (
    <div className="team-container">
      <div className="company-header">
        <img src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1704460985/Proptelligence_logo_zsynq0.png" alt="Company Logo" className="company-logo" />
        <h1>Proptelligence</h1>
      </div>
      <h2>Meet Our Team</h2>
      <p>Our dedicated team of professionals is here to revolutionize the real estate and legal industry.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
