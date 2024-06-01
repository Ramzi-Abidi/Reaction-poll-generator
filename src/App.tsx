import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TextPoll from "./pages/TextPoll";
import ImageUploadPoll from "./pages/ImagesPoll";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
// import Carousel from "./pages/Carousel";
import TextFormatter from "./pages/TextFormatter";

const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/text-poll" element={<TextPoll />} />
                    <Route path="/image-poll" element={<ImageUploadPoll />} />
                    {/* <Route path="/carousel" element={<Carousel />} /> */}
                    <Route path="/text-formatter" element={<TextFormatter />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Router>
    );
};

export default App;
