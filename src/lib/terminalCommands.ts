export const COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'experience',
  'certs',
  'contact',
  'clear',
  'exit',
  'whoami',
  'ls',
  'cat',
  'date',
  'uptime',
];

interface CommandResult {
  content: string;
  isError: boolean;
}

const HELP_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                    AVAILABLE COMMANDS                            ║
╠══════════════════════════════════════════════════════════════════╣
║  help        Display this help message                           ║
║  about       Display user profile and bio                        ║
║  skills      List technical skillset                             ║
║  projects    View cybersecurity & development projects           ║
║  experience  Show work experience and internships                ║
║  certs       Display certifications                              ║
║  contact     Show contact information                            ║
║  clear       Clear the terminal screen                           ║
║  exit        Terminate session                                   ║
╠══════════════════════════════════════════════════════════════════╣
║  BONUS COMMANDS                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  whoami      Display current user                                ║
║  ls          List directory contents                             ║
║  cat <file>  Read file contents                                  ║
║  date        Show current date/time                              ║
║  uptime      Show system uptime                                  ║
╚══════════════════════════════════════════════════════════════════╝
`;

const ABOUT_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                         USER PROFILE                             ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│  Name:      Aditya Chougale                                     │
│  Role:      Full Stack Developer & Cybersecurity Enthusiast     │
│  Location:  India                                               │
│  Status:    Available for opportunities                         │
└─────────────────────────────────────────────────────────────────┘

[BIO]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A passionate Full Stack Developer with deep expertise in:
• MERN Stack Development
• Artificial Intelligence & Machine Learning
• Cybersecurity & Ethical Hacking
• Cloud & DevOps Solutions

Building secure, innovative solutions that push boundaries.
Always learning, always hacking (ethically), always coding.

"The only way to do great work is to love what you do."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

const SKILLS_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                      TECHNICAL SKILLS                            ║
╚══════════════════════════════════════════════════════════════════╝

[PROGRAMMING LANGUAGES]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  JavaScript   ████████████████████░░░░  85%
  TypeScript   ███████████████████░░░░░  80%
  Python       ████████████████████░░░░  85%
  Rust         ██████████████░░░░░░░░░░  60%
  Go           ███████████░░░░░░░░░░░░░  50%

[FRAMEWORKS & LIBRARIES]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  React.js     ████████████████████░░░░  90%
  Node.js      ███████████████████░░░░░  85%
  Express.js   ███████████████████░░░░░  85%
  Next.js      ████████████████░░░░░░░░  70%
  TensorFlow   ██████████████░░░░░░░░░░  60%

[CYBERSECURITY]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Penetration Testing    ████████████████████░░░░  80%
  Network Security       ███████████████████░░░░░  75%
  Malware Analysis       ██████████████░░░░░░░░░░  60%
  OSINT                  ████████████████████░░░░  85%
  CTF Competitions       ████████████████████░░░░  80%

[DEVOPS & CLOUD]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Docker       ████████████████████░░░░  80%
  Kubernetes   ██████████████░░░░░░░░░░  60%
  AWS          ███████████████████░░░░░  75%
  Linux        ████████████████████░░░░  85%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

const PROJECTS_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                         PROJECTS                                 ║
╚══════════════════════════════════════════════════════════════════╝

[01] NETWORK INTRUSION DETECTION SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Type:    Cybersecurity / Machine Learning
     Tools:   Python, Scikit-learn, Wireshark, Scapy
     Status:  ██████████ COMPLETED
     
     ML-powered system for detecting network anomalies
     and potential intrusion attempts in real-time.

[02] SECURE FILE ENCRYPTION TOOL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Type:    Security Tool
     Tools:   Rust, AES-256, ChaCha20
     Status:  ██████████ COMPLETED
     
     Military-grade encryption tool for secure
     file storage and transmission.

[03] AI-POWERED THREAT INTELLIGENCE PLATFORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Type:    Cybersecurity / AI
     Tools:   Python, TensorFlow, React, Node.js
     Status:  ████████░░ IN PROGRESS
     
     Platform that aggregates and analyzes threat
     data using machine learning models.

[04] DISTRIBUTED PASSWORD CRACKER (EDUCATIONAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Type:    Educational / Research
     Tools:   Go, Redis, Docker
     Status:  ██████████ COMPLETED
     
     Demonstrates distributed computing concepts
     for password security awareness training.

[05] MERN STACK E-COMMERCE PLATFORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     Type:    Full Stack Development
     Tools:   MongoDB, Express, React, Node.js
     Status:  ██████████ COMPLETED
     
     Full-featured e-commerce platform with secure
     payment integration and admin dashboard.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

const EXPERIENCE_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                       EXPERIENCE                                 ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│  [2024]  FULL STACK DEVELOPER INTERN                            │
│          Tech Startup, Remote                                   │
├─────────────────────────────────────────────────────────────────┤
│  • Developed RESTful APIs using Node.js and Express            │
│  • Built responsive React components with TypeScript            │
│  • Implemented authentication & authorization systems           │
│  • Collaborated in Agile development environment                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [2023]  CYBERSECURITY RESEARCH INTERN                          │
│          Security Research Lab                                  │
├─────────────────────────────────────────────────────────────────┤
│  • Conducted vulnerability assessments on web applications      │
│  • Assisted in penetration testing engagements                  │
│  • Developed automated security scanning tools                  │
│  • Participated in CTF competitions                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [2023]  MACHINE LEARNING PROJECT CONTRIBUTOR                   │
│          Open Source Community                                  │
├─────────────────────────────────────────────────────────────────┤
│  • Contributed to ML-based malware detection project            │
│  • Implemented data preprocessing pipelines                     │
│  • Optimized model performance and accuracy                     │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

const CERTS_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                      CERTIFICATIONS                              ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│  [✓]  AWS Certified Cloud Practitioner                          │
│       Amazon Web Services                                       │
│       Issued: 2024                                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [✓]  CompTIA Security+ (In Progress)                           │
│       CompTIA                                                   │
│       Expected: 2024                                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [✓]  Google Cybersecurity Professional Certificate            │
│       Google / Coursera                                         │
│       Issued: 2023                                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [✓]  Meta Front-End Developer Certificate                     │
│       Meta / Coursera                                           │
│       Issued: 2023                                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [✓]  TryHackMe Top 5% Global Ranking                           │
│       TryHackMe Platform                                        │
│       Active                                                    │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

const CONTACT_TEXT = `
╔══════════════════════════════════════════════════════════════════╗
║                    CONTACT INFORMATION                           ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ██ EMAIL                                                       │
│     adityachougale49@gmail.com                                  │
│                                                                 │
│  ██ GITHUB                                                      │
│     github.com/adityachougale                                   │
│                                                                 │
│  ██ LINKEDIN                                                    │
│     linkedin.com/in/adityachougale                              │
│                                                                 │
│  ██ TWITTER                                                     │
│     @adityachougale                                             │
│                                                                 │
│  ██ RESUME                                                      │
│     /AdityaChougale_Resume.pdf                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════╗
║  >> OPEN FOR COLLABORATIONS AND OPPORTUNITIES <<                ║
╚══════════════════════════════════════════════════════════════════╝
`;

const FILES = {
  'about.txt': ABOUT_TEXT,
  'skills.txt': SKILLS_TEXT,
  'projects.txt': PROJECTS_TEXT,
  'experience.txt': EXPERIENCE_TEXT,
  'contact.txt': CONTACT_TEXT,
  'readme.txt': `
Welcome to my terminal portfolio!
Type 'help' to see available commands.
  `,
  'secret.txt': `
╔══════════════════════════════════════════════════════════════════╗
║                     YOU FOUND THE SECRET!                        ║
╚══════════════════════════════════════════════════════════════════╝

Congratulations, curious hacker!

You've discovered the hidden file. This shows you have
the curiosity and persistence that makes a great developer.

"The best way to predict the future is to create it."
                                    - Alan Kay

Keep exploring!
`,
};

const LS_OUTPUT = `
total 7
-rw-r--r-- 1 guest users  1337 Dec 23 about.txt
-rw-r--r-- 1 guest users  2048 Dec 23 skills.txt
-rw-r--r-- 1 guest users  3072 Dec 23 projects.txt
-rw-r--r-- 1 guest users  1536 Dec 23 experience.txt
-rw-r--r-- 1 guest users   512 Dec 23 contact.txt
-rw-r--r-- 1 guest users   128 Dec 23 readme.txt
-rw------- 1 guest users   ??? Dec 23 secret.txt
`;

export function getCommandOutput(command: string): CommandResult {
  const parts = command.trim().split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
      return { content: HELP_TEXT, isError: false };
    
    case 'about':
      return { content: ABOUT_TEXT, isError: false };
    
    case 'skills':
      return { content: SKILLS_TEXT, isError: false };
    
    case 'projects':
      return { content: PROJECTS_TEXT, isError: false };
    
    case 'experience':
      return { content: EXPERIENCE_TEXT, isError: false };
    
    case 'certs':
    case 'certifications':
      return { content: CERTS_TEXT, isError: false };
    
    case 'contact':
      return { content: CONTACT_TEXT, isError: false };
    
    case 'whoami':
      return { content: 'guest', isError: false };
    
    case 'ls':
    case 'dir':
      return { content: LS_OUTPUT, isError: false };
    
    case 'cat':
      if (args.length === 0) {
        return { content: 'cat: missing file operand', isError: true };
      }
      const fileName = args[0].toLowerCase();
      if (FILES[fileName as keyof typeof FILES]) {
        return { content: FILES[fileName as keyof typeof FILES], isError: false };
      }
      return { content: `cat: ${args[0]}: No such file or directory`, isError: true };
    
    case 'date':
      return { content: new Date().toString(), isError: false };
    
    case 'uptime':
      return { content: ` ${new Date().toTimeString().split(' ')[0]} up 1337 days, 13:37,  1 user,  load average: 0.00, 0.01, 0.05`, isError: false };
    
    case 'pwd':
      return { content: '/home/guest', isError: false };
    
    case 'hostname':
      return { content: 'ADITYA-WORKSTATION', isError: false };
    
    case 'uname':
      return { content: 'SecureOS 1.3.7 x86_64', isError: false };
    
    case 'id':
      return { content: 'uid=1000(guest) gid=1000(users) groups=1000(users)', isError: false };
    
    case 'echo':
      return { content: args.join(' '), isError: false };
    
    case 'sudo':
      return { content: 'Nice try! But this is a demo terminal. 😉', isError: true };
    
    case 'rm':
    case 'delete':
      return { content: 'Permission denied: Read-only filesystem', isError: true };
    
    case 'hack':
    case 'exploit':
      return { content: `
[!] INTRUSION DETECTED
[!] Logging IP address...
[!] Just kidding! 😄 This is a portfolio website.
    Type "projects" to see my actual security projects.
`, isError: false };
    
    case 'matrix':
      return { content: `
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

(Okay, I'm not that cool. Type "help" for real commands.)
`, isError: false };
    
    default:
      return { 
        content: `Command not recognized: '${cmd}'. Type "help" for available commands.`, 
        isError: true 
      };
  }
}
