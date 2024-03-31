import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import PicsUploadPoll from "./pages/PicsUploadPoll";
import NoMatch from "./pages/NoMatch";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pics-upload-poll" element={<PicsUploadPoll />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
};

export default App;
