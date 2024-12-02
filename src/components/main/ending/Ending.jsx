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
      <p className="ending__paragraph">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan
        doa restunya, kami mengucapkan terima kasih.
      </p>
      <p ref={setRef} className="ending__word hiddenUp">
        Two souls become one, two hearts beat as one
      </p>
      <h2 className="ending__closing">Wassalamu&apos;alaikum Wr. Wb.</h2>
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
