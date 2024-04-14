import React, { useState } from "react";
import { Link } from "react-router-dom";

type headerProp = {
    pollIcon: string;
};

export const Header = (prop: headerProp) => {
    const { pollIcon } = prop;
    const [textPoll, setTextPoll] = useState(true);

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

            <div className="links">
                <nav>
                    <ul>
                        <li className="first-link">
                            <Link to="/" style={{ padding: 5 }}>
                                Text poll
                            </Link>
                        </li>
                        <li className="second-link">
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
