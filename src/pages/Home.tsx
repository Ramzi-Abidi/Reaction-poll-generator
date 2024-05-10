import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import HeroTitle from "../components/HeroTitle";
import PollDescr from "../components/PollDescr";
import pollIcon from "/imgs/poll.png";

const Home = () => {
    return (
        <section>
            <div className="intro">
                <Header pollIcon={pollIcon} />
                <HeroTitle />
                <PollDescr />
            </div>
            <div className="tools">
                <nav>
                    <h1>our tools</h1>
                    <ul>
                        <li className="first-link">
                            <Link to="/text-poll" style={{ padding: 5 }}>
                                Text poll
                            </Link>
                        </li>
                        <li className="second-link">
                            <Link to="/image-poll" style={{ padding: 5 }}>
                                Images poll
                            </Link>
                        </li>
                        <li className="third-link">
                            <Link to="/carousel" style={{ padding: 5 }}>
                                Carousel generator
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <footer>
                <div className="container">
                    <div className="">
                        <div className="img-container">
                            <img src="/imgs/poll.png" />
                        </div>

                        <div className="">
                            <p>
                                Create LinkedIn Polls and Carousels <br />
                                Effortelessly! ✅
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="copyright">
                            Made With &lt;3 By Ramzi | All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Home;
