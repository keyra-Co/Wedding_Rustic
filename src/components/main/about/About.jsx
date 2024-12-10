/* eslint-disable react/prop-types */
// Style Component
import './About.css';

// Background Path
import background from '../../../assets/decorations/bgRustic.png';

// Background Component
import Background from '../../background/Background';

// Animate
import { useAnimate } from '../../../utils/observ';

// Ornamens Border
import ornamenBorderRight from '../../../assets/ornamens/rusticFlower1.png';
import ornamenBorderLeft from '../../../assets/ornamens/rusticFlower2.png';

// Ornamen Component
import { OrnamensTop, OrnamensDown } from '../../ornamen/Ornamen';

export default function About() {
  return (
    <section className="section about">
      <OrnamensTop />
      <Background background={background} />
      <AboutCoupleContainer />
      <OrnamensDown />
    </section>
  );
}

function AboutCoupleContainer() {
  const setRef = useAnimate();

  return (
    <div className="about__couple-container">
      <div className="about__opening">
        <h2 ref={setRef} className="about__opening-title hiddenUp">
          Assalamu&apos;alaikum Wr. Wb.
        </h2>
        <p ref={setRef} className="about__opening-paragraph hiddenDown">
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
        </p>
      </div>
      <AboutCouple name={'Noermina Rossya'} father={'Agus Toni'} mother={'Siti Barkah'} gender={'Putri'}>
        <ImageFrame image={'bride-removebg.png'} />
      </AboutCouple>
      <span ref={setRef} className="about__ampersand hiddenUp">
        &
      </span>
      <AboutCouple name={'Dimas Agustianto'} father={'H. Sulistiyono (Alm)'} mother={'Hj. Soginah'} gender={'Putra'}>
        <ImageFrame image={'groom-removebg.png'} />
      </AboutCouple>
    </div>
  );
}

function AboutCouple({ name, father, mother, gender, children }) {
  return (
    <div className="about__couple-item">
      {children}
      <h3 className="about__couple-name appearDownScroll timeline-fast">{name}</h3>
      <p className="about__couple-description appearUpScroll timeline-normal">
        {gender} dari
        <br></br>Bapak {father}
        <br></br>& Ibu {mother}
      </p>
    </div>
  );
}

function ImageFrame({ image }) {
  const setRef = useAnimate();

  return (
    <div ref={setRef} className="about__couple-image-container hiddenScale delay">
      <img ref={setRef} loading="lazy" src={ornamenBorderLeft} aria-hidden className="about__ornamen-border-left shrinking" />
      <img src={`images/${image}`} alt="bride image" className="about__couple-image" />
      <img ref={setRef} loading="lazy" src={ornamenBorderRight} aria-hidden className="about__ornamen-border-right shrinking" />
    </div>
  );
}
