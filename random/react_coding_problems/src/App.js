import './App.css';
import Problems from './problems/00_index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

let count = 0;

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection:'column', height: '100vh' }}>
      <h1>React Coding Problems</h1>
      <div style={{ display: 'flex', flexDirection:'row',height: '100%'}}>
      <BrowserRouter>
        <nav style={{ display: 'flex',flexDirection:'column', width: '200px', background: '#f0f0f0', padding: '20px', boxSizing: 'border-box' }}>
          {Object.keys(Problems).map((key) => (
            <div key={key} style={{ marginBottom: '10px' }}>
              <Link to={`/${key}`} style={{ textDecoration: 'none', color: 'black' }}>
                {`${count++} - ${key}`}
              </Link>
            </div>
          ))}
        </nav>
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            {Object.entries(Problems).map(([key, Element]) => (
              <Route key={key} path={`/${key}`} element={<Element />} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
