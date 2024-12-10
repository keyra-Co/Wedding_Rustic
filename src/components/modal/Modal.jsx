/* eslint-disable react/prop-types */
import './Modal.css';

import { data1, data2 } from '../../data/dataReceiver';

import { useState } from 'react';

export default function Modal({ data }) {
  const [copyMessage, setCopyMessage] = useState(''); // Menyimpan pesan copy
  const modal = document.getElementById('modal');

  function copyData(text) {
    navigator.clipboard.writeText(text);
    setCopyMessage('Berhasil dicopy!'); // Menampilkan pesan

    // Menghilangkan pesan setelah 2 detik
    setTimeout(() => {
      setCopyMessage('');
    }, 2000);
  }

  function onClick() {
    modal.close();
  }

  return (
    <dialog id="modal">
      {copyMessage && <div className="modal__message">{copyMessage}</div>}
      {data ? (
        <ModalContent onClick={onClick} title={data1.title}>
          <ModalBtn init="column" name={data1.name} desc={data1.desc} onClick={() => copyData(data1.desc)} />
        </ModalContent>
      ) : (
        <ModalContent onClick={onClick} title={data2.title}>
          <ModalBtn name={data2.name1} desc={data2.desc1} onClick={() => copyData(data2.desc1)} />
          <ModalBtn name={data2.name2} desc={data2.desc2} onClick={() => copyData(data2.desc2)} />
        </ModalContent>
      )}
    </dialog>
  );
}

function ModalContent({ title, onClick, children }) {
  return (
    <div className="modal__container">
      <h2 className="modal__title">{title}</h2>
      <div className="line"></div>
      <div className="modal__body">{children}</div>
      <div className="line"></div>
      <button className="modal__btn-close btn" onClick={onClick}>
        close
      </button>
    </div>
  );
}

function ModalBtn({ name, desc, onClick, init = '' }) {
  return (
    <div className="modal__btn-container">
      <h3 className="modal__name">{name}</h3>
      <div className={`modal__btn-info ${init}`}>
        <div className="modal__description">{desc}</div>
        <button className="modal__btn-copy btn" onClick={onClick}>
          copy
        </button>
      </div>
    </div>
  );
}
