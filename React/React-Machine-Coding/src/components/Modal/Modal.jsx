import './Modal.css';
import { Link } from 'react-router-dom';

function Modal() {
  // Yahan apna state banayenge modal ko open/close karne ke liye
  return (
    <>
      <Link to="/" className="back-link" style={{ display: 'block', maxWidth: '600px', margin: '20px auto 0' }}>← Back to Dashboard</Link>
      <div className="modal-page">
        <h1 className="page-title">Custom Modal</h1>
        
        {/* Yahan par apna "Open Modal" ka button aur modal ka HTML structure likhna shuru karein */}

        <button className="open-modal-btn">Open Modal</button>

        <div className="modal-overlay">

          <div className="modal-content">
            <div className="modal-header">
              <h2>Cool Modal</h2>
              <button className="close-modal-btn">
                X
              </button>
            </div>

            <div className="modal-body">
              <div>This is Modal Content</div>
            </div>
          </div>


        </div>
        
      </div>
    </>
  );
}

export default Modal;
