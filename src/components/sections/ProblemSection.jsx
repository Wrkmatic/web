import useScrollAnimation from '../../hooks/useScrollAnimation';

const ProblemSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="problem section" aria-label="The problem">
      <div className="container">
        <div className="problem__inner reveal" ref={ref}>

          <h2 className="problem__headline">
            Sound familiar?
          </h2>

          <div className="problem__body">
            <p>
              Your sales team is chasing leads on spreadsheets. Your CRM was built
              for someone else's business. Half your day goes on tasks a system
              should be handling. And every tool you've tried has come with a
              workaround.
            </p>
            <p>
              The problem isn't your team. It's that nothing was built for the way
              you actually operate.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
