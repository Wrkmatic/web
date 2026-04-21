import useScrollAnimation from '../../hooks/useScrollAnimation';

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="solution section" aria-label="The solution">
      <div className="container">
        <div className="solution__inner reveal" ref={ref}>

          <h2 className="solution__headline">
            How we actually build it.
          </h2>

          <div className="solution__body">
            <p>
              At Wrkmatic, we start with a call to understand what your business
              does and where it breaks down. No pitch decks. No pre-built demos.
            </p>
            <p>
              Then we scope tightly — one system, one problem, one clear outcome.
              Everything is built from scratch around your process, not forced
              around a template.
            </p>
            <p>
              Everything we ship is yours. Clean code. Full ownership. Priced so it
              makes sense for a business that's still proving itself out.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
