export const timeOptions = [
  { value: '30m', label: '30 minutes/day', hours: 0.5, pace: 'steady' },
  { value: '1h', label: '1 hour/day', hours: 1, pace: 'focused' },
  { value: '2h', label: '2 hours/day', hours: 2, pace: 'accelerated' },
  { value: '3h', label: '3+ hours/day', hours: 3.5, pace: 'immersive' }
];

export const careerPaths = {
  'Web Development': {
    icon: '🌐',
    fit: ['html', 'css', 'javascript', 'design', 'frontend', 'ui', 'react', 'problem solving'],
    strengths: ['Fast visual progress', 'Strong freelance potential', 'Great for builders who like visible results'],
    overview: 'Web Development blends design, logic, and real-world products. It suits students who enjoy creating things people can actually use online.',
    resources: [
      'MDN Web Docs',
      'freeCodeCamp',
      'Frontend Mentor',
      'JavaScript.info',
      'Scrimba Frontend Career Path'
    ],
    avoid: ['Tutorial-hopping without projects', 'Ignoring responsive design', 'Memorizing syntax without building'],
    tips: ['Build one small project every 2 weeks', 'Write clean, reusable components', 'Deploy projects on GitHub Pages or Netlify'],
    roadmap: [
      { title: 'Foundation', detail: 'Learn HTML, CSS, accessibility, Git, and basic JavaScript syntax.' },
      { title: 'Interactive Frontend', detail: 'Practice DOM manipulation, async requests, forms, and responsive layouts.' },
      { title: 'Modern Frameworks', detail: 'Move into React concepts, component thinking, and state management.' },
      { title: 'Portfolio Projects', detail: 'Create a student planner, dashboard, and API-based project you can showcase.' },
      { title: 'Career Launch', detail: 'Polish GitHub, resume, deployment workflow, and interview-ready fundamentals.' }
    ],
    milestones: ['Landing pages', 'Interactive apps', 'React portfolio', 'Job-ready projects']
  },
  'Cybersecurity': {
    icon: '🛡️',
    fit: ['network', 'linux', 'security', 'systems', 'analysis', 'python', 'attention to detail'],
    strengths: ['High-demand field', 'Clear certification pathways', 'Great for analytical thinkers'],
    overview: 'Cybersecurity is ideal for students who enjoy understanding how systems work, spotting weaknesses, and thinking defensively.',
    resources: [
      'TryHackMe',
      'Hack The Box Academy',
      'Professor Messer',
      'Cisco Networking Academy',
      'OWASP Top 10'
    ],
    avoid: ['Skipping networking basics', 'Trying advanced hacking labs too early', 'Ignoring documentation and ethics'],
    tips: ['Study networking before exploitation', 'Keep notes on every lab', 'Use legal sandboxes and practice environments only'],
    roadmap: [
      { title: 'Core Systems', detail: 'Study computer networks, Linux basics, command line, and how the web works.' },
      { title: 'Security Fundamentals', detail: 'Learn common threats, authentication, encryption, and vulnerability categories.' },
      { title: 'Hands-on Labs', detail: 'Practice with guided rooms on TryHackMe or Hack The Box Academy.' },
      { title: 'Specialization', detail: 'Explore SOC analysis, web security, cloud security, or penetration testing.' },
      { title: 'Proof of Skill', detail: 'Build lab notes, write security reports, and aim for entry certifications or internships.' }
    ],
    milestones: ['Networking basics', 'Security labs', 'Incident analysis', 'Entry-level readiness']
  },
  'Data Science': {
    icon: '📊',
    fit: ['math', 'statistics', 'python', 'excel', 'analysis', 'research', 'curiosity'],
    strengths: ['Strong analytical career path', 'Useful across industries', 'Fits curious students who enjoy patterns'],
    overview: 'Data Science works well for students who like finding meaning in numbers, exploring trends, and turning raw data into decisions.',
    resources: [
      'Kaggle Learn',
      'Google Data Analytics resources',
      'Pandas documentation',
      'StatQuest',
      'DataCamp free chapters'
    ],
    avoid: ['Jumping into machine learning too soon', 'Ignoring statistics', 'Working only with toy datasets'],
    tips: ['Learn Python and spreadsheets together', 'Visualize every dataset you study', 'Explain your findings in plain language'],
    roadmap: [
      { title: 'Data Basics', detail: 'Build confidence with spreadsheets, Python basics, and introductory statistics.' },
      { title: 'Data Handling', detail: 'Use pandas, clean messy data, merge tables, and validate assumptions.' },
      { title: 'Visualization & Storytelling', detail: 'Create charts, dashboards, and clear written insights from datasets.' },
      { title: 'Applied Analysis', detail: 'Work on business, student, or public datasets and publish case studies.' },
      { title: 'Machine Learning Foundations', detail: 'Only after fundamentals, start regression, classification, and evaluation basics.' }
    ],
    milestones: ['Python analysis', 'Data cleaning', 'Visual storytelling', 'Intro ML']
  },
  'Mobile Development': {
    icon: '📱',
    fit: ['swift', 'kotlin', 'react native', 'flutter', 'mobile', 'ui', 'ux', 'java'],
    strengths: ['High user engagement', 'Direct impact on users', 'Great for building personal apps'],
    overview: 'Mobile Development focuses on creating applications for smartphones and tablets. It is perfect for those who want to build products that people carry in their pockets.',
    resources: [
      'Swift Playgrounds',
      'Android Developers Training',
      'Flutter Documentation',
      'React Native Express',
      'Ray Wenderlich'
    ],
    avoid: ['Ignoring platform-specific design guidelines', 'Over-complicating the UI', 'Neglecting offline functionality'],
    tips: ['Focus on one platform (iOS or Android) first', 'Learn about mobile UX/UI principles', 'Test on real devices as much as possible'],
    roadmap: [
      { title: 'Platform Choice', detail: 'Decide between Native (Swift/Kotlin) or Cross-platform (Flutter/React Native).' },
      { title: 'UI Fundamentals', detail: 'Learn layout systems, navigation, and platform-specific UI components.' },
      { title: 'Data & APIs', detail: 'Understand how to fetch data from APIs and store data locally.' },
      { title: 'Advanced Features', detail: 'Explore push notifications, camera access, and location services.' },
      { title: 'App Store Prep', detail: 'Learn about app submission processes and performance optimization.' }
    ],
    milestones: ['First simple app', 'API integration', 'Complex UI build', 'App store submission']
  },
  'AI & Machine Learning': {
    icon: '🤖',
    fit: ['python', 'math', 'linear algebra', 'calculus', 'neural networks', 'deep learning', 'pytorch', 'tensorflow'],
    strengths: ['Cutting-edge technology', 'High salary potential', 'Solving complex problems'],
    overview: 'AI & ML involves teaching computers to learn from data. It is ideal for students who love math, logic, and the future of technology.',
    resources: [
      'Fast.ai',
      'Andrew Ng’s ML Course (Coursera)',
      'PyTorch Tutorials',
      'Kaggle Competitions',
      'DeepLearning.AI'
    ],
    avoid: ['Treating ML as a "black box"', 'Ignoring the importance of data cleaning', 'Overfitting models'],
    tips: ['Master Python and NumPy first', 'Understand the math behind the algorithms', 'Start with simple linear regression'],
    roadmap: [
      { title: 'Math & Python', detail: 'Solidify your Python skills and learn necessary Linear Algebra and Calculus.' },
      { title: 'Classical ML', detail: 'Learn supervised and unsupervised learning algorithms like SVMs and K-means.' },
      { title: 'Deep Learning', detail: 'Dive into Neural Networks, CNNs, and RNNs using PyTorch or TensorFlow.' },
      { title: 'NLP or Computer Vision', detail: 'Specialize in Natural Language Processing or Computer Vision.' },
      { title: 'Deployment', detail: 'Learn how to deploy models using Flask, FastAPI, or cloud services.' }
    ],
    milestones: ['Basic ML model', 'Neural network build', 'Specialized project', 'Model deployment']
  },
  'Cloud Engineering': {
    icon: '☁️',
    fit: ['aws', 'azure', 'gcp', 'infrastructure', 'networking', 'linux', 'automation'],
    strengths: ['Essential for modern tech', 'Scalable career path', 'High demand for certified pros'],
    overview: 'Cloud Engineering is about managing and building infrastructure on platforms like AWS or Azure. It suits those who like systems and scalability.',
    resources: [
      'AWS Training and Certification',
      'Microsoft Learn (Azure)',
      'A Cloud Guru',
      'Cloud Academy',
      'Google Cloud Skills Boost'
    ],
    avoid: ['Ignoring cost management', 'Neglecting security best practices', 'Over-provisioning resources'],
    tips: ['Get a foundational certification (e.g., AWS Cloud Practitioner)', 'Learn Infrastructure as Code (Terraform)', 'Understand networking in the cloud'],
    roadmap: [
      { title: 'Cloud Basics', detail: 'Understand what cloud computing is and the core services offered by providers.' },
      { title: 'Core Services', detail: 'Learn about compute (EC2), storage (S3), and networking (VPC).' },
      { title: 'Security & IAM', detail: 'Master Identity and Access Management and cloud security principles.' },
      { title: 'Automation', detail: 'Learn Infrastructure as Code (IaC) using Terraform or CloudFormation.' },
      { title: 'Architecture', detail: 'Design scalable and resilient systems using cloud-native patterns.' }
    ],
    milestones: ['Cloud Practitioner cert', 'Basic VPC setup', 'IaC project', 'Scalable architecture']
  },
  'DevOps': {
    icon: '♾️',
    fit: ['docker', 'kubernetes', 'ci/cd', 'linux', 'automation', 'scripting', 'git'],
    strengths: ['Bridging dev and ops', 'Focus on efficiency', 'High demand in enterprise'],
    overview: 'DevOps is about automating the software delivery process. It is perfect for those who like to make things run smoothly and efficiently.',
    resources: [
      'The DevOps Handbook',
      'KodeKloud',
      'Linux Foundation',
      'Docker Documentation',
      'Kubernetes.io'
    ],
    avoid: ['Automating bad processes', 'Ignoring developer experience', 'Neglecting monitoring and logging'],
    tips: ['Master Linux and Git first', 'Learn one scripting language (Python or Bash)', 'Focus on CI/CD pipelines'],
    roadmap: [
      { title: 'Linux & Scripting', detail: 'Become proficient in Linux administration and Bash/Python scripting.' },
      { title: 'Containerization', detail: 'Learn Docker for packaging applications and managing environments.' },
      { title: 'CI/CD Pipelines', detail: 'Build automated pipelines using Jenkins, GitHub Actions, or GitLab CI.' },
      { title: 'Orchestration', detail: 'Master Kubernetes for managing containerized applications at scale.' },
      { title: 'Monitoring & SRE', detail: 'Learn about monitoring, logging, and Site Reliability Engineering principles.' }
    ],
    milestones: ['Linux proficiency', 'Dockerized app', 'Working CI/CD pipeline', 'K8s cluster management']
  },
  'UI/UX Design': {
    icon: '🎨',
    fit: ['figma', 'design', 'user research', 'prototyping', 'psychology', 'visuals', 'accessibility'],
    strengths: ['Creative and analytical', 'Direct impact on user experience', 'Great for visual thinkers'],
    overview: 'UI/UX Design is about creating intuitive and beautiful interfaces. It suits students who are creative and care about how users interact with products.',
    resources: [
      'Google UX Design Professional Certificate',
      'Figma YouTube Channel',
      'Laws of UX',
      'Nielsen Norman Group',
      'Design Better by InVision'
    ],
    avoid: ['Designing without user research', 'Ignoring accessibility', 'Focusing only on aesthetics'],
    tips: ['Build a portfolio of case studies', 'Learn Figma inside and out', 'Practice critiquing existing designs'],
    roadmap: [
      { title: 'Design Principles', detail: 'Learn about typography, color theory, layout, and hierarchy.' },
      { title: 'UX Research', detail: 'Understand user personas, journey mapping, and usability testing.' },
      { title: 'UI Tools', detail: 'Master Figma or Adobe XD for creating high-fidelity designs and prototypes.' },
      { title: 'Interaction Design', detail: 'Learn how to design animations and transitions that enhance the experience.' },
      { title: 'Portfolio Building', detail: 'Create 2-3 detailed case studies showing your design process.' }
    ],
    milestones: ['First wireframe', 'High-fidelity prototype', 'User test report', 'Design portfolio']
  },
  'Game Development': {
    icon: '🎮',
    fit: ['unity', 'unreal engine', 'c#', 'c++', 'math', 'physics', '3d modeling', 'storytelling'],
    strengths: ['Highly engaging', 'Combines art and logic', 'Passionate community'],
    overview: 'Game Development is about creating interactive experiences. It is ideal for those who love games and want to understand the mechanics behind them.',
    resources: [
      'Unity Learn',
      'Unreal Engine Learning',
      'Brackeys (YouTube)',
      'GameDev.tv',
      'GDC Vault'
    ],
    avoid: ['Starting with a "dream game" that is too big', 'Ignoring game design for just coding', 'Neglecting performance optimization'],
    tips: ['Start by making clones of simple games (Pong, Flappy Bird)', 'Focus on one engine (Unity or Unreal)', 'Participate in Game Jams'],
    roadmap: [
      { title: 'Engine Basics', detail: 'Learn the interface and basic scripting in Unity (C#) or Unreal (C++).' },
      { title: 'Game Mechanics', detail: 'Understand physics, input handling, and basic game loops.' },
      { title: 'Assets & Audio', detail: 'Learn how to import and manage 3D models, 2D sprites, and sound effects.' },
      { title: 'UI & Systems', detail: 'Build menus, inventory systems, and save/load functionality.' },
      { title: 'Polishing & Publishing', detail: 'Learn about optimization, bug fixing, and publishing to platforms like Itch.io.' }
    ],
    milestones: ['First simple game', 'Game jam entry', 'Complex system build', 'Published game']
  },
  'Blockchain Development': {
    icon: '⛓️',
    fit: ['solidity', 'ethereum', 'smart contracts', 'cryptography', 'web3', 'rust', 'decentralization'],
    strengths: ['Innovative field', 'High demand for niche skills', 'Focus on security and trust'],
    overview: 'Blockchain Development involves building decentralized applications and smart contracts. It suits those interested in cryptography and new economic models.',
    resources: [
      'CryptoZombies',
      'Ethereum.org Developers',
      'Buildspace',
      'Alchemy University',
      'ConsenSys Academy'
    ],
    avoid: ['Ignoring security in smart contracts', 'Over-engineering solutions', 'Neglecting the "Web2" parts of Web3'],
    tips: ['Understand the basics of Bitcoin and Ethereum first', 'Learn Solidity for smart contracts', 'Practice on testnets before mainnet'],
    roadmap: [
      { title: 'Blockchain Basics', detail: 'Understand decentralization, consensus mechanisms, and how blocks work.' },
      { title: 'Smart Contracts', detail: 'Learn Solidity and how to write, test, and deploy smart contracts.' },
      { title: 'Web3 Integration', detail: 'Use Ethers.js or Web3.js to connect frontend apps to the blockchain.' },
      { title: 'Advanced Security', detail: 'Learn about common vulnerabilities like reentrancy and how to audit contracts.' },
      { title: 'DeFi & NFTs', detail: 'Explore Decentralized Finance protocols and NFT standards (ERC-721/1155).' }
    ],
    milestones: ['First smart contract', 'DApp frontend', 'Testnet deployment', 'Security audit project']
  },
  'Software Engineering': {
    icon: '💻',
    fit: ['java', 'python', 'c++', 'algorithms', 'data structures', 'backend', 'system design'],
    strengths: ['Versatile skills', 'Strong foundation for any tech role', 'Focus on problem solving'],
    overview: 'Software Engineering focuses on the principles of building robust and scalable software. It is the foundation for many other tech careers.',
    resources: [
      'LeetCode',
      'GeeksforGeeks',
      'CS50 (Harvard)',
      'System Design Primer',
      'Clean Code (Book)'
    ],
    avoid: ['Ignoring data structures and algorithms', 'Writing "spaghetti" code', 'Neglecting testing'],
    tips: ['Practice coding problems regularly', 'Learn about design patterns', 'Focus on writing readable and maintainable code'],
    roadmap: [
      { title: 'Programming Basics', detail: 'Master one language (Java, Python, or C++) and basic logic.' },
      { title: 'Data Structures & Algos', detail: 'Study arrays, linked lists, trees, and sorting/searching algorithms.' },
      { title: 'Backend Development', detail: 'Learn about servers, databases (SQL/NoSQL), and API design.' },
      { title: 'System Design', detail: 'Understand how to design large-scale systems and handle concurrency.' },
      { title: 'Software Lifecycle', detail: 'Learn about testing, debugging, and the software development life cycle (SDLC).' }
    ],
    milestones: ['Algorithm mastery', 'Full-stack project', 'System design doc', 'Open source contribution']
  }
};