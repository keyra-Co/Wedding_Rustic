// CommentForm.js
import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Style Component
import './CommentForm.css';

// DOM Purify
import DOMPurify from 'dompurify';

// Data Comments
import { useComment } from '../../utils/useComments';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [kehadiran, setKehadiran] = useState(null);
  const [status, setStatus] = useState(null);

  const { comments } = useComment();

  const hadir = comments.filter((comment) => comment.kehadiran);
  const tidakHadir = comments.filter((comment) => !comment.kehadiran);

  // Fungsi untuk mengirim komentar
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || kehadiran === null) {
      alert('Nama, komentar dan kehadiran tidak boleh kosong!');
      return;
    }
    setStatus('Mengirim...');
    try {
      await addDoc(collection(db, 'comments'), {
        text: DOMPurify.sanitize(comment), // Menyaring input
        name: DOMPurify.sanitize(name),
        kehadiran: kehadiran,
        timestamp: serverTimestamp(),
      });
      setComment('');
      setName('');
      setStatus('Komentar berhasil dikirim!');
    } catch (error) {
      console.error('Error adding comment: ', error);
      setStatus('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className="comment-form">
      <div className="comment-form__info">
        <div className="comment-form__info-item hadir">
          {hadir.length} <span>Hadir</span>
        </div>
        <div className="comment-form__info-item">
          {tidakHadir.length} <span>Tidak Hadir</span>
        </div>
      </div>
      <form className="comment-form__container" onSubmit={handleSubmit}>
        <input
          maxLength={20}
          minLength={3}
          className="comment-form__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama"
        />
        <textarea
          maxLength={200}
          minLength={3}
          className="comment-form__input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Ucapan"
        />
        <select
          className="comment-form__select"
          value={kehadiran}
          onChange={(e) => setKehadiran(e.target.value === 'true')} // Mengubah nilai string menjadi boolean
        >
          <option value="true">Hadir</option>
          <option value="false">Tidak hadir</option>
          <option value disabled selected>
            Konfirmasi Kehadiran
          </option>
        </select>
        <button className="comment-form__btn btn" type="submit">
          Kirim Komentar
        </button>
        <div>{status && <p className="status">{status}</p>}</div>
      </form>
    </div>
  );
};

export default CommentForm;
