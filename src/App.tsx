import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TextPoll from "./pages/TextPoll";
import ImageUploadPoll from "./pages/ImagesPoll";
import NoMatch from "./pages/NoMatch";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TextPoll />} />
                <Route path="/image-poll" element={<ImageUploadPoll />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
};

export default App;
