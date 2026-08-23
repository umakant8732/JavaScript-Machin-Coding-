import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo/Todo.jsx';
import Tabs from './components/Tabs/Tabs.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Dashboard Route */}
      <Route path="/" element={<Home />} />
      
      {/* Route for Todo List (Placeholder for now) */}
      <Route 
        path="/todo-list" 
        element={
         <Todo/>
        } 
      />

      <Route 
        path="/tabs" 
        element={
         <Tabs/>
        } 
      />
      
      <Route 
        path="/accordion" 
        element={
         <Accordion/>
        } 
      />
    </Routes>
  );
}

export default App;
