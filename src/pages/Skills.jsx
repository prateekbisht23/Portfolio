function SkillBar({ name, percentage, color }) {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>{name}</span>
          <span>{percentage}%</span>
        </div>
        <div className="bg-gray-800 rounded-full">
          <div 
            className="h-2 rounded-full bg-gradient-to-r"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: color
            }}
          />
        </div>
      </div>
    );
  }
  
  function SkillSection({ title, skills, color }) {
    return (
      <div className="bg-dark rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div>
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.level}
              color={color}
            />
          ))}
        </div>
      </div>
    );
  }
  
  function Skills() {
    const frontendSkills = [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ];
  
    const backendSkills = [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
    ];
  
    return (
      <div className="grid grid-cols-2 gap-6">
        <SkillSection 
          title="Frontend Development" 
          skills={frontendSkills}
          color="#3b82f6"
        />
        <SkillSection 
          title="Backend Development" 
          skills={backendSkills}
          color="#22c55e"
        />
      </div>
    );
  }
  
  export default Skills;