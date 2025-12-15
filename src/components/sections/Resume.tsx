import { GraduationCap, Award } from "lucide-react";

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Engineering in Computer Science",
      institution: "Pune Institute of Computer Technology",
      period: "2021 — 2025",
      description: "Focused on software development, algorithms, and machine learning applications.",
    },
    {
      title: "Higher Secondary Education",
      institution: "Maharashtra State Board",
      period: "2019 — 2021",
      description: "Science stream with focus on Mathematics and Computer Science.",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      period: "2024",
      description: "Cloud architecture and deployment strategies.",
    },
    {
      title: "Google Cybersecurity Professional",
      issuer: "Google",
      period: "2023",
      description: "Security operations and threat analysis.",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta",
      period: "2023",
      description: "Modern React and frontend development practices.",
    },
  ];

  const skills = [
    { name: "Python / C++ / Rust", percentage: 90 },
    { name: "JavaScript / TypeScript", percentage: 95 },
    { name: "MERN Stack", percentage: 92 },
    { name: "Machine Learning", percentage: 85 },
    { name: "Cybersecurity Tools", percentage: 80 },
    { name: "Cloud & DevOps", percentage: 78 },
  ];

  return (
    <section id="resume" className="py-12 animate-fade-up">
      <h2 className="text-3xl font-semibold mb-2">
        My <span className="gradient-text">Resume</span>
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-medium">Education</h3>
          </div>
          <div className="space-y-0">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="text-sm text-primary mb-1">{item.institution}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-medium">Certifications</h3>
          </div>
          <div className="space-y-0">
            {certifications.map((item, index) => (
              <div key={index} className="timeline-item">
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="text-sm text-primary mb-1">{item.issuer}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-primary">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-bar-fill"
                style={{ 
                  width: `${skill.percentage}%`,
                  animationDelay: `${index * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
