import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import SamplePage from './pages/SamplePage';




function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<SamplePage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
