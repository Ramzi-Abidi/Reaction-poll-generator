import { Link } from "react-router-dom";

type headerProp = {
    pollIcon: string;
};

export const Header: React.FC<headerProp> = (prop: headerProp) => {
    const { pollIcon } = prop;
    return (
        <>
            <div className="header">
                <div className="star-poll-img-container">
                    <Link to="/">
                        <img src={pollIcon} alt="Linkedin Engagement" />
                    </Link>
                </div>

                <div className="main-title"> Pollify </div>
                <div className="github-link">
                    <a
                        href="https://github.com/Ramzi-Abidi/reaction-poll-generator"
                        target="_blank"
                    >
                        <div className="star-github-img-container">
                            <img src="imgs/github.png" alt="Give repo star!" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};
