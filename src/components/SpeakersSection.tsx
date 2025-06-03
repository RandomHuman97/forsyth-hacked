import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Terminal, Cpu, Code2, Database, Network, Binary, Cloud, Palette, GitBranch } from 'lucide-react';

const SpeakersSection = () => {
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);
  const [terminalMode, setTerminalMode] = useState(false);

  const speakers = [
    {
      id: 'speaker_01',
      name: 'Sarah Chen',
      role: 'AI Research Lead @ Google',
      bio: 'Pioneering ethical machine learning and neural networks. Previously at DeepMind.',
      image: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
      social: { twitter: '#', github: '#', linkedin: '#' },
      tech: ['Cpu', 'Binary'],
      color: 'text-purple-400'
    },
    {
      id: 'speaker_02',
      name: 'Marcus Rodriguez',
      role: 'CTO @ TechStart',
      bio: 'Building next-gen cloud infrastructure. Open source contributor to Kubernetes.',
      image: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
      social: { twitter: '#', github: '#', linkedin: '#' },
      tech: ['Database', 'Network', 'Cloud'],
      color: 'text-blue-400'
    },
    {
      id: 'speaker_03',
      name: 'Elena Garcia',
      role: 'Senior Data Scientist @ NVIDIA',
      bio: 'Focusing on large-scale data analysis and machine learning model optimization.',
      image: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', // Placeholder image
      social: { twitter: '#', github: '#', linkedin: '#' },
      tech: ['Database', 'Cpu', 'Cloud'],
      color: 'text-green-400'
    },
    // Add remaining speakers...
  ];

  const techIconMap = {
    Cpu: Cpu,
    Binary: Binary,
    Database: Database,
    Network: Network,
    Cloud: Cloud,
    Palette: Palette,
    GitBranch: GitBranch,
    Code2: Code2,
    Terminal: Terminal,
    // Add other icons as needed
  };

  return (
    <section className="relative py-28 overflow-hidden font-outfit">
      {/* Dynamic grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-small-white/[0.05]"></div>
        {/* Code-like background effect */}
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(100, 255, 100, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(100, 255, 100, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <header className="text-left mb-20">
          <div className="bg-black/50 p-2 text-left rounded inline-block mb-2" style={{backgroundImage: 'linear-gradient(rgba(100, 255, 100, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(100, 255, 100, 0.05) 1px, transparent 1px)', backgroundSize: '10px 10px'}}>
            <h2 className="font-mono text-2xl text-left">
              <span className="text-green-400 text-left">$</span> <span className="text-white">SPEAKERS_LIST</span> <span className="text-blue-400">--hackathon-2025</span>
            </h2>
          </div>
          <h3 className="font-paytone text-left text-5xl md:text-7xl uppercase text-brand-beige text-brand-beige">
            SPEAKERS
          </h3>
        </header>

        {/* Visual Mode - Modern Speaker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className={`relative bg-brand-charcoal-muted p-6 overflow-hidden transition-all duration-300 ${activeSpeaker === speaker.id ? 'border-brand-yellow' : 'border-transparent'}`}
              onMouseEnter={() => setActiveSpeaker(speaker.id)}
              onMouseLeave={() => setActiveSpeaker(null)}
            >
              {/* Animated hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-brand-yellow/5 to-transparent opacity-0 ${activeSpeaker === speaker.id ? 'opacity-100 animate-pulse' : ''} transition-opacity duration-300`}></div>
              
              {/* Speaker content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full border-2 ${speaker.color.replace('text', 'border')} overflow-hidden transition-transform ${activeSpeaker === speaker.id ? 'scale-110' : ''}`}>
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className={`font-paytone text-xl uppercase text-brand-yellow`}>{speaker.name}</h4>
                    <p className="font-outfit text-md text-brand-beige">{speaker.role}</p>
                  </div>
                </div>

                <p className="font-outfit text-sm text-brand-beige mb-6">
                  {speaker.bio}
                </p>

                <div className="flex gap-3">
                  <a href={speaker.social.twitter} className="p-2 bg-gray-900 rounded hover:bg-twitter-blue transition-all hover:-translate-y-1">
                    <Twitter size={16} />
                  </a>
                  <a href={speaker.social.github} className="p-2 bg-gray-900 rounded hover:bg-gray-700 transition-all hover:-translate-y-1">
                    <Github size={16} />
                  </a>
                  <a href={speaker.social.linkedin} className="p-2 bg-gray-900 rounded hover:bg-linkedin-blue transition-all hover:-translate-y-1">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

              {/* Tech icons */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-20">
                {speaker.tech.map((iconName, i) => {
                  const Icon = techIconMap[iconName as keyof typeof techIconMap];
                  if (!Icon) return null;
                  return (
                    <div key={i} className="text-brand-yellow">
                      <Icon size={20} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center font-mono text-sm text-gray-500 border-t border-gray-800 pt-8">
          <div className="font-mono text-sm text-gray-500">
            {speakers.length} SPEAKERS LOADED • SYSTEM_READY
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;