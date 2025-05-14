const sitePasscode = "FIW251"; // This is the passcode to unlock the content

const eventData = [ 
  {
  "type": 1,
  "level": 0,
  "topic": "PROGRAMMING - CHATGPT",
  "description": "ChatGPT is an AI-powered conversational assistant developed by OpenAI that helps with coding, debugging, learning concepts, and generating code from natural language queries across various programming languages.",
  "link": "https://chat.openai.com/",
  "prompt": "Explain the difference between synchronous and asynchronous JavaScript with examples."
},
{
  "type": 1,
  "level": 1,
  "topic": "PROGRAMMING - CLAUDE AI",
  "description": "Claude, developed by Anthropic, is an AI assistant that excels in understanding and generating human-like text, offering helpful support for coding, debugging, and conceptual problem-solving.",
  "link": "https://claude.ai/",
  "prompt": "Generate Python code to scrape product titles and prices from an e-commerce site using BeautifulSoup."
},
{
  "type": 1,
  "level": 2,
  "topic": "PROGRAMMING - GEMINI AI",
  "description": "Gemini, Google's AI assistant, integrates deep understanding and reasoning capabilities to assist with code generation, explanations, and creative programming solutions across languages.",
  "link": "https://gemini.google.com/",
  "prompt": "Explain how promises work in JavaScript and convert a callback-based function to use promises."
},

  {
    "type": 1,
    "level": 3,
    "topic": "PROGRAMMING - BLACKBOX AI",
    "description": "Enhance your coding efficiency with Blackbox AI, an AI-powered coding assistant that offers real-time code suggestions, debugging assistance, and code generation from natural language prompts.",
    "link": "https://www.blackbox.ai/",
    "prompt": "Write a JavaScript function that calculates the factorial of a given number."
  },
  {
    "type": 1,
    "level": 4,
    "topic": "PROGRAMMING - REPLIT",
    "description": "Utilize Replit's AI-powered platform to build, share, and deploy applications directly from your browser, simplifying the development process with collaborative tools and real-time code generation.",
    "link": "https://replit.com/",
    "prompt": "Create a reusable React form component with validation using custom hooks."
  },
  {
    "type": 1,
    "level": 5,
    "topic": "PROGRAMMING - CURSOR",
    "description": "Experience seamless coding with Cursor, an AI-integrated code editor that provides intelligent code completions, real-time collaboration, and context-aware assistance to boost your development workflow.",
    "link": "https://www.cursor.com/",
    "prompt": "Give me full automated bus ticket booking system with html,css for frontend and python for backend."
  },
  {
    "type": 1,
    "level": 6,
    "topic": "CONTENT GENERATION - WRITESONIC",
    "description": "Writesonic helps you generate high-quality marketing copy, blogs, and emails using AI, based on your input prompts and tone.",
    "link": "https://writesonic.com/",
    "prompt": "Generate a 300-word blog on 'How AI is transforming education'."
  },
  {
    "type": 1,
    "level": 7,
    "topic": "CONTENT GENERATION - COPY.AI",
    "description": "Copy.ai is an AI content assistant that helps you instantly create content like product descriptions, social media posts, and more.",
    "link": "https://www.copy.ai/",
    "prompt": "Write a product description for a smart water bottle aimed at fitness enthusiasts."
  },
  {
    "type": 1,
    "level": 8,
    "topic": "WEBSITE BUILDING - FRAMER",
    "description": "Framer is a no-code website builder with AI features for rapid, interactive website creation and animations.",
    "link": "https://www.framer.com/",
    "prompt": "Design a modern portfolio website layout for a graphic designer."
  },
  {
    "type": 1,
    "level": 9,
    "topic": "WEBSITE BUILDING - SPLINE",
    "description": "Spline lets you design and animate 3D web experiences in a collaborative, visual interface.",
    "link": "https://spline.design/",
    "prompt": "Create a rotating 3D cube with hover animation for a homepage hero section."
  },
  {
    "type": 1,
    "level": 10,
    "topic": "WEBSITE BUILDING - DORA",
    "description": "Dora is an AI website builder with visual design tools and animation features to build responsive websites without code.",
    "link": "https://www.dora.run/",
    "prompt": "Design a landing page for a top luxury mechanical watch store."
  },
  {
    "type": 1,
    "level": 11,
    "topic": "WEBSITE BUILDING - LOVABLE",
    "description": "Lovable helps you generate visually appealing websites powered by AI, aimed at startups and creative portfolios.",
    "link": "https://lovable.dev/",
    "prompt": "Create a modern, animated portfolio website design. Include sections for Hero, About, Skills, Projects, Testimonials, Contact, and Footer. Use smooth scroll and hover animations, a clean layout, and responsive design. Suggest a tech stack like React + Tailwind + Framer Motion. Keep the code modular and stylish."
  },
  {
    "type": 1,
    "level": 12,
    "topic": "WEBSITE BUILDING - GAMMA",
    "description": "Gamma is an AI-powered tool to create stunning, interactive presentations and web pages from plain text.",
    "link": "https://gamma.app/",
    "prompt": "Create a interactive presentation for a new AI-powered study assistant."
  },
   {
    "type": 1,
    "level": 13,
    "topic": "ARCHITECTURE DIAGRAM - ERASER",
    "description": "Eraser is an AI-powered whiteboard and diagram tool for drawing architecture workflows and software diagrams collaboratively.",
    "link": "https://app.eraser.io/",
    "prompt": "Create a clear, colorful architecture diagram for a modern web application. Include components like frontend, backend, database, API gateway, authentication, and cloud services. Use icons and color-coded sections for clarity. The diagram should be visually appealing, well-labeled, and easy to understand."
  },
  {
  "type": 1,
  "level": 14,
  "topic": "APP CREATOR - WEBDRAW",
  "description": "WebDraw is a no-code visual editor that lets you design and publish fully responsive web and mobile applications with built-in AI support.",
  "link": "https://webdraw.com/",
  "prompt": "Create a UI layout for a travel booking app with search, filtering, and booking confirmation screens."
}, 
 {
    "type": 2,
    "level": 15,
    "topic": "GITHUB COPILOT",
    "content": "GitHub Copilot is an AI pair programmer powered by OpenAI Codex that helps you write code faster and smarter with real-time code suggestions directly in your editor.",
  },
    {
    "type": 1,
    "level": 16,
    "topic": "STARTUP TOOL - OPENART",
    "description": "OpenArt is an AI platform that helps startups and creators generate high-quality visuals and art assets using text-to-image prompts, ideal for branding and marketing.",
    "link": "https://openart.ai/",
    "prompt": "Create a colorful illustration of a man standing and holding a large advertisement board that reads: 'WELCOME TO AI WORKSHOP'. The man should look friendly and confident. The board should have bold, eye-catching fonts and a modern design. Use a bright background and clear lighting."
  },
  {
    "type": 1,
    "level": 17,
    "topic": "STARTUP TOOL - IDEAGRAM",
    "description": "Ideagram uses AI to turn ideas into visuals by generating design concepts, illustrations, and mockups from natural language prompts.",
    "link": "https://ideogram.ai/t/explore",
    "prompt": "Illustrate a man holding a large board that says: 'EXPLORE CAREERS IN ARTIFICIAL INTELLIGENCE'. The background should show a tech expo or futuristic city with AI-themed visuals."
  },
  {
    "type": 1,
    "level": 18,
    "topic": "STARTUP TOOL - PERPLEXITY",
    "description": "Perplexity is an AI-powered search and research assistant that helps startups get instant, accurate answers with cited sources—great for competitive analysis and idea validation.",
    "link": "https://www.perplexity.ai/",
    "prompt": "Research and summarize the top 3 AI-powered email marketing tools used by startups in 2024."
  }
  
];