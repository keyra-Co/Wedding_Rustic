/* eslint-disable react/prop-types */
import './Modal.css';

import { data1, data2 } from '../../data/dataReceiver';

export default function Modal({ data }) {
  const datas = data ? data1 : data2;

  const modal = document.getElementById('modal');

  function onClick() {
    modal.close();
  }

  function copyText() {
    navigator.clipboard.writeText(datas.desc);
    alert('Text Telah Disalin');
  }

  return (
    <dialog id="modal">
      <div className="modal__container">
        <div className="modal__head">
          <h2 className="modal__title">{datas.title}</h2>
        </div>
        <div className="line"></div>
        <div className="modal__body">
          <h3 className="modal__name">{datas.name}</h3>
          <div className="modal__info">{datas.info}</div>
          <div className="modal__description">{datas.desc}</div>
        </div>
        <div className="line"></div>
        <div className="modal__footer">
          <button className="modal__btn-close btn" onClick={onClick}>
            close
          </button>
          <button className="modal__btn-copy btn" onClick={copyText}>
            copy
          </button>
        </div>
      </div>
    </dialog>
  );
}
