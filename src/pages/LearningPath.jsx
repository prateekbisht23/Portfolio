import { FaBookOpen, FaCalendar } from "react-icons/fa";

function LearningPathCard({ title, source, period, description, topics }) {
    return (
        <div className="bg-dark rounded-lg w-[90%] p-6 border border-gray-800 hover:border-blue-500 transition-all">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <FaBookOpen className="text-sm" />
                        <span>{source}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendar className="text-sm" />
                    <span>{period}</span>
                </div>
            </div>

            <p className="text-gray-400 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                    >
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    );
}

function LearningPath() {
    const learningSteps = [
        {
            title: "JavaScript & ReactJS",
            source: "Self-Learning & Projects",
            period: "Building",
            description:
                "Mastering modern JavaScript, React fundamentals, hooks, state management, and performance optimization.",
            topics: ["JavaScript", "ES6+", "React", "Hooks", "Context API", "Vite"],
        },
        {
            title: "Java Programming",
            source: "Course & Practice",
            period: "Advancing",
            description:
                "Understanding Java basics, OOP concepts, data structures, algorithms, and Java Swing for GUI development.",
            topics: ["Java", "OOP", "Spring Boot", "Data Structures"],
        },
        {
            title: "Backend Development",
            source: "Django & Express.js",
            period: "Next Step",
            description:
                "Learning how to build RESTful APIs, database management, authentication, and server deployment.",
            topics: ["Django", "Express.js", "MongoDB", "REST APIs", "Authentication"],
        },
    ];

    return (
        <div className="w-[100vw] my-30 py-8 px-18">
            <div className="w-full border-b border-[#474747] flex items-center mb-10 hover:cursor-pointer">
                <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
                    <span className="text-[#d8d8d8] text-sm font-extralight">learningPath.jsx</span>
                    <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
                        <span className="hidden group-hover:block text-[16px] text-[#d8d8d8] absolute">×</span>
                    </div>
                </div>
            </div>

            {/* Learning Path Cards with Vertical Line & Dash */}
            <div className="relative space-y-6 ml-6 pl-10 border-l border-[#474747]">
                {learningSteps.map((step, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[44px] top-1/2 -translate-y-1/2 w-2 h-0.5 bg-[#616161]"></div>
                        <LearningPathCard {...step} />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default LearningPath;
