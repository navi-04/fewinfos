import React, { useState } from 'react';
import './Team.css';
import { teamData } from '../../data/teamData';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { label: 'All', value: 'All' },
    { label: 'Leadership', value: 'Founder & CEO' },
    { label: 'SDE', value: 'SDE' },
    { label: 'Graphic Designer', value: 'Graphic Designer' },
    { label: 'Event Manager', value: 'Event Manager' },
    // { label: 'HR', value: 'HR' },
    { label: 'SDE Intern', value: 'SDE Intern' },
    { label: 'Sales Intern', value: 'Sales Intern' },
    { label: 'Video Editor', value: 'Video Editor' },
  ];

  const filteredMembers = activeFilter === 'All' 
    ? teamData.members 
    : teamData.members.filter(member => member.position === activeFilter);

  return (
    <div className="team-page">
      {/* Hero Section */}
      <div className="team-hero">
        <div className="team-hero-content">
          <h1>Meet Our Team</h1>
          <p>Passionate individuals dedicated to innovation and excellence</p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="team-container">
        {/* Filter Buttons */}
        <div className="team-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="team-grid">
          {filteredMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-card-inner">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay">
                    <div className="social-links">
                      {member.socials.github && member.socials.github !== '#' && (
                        <a 
                          href={member.socials.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="GitHub"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {member.socials.linkedin && member.socials.linkedin !== '#' && (
                        <a 
                          href={member.socials.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="LinkedIn"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      )}
                      {member.socials.instagram && member.socials.instagram !== '#' && (
                        <a 
                          href={member.socials.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  {/* Mobile Social Links */}
                  <div className="mobile-social-links">
                    {member.socials.github && member.socials.github !== '#' && (
                      <a 
                        href={member.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.socials.linkedin && member.socials.linkedin !== '#' && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.socials.instagram && member.socials.instagram !== '#' && (
                      <a 
                        href={member.socials.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
