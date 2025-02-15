function SkillBar({ name, percentage, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 px-1 font-extralight text-sm text-[rgba(220,220,220,0.9)]">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="bg-gray-800 rounded-full">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            opacity: 0.7
          }}
        />
      </div>
    </div>
  );
}

function SkillSection({ title, skills, color }) {
  return (
    <div
      className="rounded-lg p-4 bg-[rgb(23,23,23)] border border-[rgb(55,55,55)] hover:border-[rgb(65,65,65)] transition-all ">
      {/* Use the thinnest font */}
      <h3 className="text-lg font-thin text-gray-300 mb-4">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} percentage={skill.level} color={color} />
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

  const developerTools = [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 88 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Team Leadership", level: 95 },
    { name: "Communication", level: 84 },
  ];

  return (
    <div className="w-[100vw] my-30 py-8 px-15">
      <div className="w-full border-b border-[#474747] flex items-center mb-10 hover:cursor-pointer">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
          <span className="text-[#d8d8d8] text-sm font-extralight">skills.jsx</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[16px] text-[#d8d8d8] absolute">×</span>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(38,38,38)] p-8 rounded-lg">
        {/* Text Section */}
        <div className="text-[#ababab] text-sm font-extralight mb-6 leading-relaxed">
          <p>interface Skill &#123;</p>
          <div className="px-5">
            <p>name: string;</p>
            <p>level: number;</p>
            <p>experience: string;</p>
            <p>tools: string[];</p>
          </div>
          <p>&#125;</p>
        </div>

        {/* Updated Grid Layout */}
        <div className="grid grid-cols-2 gap-7 px-15">
          <SkillSection title="Frontend Development" skills={frontendSkills} color="#3b82f6" />
          <SkillSection title="Backend Development" skills={backendSkills} color="#22c55e" />
          <SkillSection title="Developer Tools" skills={developerTools} color="#f59e0b" />
          <SkillSection title="Soft Skills" skills={softSkills} color="#f43f5e" />
        </div>
      </div>
    </div>
  );
}

export default Skills;