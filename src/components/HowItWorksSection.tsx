import React from 'react';
import { Brain, UserPlus, Mail, Code2, Presentation } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserPlus />,
      title: 'Who Can Join',
      description:
        'Hack Forsyth is a hybrid-style hackathon open to all students in grades 9-12. You do not need to be a student in Forsyth County Schools to participate.',
    },
    {
      icon: <Mail />,
      title: 'Register',
      description: 'Sign up by yourself or with up to 3 teammates. Use your email to get updates and access materials.',
    },
    {
      icon: <Brain />,
      title: 'Receive Prompt',
      description:
        'On Monday, the 18th, the prompt will be emailed and posted on the website. It includes details and guidelines.',
    },
    {
      icon: <Code2 />,
      title: 'Build Your Project',
      description: 'Code and create your project from Monday to Friday.',
    },
    {
      icon: <Presentation />,
      title: 'Present!',
      description:
        "On Saturday, present your project! If all members of your team can't make your designated presentation time don't worry. Thoroughly explin all of your project and show contribution from every teammate.",
    },
  ];

 

  return (
    <section className="pt-20 pb-10 my-0 bg-brand-coal">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h3 className="font-paytone text-5xl md:text-6xl text-brand-white mb-6">
            <span className="relative">
              <span className="relative z-10">HOW IT WORKS</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow z-0"></span>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto  cursor-pointer">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-brand-beige border-2 border-brand-charcoal rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02] hover:shadow-[6px_6px_0px_rgba(15,13,14,1)] transition-all"
            >
              <div className=" w-16 h-16 rounded-full bg-brand-yellow border-2 border-brand-charcoal flex items-center justify-center mb-4">
                {React.cloneElement(step.icon, { className: "w-8 h-8 text-black" })}
              </div>
              <h4 className="font-paytone text-xl mb-2 text-black">{`Step ${i + 1}: ${step.title}`}</h4>
              <p className="font-outfit text-base text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
