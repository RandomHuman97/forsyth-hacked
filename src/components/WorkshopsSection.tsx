import { Code2, Database, Cloud, Layout, Smartphone, Zap } from 'lucide-react';

const WorkshopsSection = () => {
  return (
    <section className="container mx-auto px-8 mt-32 mb-40">
      <header className="text-center mx-auto max-w-[80ch]">
        
        <h3 className="font-heading text-5xl lg:text-6xl xl:text-7xl uppercase mb-8" style={{ WebkitTextStroke: '1px black' }}>
          Hackathon Workshops
        </h3>
        <h4 className="font-outfit text-xl max-w-[45ch] mx-auto">
          Level up your skills before the big event
        </h4>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-8 mt-12">
        {/* Workshop Card 1 */}
        <article className="bg-brand-green rounded-lg p-6 md:p-8 text-brand-charcoal border border-brand-charcoal" style={{ filter: 'drop-shadow(8px 8px 0px var(--brand-charcoal))' }}>
            <figure>
              <Code2 size={48} />
            </figure>
            <header>
              <h5 className="font-heading uppercase font-bold">History of Data Science</h5>
            </header>
            <p className="font-outfit my-1">Learn the history of data science</p>
            <span className="font-outfit block">Chinmayu</span>
        </article>

        {/* Workshop Card 2 */}
        <article className="bg-brand-beige rounded-lg p-6 md:p-8 text-brand-charcoal border border-brand-charcoal" style={{ filter: 'drop-shadow(8px 8px 0px var(--brand-charcoal))' }}>
            <figure>
              <Database size={48} />
            </figure>
            <header>
              <h5 className="font-heading uppercase font-bold">How to deploy applications</h5>
            </header>
            <p className="font-outfit my-1">Learn how applications are deployed in the real world</p>
            <span className="font-outfit block">Nick</span>
        </article>

        {/* Workshop Card 3 */}
        <article className="bg-brand-blue rounded-lg p-6 md:p-8 text-brand-charcoal border border-brand-charcoal" style={{ filter: 'drop-shadow(8px 8px 0px var(--brand-charcoal))' }}>
          <a href="#" className="grid gap-2">
            <figure>
              <Zap size={48} />
            </figure>
            <header>
              <h5 className="font-heading uppercase font-bold">AI & ML Basics</h5>
            </header>
            <p className="font-outfit my-1">Add AI features to your hackathon project.</p>
            <span className="font-outfit underline block">Learn More →</span>
          </a>
        </article>

        {/* Workshop Card 4 */}
        <article className="bg-brand-red rounded-lg p-6 md:p-8 text-brand-charcoal border border-brand-charcoal" style={{ filter: 'drop-shadow(8px 8px 0px var(--brand-charcoal))' }}>
          <a href="#" className="grid gap-2">
            <figure>
              <Cloud size={48} />
            </figure>
            <header>
              <h5 className="font-heading uppercase font-bold">Cloud Deployment</h5>
            </header>
            <p className="font-outfit my-1">Deploy your project to the cloud in minutes.</p>
            <span className="font-outfit underline block">Learn More →</span>
          </a>
        </article>

        {/* Workshop Card 5 */}
        <article className="bg-brand-orange rounded-lg p-6 md:p-8 text-brand-charcoal border border-brand-charcoal" style={{ filter: 'drop-shadow(8px 8px 0px var(--brand-charcoal))' }}>
          <a href="#" className="grid gap-2">
            <figure>
              <Layout size={48} />
            </figure>
            <header>
              <h5 className="font-heading uppercase font-bold">UI/UX Design</h5>
            </header>
            <p className="font-outfit my-1">Create stunning interfaces for your project.</p>
            <span className="font-outfit underline block">Learn More →</span>
          </a>
        </article>

        {/* Workshop Card 6 */}
        <article className="bg-brand-pink rounded-lg p-6 md:p-8 text-brand-charcoal border border-brand-charcoal" style={{ filter: 'drop-shadow(8px 8px 0px var(--brand-charcoal))' }}>
          <a href="#" className="grid gap-2">
            <figure>
              <Smartphone size={48} />
            </figure>
            <header>
              <h5 className="font-heading uppercase font-bold">Mobile First</h5>
            </header>
            <p className="font-outfit my-1">Build responsive mobile applications.</p>
            <span className="font-outfit underline block">Learn More →</span>
          </a>
        </article>
      </div>
    </section>
  );
};

export default WorkshopsSection; 