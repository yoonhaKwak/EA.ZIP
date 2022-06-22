import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import SamplePage from './pages/SamplePage';
import SearchPage from './pages/SearchPage';





function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<SamplePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
