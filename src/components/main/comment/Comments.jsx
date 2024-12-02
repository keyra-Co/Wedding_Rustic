import './Comments.css';
// Data Comments

// Background Path
import background from '../../../assets/decorations/bgRustic1.png';

// Background Component
import Background from '../../background/Background';

// Components Ornamens
import { OrnamensTop, OrnamensDown } from '../../ornamen/Ornamen';

// Animate
import { useAnimate } from '../../../utils/observ';

// Comments Form and Show
import CommentForm from '../../commentForm/commentForm';
import ShowComment from '../../showComment/ShowComments';

export default function Comments() {
  const setRef = useAnimate();

  return (
    <section className="comment section">
      <OrnamensTop />
      <Background background={background} />
      <h2 ref={setRef} className="comment__title hiddenUp">
        Ucapkan Sesuatu
      </h2>
      <p ref={setRef} className="comment__paragraph hiddenDown">
        Berikan ucapan & do&apos;a restu
      </p>
      <div className="comment__container">
        <CommentForm />
        <ShowComment />
      </div>
      <OrnamensDown />
    </section>
  );
}
