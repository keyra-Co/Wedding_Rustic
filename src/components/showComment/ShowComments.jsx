/* eslint-disable react/prop-types */

// Style Component
import './ShowComments.css';

import { useComment } from '../../utils/useComments';

export default function ShowComment() {
  const { loading, comments, error } = useComment();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (comments.length === 0) {
    return <div>Belum ada komentar</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="show-comment__container">
      <h3 className="show-comment__title">Komentar ({comments.length})</h3>
      <ul className="show-comment__item-container">
        {comments.map((comment) => (
          <ShowCommentItem key={comment.id} {...comment} />
        ))}
      </ul>
    </div>
  );
}

function ShowCommentItem({ name, timestamp, kehadiran, text }) {
  return (
    <li className="show-comment__item">
      <div className="show-comment__item-head">
        <h4 className="show-comment__name">{name}</h4>
        <p className="show-comment__time">{timestamp}</p>
      </div>
      <p className="show-comment__text">{text}</p>
      <p className="show-comment__kehadiran">Kehadiran: {kehadiran ? 'Datang' : 'Tidak Datang'}</p>
    </li>
  );
}
