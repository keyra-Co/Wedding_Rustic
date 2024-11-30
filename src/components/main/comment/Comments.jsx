/* eslint-disable react/prop-types */
import './Comments.css';
// Data Comments
import { comments } from '../../../data/dataComments';

// Background Path
import background from '../../../assets/decorations/bgRustic1.png';

// Background Component
import Background from '../../background/Background';

// Components Ornamens
import { OrnamensTop, OrnamensDown } from '../../ornamen/Ornamen';

export default function Comments() {
  // Map the data comment into element
  const commentsPerson = comments.map((comment) => <CommentPerson key={comment.name} {...comment} />);

  return (
    <section className="comment section">
      <OrnamensTop />
      <Background background={background} />
      <h2 className="comment__title appearDownScroll timeline-fast">Ucapan & Do&apos;a</h2>
      <div className="comment__container">{commentsPerson}</div>
      <OrnamensDown />
    </section>
  );
}

function CommentPerson({ initial, name, place, comment }) {
  return (
    <div className="comment__item appearDownScroll timeline-veryslow">
      <div className="comment__account">{initial}</div>
      <div className="comment__bubble">
        <div className="account__name">
          {name} <span className="account__place">{place}</span>
        </div>
        <div className="account__comment">{comment}</div>
      </div>
    </div>
  );
}
