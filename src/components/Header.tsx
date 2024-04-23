import { Link, useLocation } from "react-router-dom";

type headerProp = {
    pollIcon: string;
};

export const Header: React.FC<headerProp> = (prop: headerProp) => {
    const { pollIcon } = prop;
    const location = useLocation();

    return (
        <>
            <div className="header">
                <div className="star-poll-img-container">
                    <img src={pollIcon} alt="Give repo star!" />
                </div>

                <div className="main-title"> Reaction poll generator </div>
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
            <div className="reaction-poll-description">
                <p>
                    Create LinkedIn polls effortlessly! ✅<br /> Our app allows you to
                    create custom <b>Text/Images polls</b> to gather feedback,
                    understand trends, or initiate discussions within your
                    network. 📊🗳️
                </p>
            </div>

            <div className="links">
                <nav>
                    <ul>
                        <li
                            className="first-link"
                            style={{
                                background:
                                    location.pathname === "/"
                                        ? "#c9e3fa54"
                                        : "transparent",
                            }}
                        >
                            <Link to="/" style={{ padding: 5 }}>
                                Text poll
                            </Link>
                        </li>
                        <li
                            className="second-link"
                            style={{
                                background:
                                    location.pathname === "/image-poll"
                                        ? "#c9e3fa54"
                                        : "transparent",
                            }}
                        >
                            <Link to="/image-poll" style={{ padding: 5 }}>
                                Images poll
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
