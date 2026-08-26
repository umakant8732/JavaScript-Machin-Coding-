import { useEffect, useState } from 'react';
import './ProgressBar.css';
import { Link } from 'react-router-dom';

function ProgressBar() {


  const [progress, setProgress] = useState(0)


  useEffect(() => {
   const timerId = setInterval( () => {
      setProgress(prev => {
        if(prev === 100) return 0
        return prev + 1
      })
    }, 1000);

    return () => {
      clearInterval(timerId)
    } 
  },[])
  

  return (
    <>
      <Link to="/" className="back-link" style={{ display: 'block', maxWidth: '600px', margin: '20px auto 0' }}>← Back to Dashboard</Link>
      <div className="progress-page-wrapper">
        <h1>My Progress Bar</h1>
        <div className="progress-track" >
          <div className="progress-fill" style={{ width: `${progress}%` }}>
            {progress} %
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
