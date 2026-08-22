import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>React Machine Coding Playground 🚀</h1>
        <p>A collection of front-end challenges built with React and custom CSS.</p>
      </header>
      
      <div className="cards-grid">
        <Link to="/todo-list" className="card-link">
          <div className="card">
            <div className="card-badge">JavaScript & React</div>
            <h2>1. Todo List</h2>
            <p>Implement a clean todo application with task addition, editing, deleting, toggle states, and persistent local storage.</p>
            <span className="card-action">Start Coding →</span>
          </div>
        </Link>
        
        {/* Placeholder for future tasks */}
       
      </div>
    </div>
  );
}
