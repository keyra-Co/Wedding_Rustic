// Style Component
import './Ending.css';

// Animate
import { useAnimate } from '../../../utils/observ';

// Background Component
import Background from '../../background/Background';

// Background Path
import background from '../../../assets/decorations/bgRustic.png';

// Ornamens Component
import { OrnamensDown, OrnamensTop } from '../../ornamen/Ornamen';

export default function Ending() {
  const setRef = useAnimate();

  return (
    <section className="ending section">
      <OrnamensTop />
      <Background background={background} />
      <p ref={setRef} className="ending__word hiddenUp">
        Two souls become one, two hearts beat as one
      </p>
      <h2 ref={setRef} className="ending__title hiddenDown">
        Rossya & Dimas
      </h2>
      <p ref={setRef} className="ending__closer hiddenScale">
        - Thank You -
      </p>
      <OrnamensDown />
    </section>
  );
}
