import logo from './logo.svg';
import './App.css';
import TestApi from "./TestApi";
import MyPage from "./MyPage";
import Cashing from "./cashing";
import Filter from "./Filter";
import Local from "./local";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<MyPage/>*/}
                <Router>
                    <Routes>
                        <Route path="/testapi" element={<TestApi/>} />
                        <Route path="/my" element={<MyPage/>} />
                        <Route path="/cashing" element={<Cashing/>} />
                        <Route path="/Filter" element={<Filter/>} />
                        <Route path="/local" element={<Local/>} />
            

                    </Routes>
                </Router>
            </header>

        </div>
    );
}

export default App;
