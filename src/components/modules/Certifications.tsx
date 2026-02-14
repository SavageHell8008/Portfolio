import { Shield, Award, CheckCircle, ExternalLink } from 'lucide-react';

const CERTIFICATIONS = [
    {
        name: "Building LLM Applications",
        fullName: "Building LLM Applications With Prompt Engineering",
        issuer: "NVIDIA",
        date: "May 2025",
        credentialId: "v4rq1bLWQO-q2Ymc5WeYfw",
        skills: ["Large Language Models", "Prompt Engineering"],
        color: "from-green-500 to-emerald-500"
    },
    {
        name: "CCNA",
        fullName: "CCNA: Enterprise Networking, Security, and Automation",
        issuer: "Cisco",
        date: "May 2024",
        credentialId: "Verified",
        skills: ["Networking", "Security", "Automation"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        name: "CyberSecurity Essentials",
        fullName: "Cyber Security Essentials",
        issuer: "Cisco",
        date: "Jul 2024",
        credentialId: "Verified",
        skills: ["Cybersecurity", "Social Engineering"],
        color: "from-red-500 to-orange-500"
    },
    {
        name: "Ethical Hacking Essentials",
        fullName: "Ethical Hacking Essentials (EHE)",
        issuer: "EC-Council",
        date: "Oct 2023",
        credentialId: "254491",
        skills: ["Ethical Hacking", "Penetration Testing"],
        color: "from-purple-500 to-pink-500"
    },
    {
        name: "ML for IIoT",
        fullName: "Machine Learning for Industrial IoT",
        issuer: "Elixir Strategic Management",
        date: "Dec 2024",
        credentialId: "Verified",
        skills: ["Machine Learning", "Deep Learning", "IIoT"],
        color: "from-indigo-500 to-purple-500"
    },
    {
        name: "Smart Industrial Connectivity",
        fullName: "Smart Industrial Connectivity",
        issuer: "Elixir Strategic Management",
        date: "2024",
        credentialId: "Verified",
        skills: ["IIoT", "AIML"],
        color: "from-teal-500 to-cyan-500"
    },
    {
        name: "Introduction to IoT",
        fullName: "Introduction to Internet of Things",
        issuer: "Elixir Strategic Management",
        date: "Jul 2022",
        credentialId: "Verified",
        skills: ["IoT", "IIoT"],
        color: "from-blue-400 to-indigo-500"
    },
    {
        name: "IIoT Communication",
        fullName: "IIoT Communication and Standard Interface",
        issuer: "Elixir Strategic Management",
        date: "Jan 2022",
        credentialId: "Verified",
        skills: ["IIoT", "Communication Protocols"],
        color: "from-green-400 to-teal-500"
    },
    {
        name: "Data Science & Analytics",
        fullName: "Data Science and Analytics",
        issuer: "Elixir Strategic Management",
        date: "Jan 2023",
        credentialId: "Verified",
        skills: ["Data Analysis", "Data Science"],
        color: "from-orange-500 to-red-500"
    },
    {
        name: "Google Cloud Compute",
        fullName: "The Basics of Google Cloud Compute Skill Badge",
        issuer: "Google",
        date: "Oct 2024",
        credentialId: "Verified",
        skills: ["Google Cloud", "Cloud Computing"],
        color: "from-yellow-500 to-orange-500"
    },
    {
        name: "Switching & Routing",
        fullName: "Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        date: "May 2024",
        credentialId: "Verified",
        skills: ["Networking", "Routing", "Switching"],
        color: "from-cyan-500 to-blue-500"
    },
    {
        name: "CCNA: Intro to Networks",
        fullName: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        date: "May 2024",
        credentialId: "Verified",
        skills: ["Networking", "Network Fundamentals"],
        color: "from-blue-600 to-indigo-600"
    },
    {
        name: "Manage Security Risks",
        fullName: "Play It Safe: Manage Security Risks",
        issuer: "Google",
        date: "Feb 2024",
        credentialId: "Verified",
        skills: ["Auditing", "Social Engineering", "Risk Management"],
        color: "from-red-400 to-pink-500"
    },
    {
        name: "Foundations of Cybersecurity",
        fullName: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "Jan 2024",
        credentialId: "Verified",
        skills: ["CIA Triad", "Cybersecurity Fundamentals"],
        color: "from-green-600 to-teal-600"
    },
    {
        name: "HTML & CSS",
        fullName: "Build Responsive Real-World Websites with HTML and CSS",
        issuer: "Udemy",
        date: "Dec 2023",
        credentialId: "UC-d7e82844-857b-4233-8325-800da6255cab",
        skills: ["JavaScript", "CSS", "HTML", "Web Development"],
        color: "from-orange-400 to-yellow-500"
    },
    {
        name: "Dark Web & Cryptocurrency",
        fullName: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
        issuer: "EC-Council",
        date: "Feb 2024",
        credentialId: "294631",
        skills: ["Cryptocurrency", "Anonymity", "Dark Web"],
        color: "from-gray-700 to-gray-900"
    },
    {
        name: "SQL Injection Attacks",
        fullName: "SQL Injection Attacks",
        issuer: "EC-Council",
        date: "Oct 2023",
        credentialId: "254476",
        skills: ["SQL", "SQL Injection", "Web Security"],
        color: "from-pink-500 to-rose-600"
    }
];

export default function Certifications() {
    return (
        <div className="h-full w-full p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-primary/20">
            {/* Header */}
            <div className="border-b border-cyber-primary/30 pb-6 mb-8">
                <h1 className="text-4xl font-bold text-cyber-primary tracking-tighter mb-2">CERTIFICATIONS_DB</h1>
                <p className="text-cyber-text-dim text-sm">VERIFIED CREDENTIALS & PROFESSIONAL CERTIFICATIONS</p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-cyber-bg-light/30 border border-cyber-primary/20 rounded-lg p-6 hover:border-cyber-primary/60 transition-all group relative overflow-hidden"
                    >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                        {/* Badge Icon */}
                        <div className="relative z-10 flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-cyber-bg-dark border-2 border-cyber-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Shield className="text-cyber-primary" size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-cyber-text-primary group-hover:text-cyber-primary transition-colors">
                                        {cert.name}
                                    </h2>
                                    <p className="text-cyber-text-dim text-xs">{cert.issuer}</p>
                                </div>
                            </div>
                            <CheckCircle className="text-cyber-secondary" size={24} />
                        </div>

                        {/* Full Name */}
                        <p className="text-cyber-text-primary text-sm mb-4 relative z-10">{cert.fullName}</p>

                        {/* Details */}
                        <div className="space-y-2 mb-4 relative z-10">
                            <div className="flex items-center gap-2 text-xs">
                                <Award size={14} className="text-cyber-secondary" />
                                <span className="text-cyber-text-dim">Issued: {cert.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <ExternalLink size={14} className="text-cyber-secondary" />
                                <span className="text-cyber-text-dim font-mono">{cert.credentialId}</span>
                            </div>
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {cert.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-cyber-bg-dark border border-cyber-primary/30 text-cyber-text-primary text-xs font-mono hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Verification Badge */}
                        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Shield size={80} className="text-cyber-primary" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Footer */}
            <div className="mt-8 p-6 bg-cyber-primary/5 border border-cyber-primary/30 rounded-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-3xl font-bold text-cyber-primary">{CERTIFICATIONS.length}</div>
                        <div className="text-xs text-cyber-text-dim">Total Certifications</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-cyber-secondary">17</div>
                        <div className="text-xs text-cyber-text-dim">Verified Credentials</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-cyber-primary">2025</div>
                        <div className="text-xs text-cyber-text-dim">Latest Achievement</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
