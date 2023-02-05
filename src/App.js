import Login from "./Pages/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ShareAnActivity from "./Pages/ShareAnActivity";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path= "/" element={<Home />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/shareactivity" element={<ShareAnActivity />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
