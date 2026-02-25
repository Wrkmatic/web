import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ClosingCTA = () => {
  const ref = useScrollAnimation();

  return (
    <section className="closing-cta section" aria-label="Call to action">
      <div className="container">
        <div className="closing-cta__inner reveal" ref={ref}>

          <h2 className="closing-cta__headline">
            Ready to stop working around your tools?
          </h2>

          <p className="closing-cta__body">
            Let's talk about what you actually need. One free call, no pitch,
            no pressure — just a straight conversation about your business and
            whether we can help.
          </p>

          {/* CTA — glass-dark with blue border */}
          <div>
            <Link to="/contact" className="btn btn-glass">
              Book a Free Consultation
            </Link>
          </div>

          <p className="closing-cta__under">
            Most clients know within the first call if Wrkmatic is the right fit.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
