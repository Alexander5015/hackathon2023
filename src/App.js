import Login from "./Pages/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path= "/" element={<Home />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
