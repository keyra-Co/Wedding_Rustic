// Style Component
import './Ending.css';

// Animate
import { useAnimate } from '../../../utils/observ';

// Background Component
import Background from '../../background/Background';

export default function Ending() {
  const setRef = useAnimate();

  return (
    <section className="ending section">
      <Background background={'images/ending.jpeg'} />
      <p ref={setRef} className="ending__word hiddenUp">
        Two souls become one, two hearts beat as one
      </p>
      <h2 ref={setRef} className="ending__title hiddenDown">
        Rossya & Dimas
      </h2>
      <p ref={setRef} className="ending__closer hiddenScale">
        Thank You
      </p>
    </section>
  );
}
