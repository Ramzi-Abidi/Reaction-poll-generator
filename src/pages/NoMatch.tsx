import { Header } from "../components/Header";
import pollIcon from "/imgs/poll.png";

const NoMatch = () => {
    return (
        <section className="intro">
            <Header pollIcon={pollIcon} />
            <div>404 Page not found!</div>
        </section>
    );
};

export default NoMatch;
