import { Header } from "../components/Header";
import AnimatePage from "./AnimatedPage";
import pollIcon from "/imgs/poll.png";

const NoMatch = () => {
    return (
        <AnimatePage>
            <section className="intro">
                <Header pollIcon={pollIcon} />

                <div>404 Page not found!</div>
            </section>
        </AnimatePage>
    );
};

export default NoMatch;
