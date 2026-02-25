import useScrollAnimation from '../../hooks/useScrollAnimation';

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="solution section" aria-label="The solution">
      <div className="container">
        <div className="solution__inner reveal" ref={ref}>

          <h2 className="solution__headline">
            This is where Wrkmatic comes in.
          </h2>

          <div className="solution__body">
            <p>
              We sit down with you, learn your business, and build exactly what you
              need — nothing more, nothing less.
            </p>
            <p>
              Custom AI automation that cuts out the manual work. CRMs that fit your
              sales process like they were always meant to. Lead generation systems
              that bring the right people to your door.
            </p>
            <p>
              Everything we build is yours. Designed around your workflow, your
              team, your goals. And priced so it actually makes sense for a growing
              business.
            </p>
          </div>

          <p className="solution__transition">
            Here's what we build.
          </p>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
