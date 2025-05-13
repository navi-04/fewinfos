const sitePasscode = "event123"; // This is the passcode to unlock the content

const eventData = [
  {
    type: 1, // Type 1: Full box with prompt
    level: 1,
    topic: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming including variables, functions, and control flow.",
    link: "https://example.com/intro-js",
    prompt: "Write a function that calculates the factorial of a number."
  },
  {
    type: 1,
    level: 2,
    topic: "Advanced React Patterns",
    description: "Master complex React patterns like render props, custom hooks, and context API.",
    link: "https://example.com/advanced-react",
    prompt: "Implement a reusable form component with validation using custom hooks."
  },
  {
    type: 2, // Type 2: Simple box with heading and text only
    level: 3,
    topic: "Web Development Fundamentals",
    content: "Web development is the work involved in developing a website for the Internet or an intranet. It can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
  },
  {
    type: 2,
    level: 4,
    topic: "Programming Concepts",
    content: "Understanding fundamental programming concepts such as algorithms, data structures, and design patterns is essential for writing efficient and maintainable code. These principles transcend specific languages and provide a foundation for solving complex problems."
  },
    {
    type: 3, // Type 3: Box with heading, image and text
    level: 5,
    topic: "Frontend Frameworks",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    content: "Frontend frameworks like React, Angular, and Vue provide robust architectures for building dynamic and responsive user interfaces. They offer components, state management, and other tools to streamline development."
  },
  {
    type: 3,
    level: 6,
    topic: "Cloud Computing",
    imageUrl: "https://images.unsplash.com/photo-1667381293896-db2c0ca309cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    content: "Cloud computing delivers computing services over the internet, offering flexible resources, rapid innovation, and economies of scale. Services include infrastructure, platforms, and software, enabling businesses to operate without managing physical servers."
  }
];
