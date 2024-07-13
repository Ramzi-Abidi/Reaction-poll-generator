import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import HeroTitle from "../components/HeroTitle";
import PollDescr from "../components/PollDescr";
import pollIcon from "/imgs/poll.png";

const Home = () => {
  const title = "Boost Your Audience on LinkedIn";

  return (
    <section>
      <div className="intro">
        <Header pollIcon={pollIcon} />
        <HeroTitle title={title} />
        <PollDescr />
      </div>
      <div className="tools">
        <nav>
          <h1>our tools</h1>
          <ul>
            <li className="link">
              <Link to="/text-poll">Text poll</Link>
            </li>
            <li className="link">
              <Link to="/image-poll">Images poll</Link>
            </li>
            {/* <li className="third-link">
                            <Link to="/carousel" style={{ padding: 5 }}>
                                Carousel generator
                            </Link>
                        </li> */}
            <li className="link">
              <Link to="/text-formatter">Format text</Link>
            </li>
            <li className="link">
              <Link to="/characters-counter">Characters counter</Link>
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
                Create LinkedIn Polls and Modify Texts <br />
                Effortelessly! ✅
              </p>
            </div>
          </div>
          <div>
            <p className="copyright">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;
