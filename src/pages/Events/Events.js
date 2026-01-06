import React, { useState } from 'react';
import './Events.css';
import { eventsData } from '../../data/eventsData';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const renderEventCard = (event, isLive = false) => (
    <div className={`event-card ${isLive ? 'live-event' : ''}`} key={event.title}>
      {isLive && (
        <div className="live-badge">
          <span className="pulse-dot"></span>
          LIVE NOW
        </div>
      )}
      
      {event.image && (
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
      )}
      
      <div className="event-content">
        <div className="event-header">
          <h3>{event.title}</h3>
          <div className="event-meta">
            <div className="event-date">
              <i className="fas fa-calendar-alt"></i>
              <span>{event.date}</span>
            </div>
            <div className="event-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
        
        <p className="event-description">{event.description}</p>
        
        {event.link && event.buttonText && (
          <a 
            href={event.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="event-btn"
          >
            {event.buttonText}
            <i className="fas fa-arrow-right"></i>
          </a>
        )}
      </div>
    </div>
  );

  const renderEmptyState = (message) => (
    <div className="empty-state">
      <i className="fas fa-calendar-times"></i>
      <p>{message}</p>
    </div>
  );

  return (
    <div className="events-page">
      {/* Hero Section */}
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Events & Workshops</h1>
          <p>Join us for exciting learning experiences and networking opportunities</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="events-container">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'live' ? 'active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            <i className="fas fa-broadcast-tower"></i>
            Live Events
          </button>
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <i className="fas fa-calendar-plus"></i>
            Upcoming Events
          </button>
          <button
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <i className="fas fa-history"></i>
            Past Events
          </button>
        </div>

        {/* Live Events Section */}
        {activeTab === 'live' && (
          <div className="events-section">
            <h2 className="section-title">
              <span className="pulse-dot"></span>
              Live Events
            </h2>
            <div className="events-grid">
              {eventsData.liveEvents.length > 0 ? (
                eventsData.liveEvents.map((event) => renderEventCard(event, true))
              ) : (
                renderEmptyState('No live events at the moment. Check back soon!')
              )}
            </div>
          </div>
        )}

        {/* Upcoming Events Section */}
        {activeTab === 'upcoming' && (
          <div className="events-section">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="events-grid">
              {eventsData.upcomingEvents.length > 0 ? (
                eventsData.upcomingEvents.map((event) => renderEventCard(event))
              ) : (
                renderEmptyState('No upcoming events scheduled. Stay tuned for updates!')
              )}
            </div>
          </div>
        )}

        {/* Past Events Section */}
        {activeTab === 'past' && (
          <div className="events-section">
            <h2 className="section-title">Past Events</h2>
            <div className="events-grid">
              {eventsData.pastEvents.length > 0 ? (
                eventsData.pastEvents.map((event) => renderEventCard(event))
              ) : (
                renderEmptyState('No past events to display.')
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
