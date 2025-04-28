// FEWINFOS Website Data

const websiteData = {
    // Website keywords for SEO and chatbot
    keywords: {
        main: ["web development", "digital solutions", "AI", "social media management", "mentorship", "tech education"],
        services: ["web design", "app development", "digital marketing", "AI solutions", "mentorship", "coding"],
        technologies: ["React", "Node.js", "Python", "HTML5", "CSS3", "Bootstrap", "SQL"]
    },
    
    // Counters data
    counters: {
        yearsOfExperience: 2,
        happyClients: 15,
        projectsCompleted: 3,
        eventsHosted: 2,
        coursesOffered: 3  // New counter for courses
    },

    // Services data
    services: [
        {
            icon: "fas fa-desktop",
            title: "Web Development",
            description: "Custom web solutions with cutting-edge technologies",
            technologies: ["React", "Node.js", "Python","HTML5","CSS3","Bootstrap"]
        },
        {
            icon: "fas fa-code",
            title: "Minor Projects",
            description: "Web based minor project for students",
            technologies: ["Python","HTML5","CSS3","Bootstrap","SQL"]
        },
        {
            icon: "fab fa-instagram",
            title: "Social Media Management",
            description: "Standard post and reels per months",
            technologies: ["Post per day", "Reel per week", "stories per day"]
        },
        {
            icon: "fas fa-book",
            title: "One To One Mentorship",
            description: "Ideal solutions by our mentors",
            technologies: ["How to code", "How to use AI"]
        }
    ],

    // Projects/Products data
    projects: [
        {
            title: "Seatify",
            description: "Advanced hall arrangement solution for enterprise systems",
            features: ["Real-time Monitoring", "AI Analytics", "Web-based"],
            icon: "fas fa-chart-line",
            github: "https://github.com/fewinfos/smart-logger",
            isFeatured: true
        },
        {
            title: "FewAI CLI",
            description: "Next-generation command line bot",
            features: ["Advanced coding in terminal", "Automated works", "Integration with the system"],
            icon: "fas fa-shield-alt",
            github: "https://github.com/fewinfos/securegate",
            isFeatured: false
        },
        {
            title: "FewAI BOT",
            description: "Next-generation LLM bot",
            features: ["Coding master", "Real time problem solving"],
            icon: "fas fa-robot",
            github: "https://github.com/fewinfos/securegate",
            isFeatured: true
        }
    ],

    // Team members data
    team: {
        leadership: {
            name: "Naveenraj Thiyagarajan",
            position: "Founder & CEO",
            image: "images/naveenraj.jpg",
            socials: {
                github: "https://github.com/navi-04",
                linkedin: "http://www.linkedin.com/in/navithiyagu",
                instagram: "https://www.instagram.com/suvitha__ramesh?igsh=MW53a3B3NHQ2Yjd4Yg=="
            },
            goals: [
                "To revolutionize digital solutions and empower businesses worldwide",
                "Creating innovative technology solutions that transform ideas into reality"
            ]
        },
        members: [
            {
                name: "Suvitha",
                position: "Co-founder & Lead Developer & Event Manager",
                image: "images/suvitha.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/suvitha-ramesh/",
                    instagram: "#"
                }
            },
            {
                name: "Nureshma",
                position: "Technical Engineer & Clients Manager",
                image: "images/nureshma.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "http://www.linkedin.com/in/nureshma-s-full-stack-developer-a03444290/",
                    instagram: "#"
                }
            },
            {
                name: "Nirmala",
                position: "Social Media Manager & Technical Engineer",
                image: "images/nirmala.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/nirmala-ramadas-16b081290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    instagram: "#"
                }
            },
            {
                name: "Nishanthi",
                position: "Technical Engineer & Clients Manager",
                image: "images/nishanthi.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/nishanthi-shahana-b471b032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    instagram: "#"
                }
            },
            {
                name: "Shivani",
                position: "Social Media Manager & Technical Engineer",
                image: "images/shivani.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/shivani-karthikeyan-400508283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    instagram: "#"
                }
            },
            {
                name: "Sudeep",
                position: "Technical Engineer & Clients Manager",
                image: "images/sudeep.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/sudeep-k-14b442290",
                    instagram: "#"
                }
            },
            {
                name: "Ragavi",
                position: "Event Manager & Technical Engineer",
                image: "images/ragavi.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/ragavi-s-96848925a/",
                    instagram: "#"
                }
            },
            {
                name: "Sudharashanan",
                position: "Technical Engineer & Clients Manager",
                image: "images/sudharashanan.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/sudharshanan-sathish-kumar-625776301/",
                    instagram: "#"
                }
            },
            {
                name: "Swathi",
                position: "Event Manager & Technical Engineer",
                image: "images/swathi.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/swathi-sundharaj-2a7242312",
                    instagram: "#"
                }
            }
        ]
    },

    // Events data
    events: {
        liveEvents: [
            // {
            //     title: "Tech Conference 2023",
            //     date: "Oct 15-16, 2023",
            //     location: "Virtual",
            //     description: "Join us for our virtual tech conference with industry leaders discussing the latest innovations.",
            //     link: "#",
            //     buttonText: "Join Stream"
            // }
        ],
        upcomingEvents: [
            {
                title: "AI Innovation Summit",
                date: "April 15-17, 2025",
                location: "MKCE - Karur, India",
                description: "Explore the future of AI and machine learning with top experts and leaders.",
                link: "#contact",
                buttonText: "Register Now"
            }
        ],
        pastEvents: [
            // {
            //     title: "Web Development Summit",
            //     date: "Aug 10-12, 2023",
            //     location: "Mumbai, India",
            //     description: "An insightful gathering of web developers discussing modern frameworks and methodologies.",
            //     image: "images/event-webdev.jpg",
            //     link: "#",
            //     buttonText: "View Highlights"
            // }
        ]
    },

    // Courses data with enhanced information
    courses: [
        {
            title: "How to code like pro",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            level: "Intermediate",
            duration: "3 weeks",
            description: "Learn to how to code like a pro using the C, Java, Python and JavaScript.",
            features: ["Expert Mentors", "Real-world Projects", "Lifetime Access"],
            category: "development",
            isFeatured: true,
            originalPrice: "₹1599",
            price: "₹999",
            discount: 40,
            rating: 4.7,
            students: 28
        },
        {
            title: "Git and Github",
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            level: "Beginner",
            duration: "2 weeks",
            description: "Introduction to git the version control system and the Github",
            features: ["Live Sessions", "Practical Exercises", "Industry Projects"],
            category: "data",
            isFeatured: true,
            originalPrice: "₹1499",
            price: "₹899",
            discount: 40,
            rating: 4.5,
            students: 27
        },
        {
            title: "Intermediate level in Python",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            level: "Intermediate",
            duration: "8 weeks",
            description: "Master Python for data science and Machine learning",
            features: ["Hands-on Labs", "Industry Experts", "Certification Course", "Real-world Case Studies"],
            category: "infrastructure",
            isFeatured: false,
            originalPrice: "₹1999",
            price: "₹1499",
            discount: 25,
            rating: 4.6,
            students: 13
        }
    ]
};

// Make data available globally
window.websiteData = websiteData;

// Test function to simulate empty event columns
// Uncomment the sections you want to test as empty
function testEmptyEventColumns() {
    // Test all empty columns
    websiteData.events.liveEvents = [];
    websiteData.events.pastEvents = [];
    
    // Keep one event for testing
    // websiteData.events.upcomingEvents = websiteData.events.upcomingEvents;
}

// Comment out this line to show all events
// testEmptyEventColumns();
