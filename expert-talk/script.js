document.addEventListener('DOMContentLoaded', function() {
    // Populate event information
    document.getElementById('event-title').textContent = eventData.title;
    document.getElementById('event-description').textContent = eventData.description;
    document.getElementById('event-date').textContent = eventData.date;
    document.getElementById('event-time').textContent = eventData.time;
    document.getElementById('event-venue').textContent = eventData.venue;
    
    // Populate startup sections
    const startupCardsContainer = document.getElementById('startup-cards');
    startupCardsContainer.innerHTML = ''; // Clear container
    
    startups.forEach(startup => {
        // Create a startup section
        const startupSection = document.createElement('div');
        startupSection.className = 'startup-section';
        
        // Create a heading for the startup
        const startupHeading = document.createElement('h3');
        startupHeading.textContent = startup.name;
        startupHeading.className = 'startup-heading';
        startupSection.appendChild(startupHeading);
        
        // Create a description for the startup
        const startupDesc = document.createElement('p');
        startupDesc.textContent = startup.description;
        startupDesc.className = 'startup-description';
        startupSection.appendChild(startupDesc);
        
        // Create a container for this startup's cards
        const startupCardsWrapper = document.createElement('div');
        startupCardsWrapper.className = 'startup-cards-wrapper';
        
        // Always create 3 cards for each startup
        const cardTypes = [
            { title: 'Company Website', description: 'Learn more about our company', url: startup.website1 || '#', label: 'Visit Website' },
            { title: 'Our Blog', description: 'Read our latest articles and updates', url: startup.website2 || '#', label: 'Read Blog' },
            { title: 'Get in Touch', description: 'Contact us for more information', url: startup.website3 || '#', label: 'Contact Us' }
        ];
        
        // Create all three cards regardless of URL availability
        cardTypes.forEach(cardInfo => {
            const card = createCard(
                cardInfo.title,
                cardInfo.description,
                cardInfo.url,
                cardInfo.label
            );
            startupCardsWrapper.appendChild(card);
        });
        
        startupSection.appendChild(startupCardsWrapper);
        startupCardsContainer.appendChild(startupSection);
    });
    
    // Helper function to create a card
    function createCard(title, description, url, linkText) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardTitle = document.createElement('h4');
        cardTitle.textContent = title;
        
        const cardDesc = document.createElement('p');
        cardDesc.textContent = description;
        
        const cardLink = document.createElement('a');
        cardLink.href = url;
        cardLink.textContent = linkText;
        cardLink.target = url === '#' ? '' : '_blank';
        cardLink.className = 'card-link';
        
        if (url === '#') {
            cardLink.style.opacity = '0.7';
            cardLink.title = 'Coming soon';
        }
        
        card.appendChild(cardTitle);
        card.appendChild(cardDesc);
        card.appendChild(cardLink);
        
        return card;
    }
});
        return card;
    }
});
