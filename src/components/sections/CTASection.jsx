import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="cta-block" aria-label="Book a consultation">
      <div className="container">
        <div className="cta-block__inner reveal" ref={ref}>
          <h2 className="cta-block__headline">
            Ready to ship the right system?
          </h2>
          <p className="cta-block__sub">
            One call. One scope. One outcome. Book a free consultation and we'll
            tell you exactly what to build — whether we build it or not.
          </p>
          <Link to="/contact" className="btn btn-primary cta-block__btn">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
