// Style Component
import './Divider.css';

export default function Divider() {
  return (
    <div className="divider" aria-label="divider">
      <h2 className="divider__title">The Wedding Of Rossya & Dimas</h2>
      <div className="divider__scroll-container">
        <div className="divider__scroll-title">Scroll Kebawah</div>
        <div className="divider__scroll-down">
          <div className="divider__scroll-dot"></div>
        </div>
      </div>
    </div>
  );
}
