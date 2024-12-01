/* eslint-disable react/prop-types */
// Style Component
import './Event.css';

// QR Code Image
import barCode from '../../../assets/ornamens/qrCodeLocation.jpeg';

// Utils
import { useState } from 'react';

// Background Path
import background from '../../../assets/decorations/bgRustic1.png';

// Background Component
import Background from '../../background/Background';

// Animate
import { useAnimate } from '../../../utils/observ';

// Ornamens Component
import { OrnamensDown, OrnamensTop } from '../../ornamen/Ornamen';

export default function Event() {
  const setRef = useAnimate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section event">
      <OrnamensTop />
      <Background background={background} />
      <EventDetail handleOpen={setIsOpen} title={'Akad Nikah'} hour={'09.00 WIB - 10.00 WIB'} setRef={setRef}>
        <svg
          className="anima hiddenDownSvg"
          ref={setRef}
          style={{ '--anima': 3600 }}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 480 480"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M344,184c-57.344,0-104,46.656-104,104s46.656,104,104,104s104-46.656,104-104S401.344,184,344,184z M344,376
c-20.416,0-39.184-7.048-54.128-18.76C309.528,329.96,320,297.896,320,264c0-11.344-1.192-22.672-3.552-33.672
c-0.928-4.328-5.152-7.08-9.504-6.152c-4.32,0.928-7.072,5.176-6.144,9.504c2.12,9.896,3.2,20.096,3.2,30.32
c0,29.784-8.984,57.992-25.864,82.168c-5.376-6.08-9.904-12.896-13.448-20.288c0.608-0.56,1.168-1.184,1.6-1.944
C276.56,305.736,282,285.008,282,264c0-4.416-3.576-8-8-8s-8,3.584-8,8c0,14.136-2.896,28.088-8.32,41.008
C256.6,299.504,256,293.824,256,288c0-48.52,39.48-88,88-88c48.52,0,88,39.48,88,88S392.52,376,344,376z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M372.024,154.936l5.864-2.936H384c4.424,0,8-3.584,8-8s-3.576-8-8-8h-8c-0.928,0-1.8,0.32-2.672,0.632l24.92-31.152
c0.136-0.168,0.184-0.368,0.304-0.536c0.2-0.288,0.352-0.584,0.512-0.904c0.28-0.568,0.488-1.136,0.632-1.744
c0.08-0.32,0.16-0.624,0.192-0.96c0.088-0.808,0.048-1.616-0.112-2.424c-0.024-0.128,0.016-0.248-0.016-0.376
c-0.008-0.024-0.024-0.04-0.032-0.072c-0.216-0.848-0.568-1.672-1.072-2.424l-24-36.24c-1.488-2.224-3.984-3.8-6.656-3.8h-48
c-2.672,0-5.168,1.576-6.656,3.8l-24,36.12c-1.112,1.664-1.448,3.688-1.184,5.576c-0.664,3.968,1.752,7.72,5.544,8.888
l20.968,26.224C313.8,136.304,312.928,136,312,136h-8c-4.424,0-8,3.584-8,8s3.576,8,8,8h6.112l5.872,2.936
C254.392,167.888,208,222.616,208,288c0,22.064,5.4,42.856,14.768,61.304C204.656,362.632,182.608,370,160,370
c-58.448,0-106-47.552-106-106s47.552-106,106-106c24.344,0,48.112,8.456,66.928,23.8c3.424,2.792,8.456,2.28,11.256-1.144
c2.792-3.424,2.272-8.464-1.152-11.256c-21.664-17.664-49.024-27.4-77.04-27.4c-67.272,0-122,54.728-122,122S92.728,386,160,386
c25.416,0,50.24-8.08,70.808-22.752c4.08,6.12,8.728,11.824,13.72,17.192C220.064,398.2,190.384,408,160,408
c-79.4,0-144-64.6-144-144s64.6-144,144-144c36.16,0,70.728,13.456,97.344,37.88c3.24,2.984,8.304,2.768,11.296-0.488
c2.992-3.256,2.776-8.32-0.488-11.304C238.584,118.952,200.168,104,160,104C71.776,104,0,175.776,0,264s71.776,160,160,160
c34.704,0,68.584-11.52,96.192-32.32C279.912,411.8,310.536,424,344,424c74.992,0,136-61.008,136-136
C480,222.616,433.608,167.888,372.024,154.936z M307.872,96.792L324.28,72h39.44l15.328,23.232l-35.24,8.928L307.872,96.792z
 M370.952,113.992l-25.704,32.128c-0.784,0.992-1.72,0.992-2.496,0l-24.504-30.624l24.184,4.84c0.512,0.104,1.048,0.16,1.568,0.16
c0.648,0,1.304-0.08,1.936-0.24L370.952,113.992z M344,408c-66.168,0-120-53.832-120-120s53.832-120,120-120s120,53.832,120,120
S410.168,408,344,408z"
              />
            </g>
          </g>
        </svg>
      </EventDetail>
      <EventDetail handleOpen={setIsOpen} buttonDefault={false} title={'Resepsi'} hour={'11.00 WIB - 15.00 WIB'} setRef={setRef}>
        <svg
          className="anima hiddenDownSvg"
          ref={setRef}
          style={{ '--anima': 400 }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 256 256"
          xmlSpace="preserve"
        >
          <defs></defs>
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 83.766 10.435 H 76.23 v -0.266 c 0 -2.326 -1.892 -4.218 -4.217 -4.218 h -0.913 c -2.326 0 -4.218 1.892 -4.218 4.218 v 0.266 H 49.674 v -0.266 c 0 -2.326 -1.892 -4.218 -4.217 -4.218 h -0.913 c -2.325 0 -4.217 1.892 -4.217 4.218 v 0.266 H 23.117 v -0.266 c 0 -2.326 -1.892 -4.218 -4.217 -4.218 h -0.913 c -2.325 0 -4.217 1.892 -4.217 4.218 v 0.266 H 6.234 C 2.797 10.435 0 13.232 0 16.669 v 10.428 v 2 v 48.716 c 0 3.438 2.797 6.234 6.234 6.234 h 77.531 c 3.438 0 6.234 -2.797 6.234 -6.234 V 29.098 v -2 V 16.669 C 90 13.232 87.203 10.435 83.766 10.435 z M 68.883 10.169 c 0 -1.223 0.995 -2.218 2.218 -2.218 h 0.913 c 1.223 0 2.217 0.995 2.217 2.218 v 6.507 c 0 1.223 -0.994 2.217 -2.217 2.217 h -0.913 c -1.223 0 -2.218 -0.995 -2.218 -2.217 V 10.169 z M 42.326 10.169 c 0 -1.223 0.995 -2.218 2.217 -2.218 h 0.913 c 1.222 0 2.217 0.995 2.217 2.218 v 6.507 c 0 1.223 -0.995 2.217 -2.217 2.217 h -0.913 c -1.223 0 -2.217 -0.995 -2.217 -2.217 V 10.169 z M 15.77 10.169 c 0 -1.223 0.995 -2.218 2.217 -2.218 H 18.9 c 1.223 0 2.217 0.995 2.217 2.218 v 6.507 c 0 1.223 -0.995 2.217 -2.217 2.217 h -0.913 c -1.223 0 -2.217 -0.995 -2.217 -2.217 V 10.169 z M 88 77.814 c 0 2.335 -1.899 4.234 -4.234 4.234 H 6.234 C 3.899 82.049 2 80.149 2 77.814 V 29.098 h 86 V 77.814 z M 2 27.098 V 16.669 c 0 -2.335 1.899 -4.234 4.234 -4.234 h 7.535 v 4.241 c 0 2.325 1.892 4.217 4.217 4.217 H 18.9 c 2.325 0 4.217 -1.892 4.217 -4.217 v -4.241 h 17.209 v 4.241 c 0 2.325 1.892 4.217 4.217 4.217 h 0.913 c 2.326 0 4.217 -1.892 4.217 -4.217 v -4.241 h 17.209 v 4.241 c 0 2.325 1.892 4.217 4.218 4.217 h 0.913 c 2.325 0 4.217 -1.892 4.217 -4.217 v -4.241 h 7.535 c 2.335 0 4.234 1.899 4.234 4.234 v 10.428 H 2 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <path
              d="M 24.193 67.806 c 3.716 2.352 11.693 5.321 16.415 6.111 c 0.055 0.009 0.11 0.014 0.165 0.014 c 0.286 0 0.561 -0.123 0.753 -0.342 c 1.513 -1.73 3.285 -4.324 4.874 -7.015 c 1.6 2.818 3.431 5.526 4.885 7.187 c 0.192 0.22 0.467 0.342 0.753 0.342 c 0.055 0 0.109 -0.005 0.165 -0.014 c 4.217 -0.704 11.344 -3.357 14.665 -5.46 c 6.999 -4.431 10.595 -11.349 8.55 -16.447 c -0.978 -2.439 -2.899 -4.332 -5.411 -5.328 c -2.644 -1.05 -5.682 -0.986 -8.646 0.162 c -2.926 -5.184 -8.02 -6.796 -12.02 -5.761 c -0.857 -1.273 -1.929 -2.306 -3.213 -3.012 c -2.554 -1.406 -5.535 -1.679 -8.392 -0.768 c -3.043 0.97 -5.633 3.201 -7.374 6.328 c -3.329 -1.315 -6.746 -1.399 -9.715 -0.221 c -2.787 1.106 -4.919 3.206 -6.004 5.913 C 12.371 55.162 16.387 62.863 24.193 67.806 z M 60.003 48.732 c 0.239 0.491 0.823 0.704 1.321 0.472 c 2.731 -1.266 5.554 -1.441 7.945 -0.491 c 1.996 0.792 3.521 2.288 4.293 4.213 c 1.658 4.137 -1.68 10.161 -7.765 14.014 c -2.948 1.866 -9.368 4.287 -13.371 5.076 c -1.495 -1.813 -3.336 -4.642 -4.87 -7.479 c 1.221 -2.239 2.24 -4.413 2.792 -6.079 c 1.901 -5.737 1.788 -11.348 -0.008 -15.375 C 53.576 42.468 57.667 43.902 60.003 48.732 z M 16.5 50.238 c 0.879 -2.192 2.614 -3.896 4.886 -4.798 c 1.155 -0.458 2.398 -0.686 3.684 -0.686 c 1.737 0 3.551 0.416 5.332 1.24 c 0.496 0.229 1.083 0.02 1.321 -0.472 c 1.487 -3.074 3.838 -5.255 6.622 -6.143 c 2.331 -0.741 4.751 -0.523 6.82 0.614 c 4.506 2.479 5.888 9.98 3.285 17.835 c -1.241 3.746 -5.137 10.485 -8.065 14.015 c -4.502 -0.873 -11.787 -3.617 -15.122 -5.728 C 18.271 61.689 14.586 55.012 16.5 50.238 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
      </EventDetail>
      {isOpen && <ModalEvent handleOpen={setIsOpen} />}
      <OrnamensDown />
    </section>
  );
}

function EventDetail({ children, title, hour, setRef, buttonDefault = true, handleOpen }) {
  function onClick() {
    handleOpen(true);
  }

  return (
    <div className="event__detail-container">
      {children}
      <h2 ref={setRef} className="event__title hiddenScale">
        {title}
      </h2>
      <h3 className="event__date appearUpScroll timeline-veryslow">Minggu, 22 Desember 2024</h3>
      <p className="event__hour appearUpScroll timeline-veryslow">{hour}</p>
      <h3 ref={setRef} className="event__location hiddenUp">
        Hall Pertemuan Komplek Arco Sawangan
      </h3>
      <p ref={setRef} className="event__location-street hiddenDown">
        Jl. Rambutan No.3, Duren Seribu, Kec. Bojongsari, Kota Depok, Jawa Barat 16518
      </p>
      {buttonDefault ? (
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Hall+Pertemuan+Komplek+ARCO+Sawangan/@-6.4363113,106.7464756,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e86823041b27:0x143f92c29ad373a0!8m2!3d-6.4363113!4d106.7464756!16s%2Fg%2F11c5fz0tnx?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
          className="event__btn-location btn growScroll timeline-veryslow"
        >
          <i className="bi bi-geo-alt-fill"></i>
          Lihat Lokasi
        </a>
      ) : (
        <button onClick={onClick} className="event__btn-location btn Qr growScroll timeline-veryslow">
          <i className="bi bi-qr-code-scan"></i> Scan Lokasi
        </button>
      )}
    </div>
  );
}

function ModalEvent({ handleOpen }) {
  function onClick() {
    handleOpen(false);
  }
  return (
    <div className="event__modal">
      <button onClick={onClick} className="event__close-btn">
        <i className="bi bi-x-square"></i>
      </button>
      <img src={barCode} alt="QR Code" loading="lazy" className="event__modal-image" />
    </div>
  );
}
