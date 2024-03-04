import like from "/imgs/Linkedin-Like-Icon.png";
import love from "/imgs/Linkedin-Love-Icon.png";
import insight from "/imgs/Linkedin-Insightful-Icon.png";
import support from "/imgs/Linkedin-Support-Icon.png";
import curious from "/imgs/Linkedin-Curious-Icon.png";
import celebrate from "/imgs/Linkedin-Celebrate-icon.png";
import { ChangeEvent, useState } from "react";
import Arrow from "./Arrow";
import { icon } from "../utils/types";

const Home = () => {
    const [pollTitle, setPollTitle] = useState<string>("Poll title ...");
    const [icons, setIcons] = useState<icon[]>([]);

    const [allIconsStates, setAllIconsStates] = useState({
        likeState: "",
        loveState: "",
        supportState: "",
        curiousState: "",
        insightState: "",
    });

    type iconStates = {
        likeState: string;
        loveState: string;
        supportState: string;
        curiousState: string;
        insightState: string;
    };

    // Function to update specific icon state
    const handleIconChange = (propertyName: string, newValue: string): void => {
        setAllIconsStates((prevState) => ({
            ...prevState,
            [propertyName]: newValue,
        }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setPollTitle(() => event.target.value);
    };

    const handleCheckBoxChange = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        const checkboxId: string = event.target.id;
        const checked: boolean = event.target.checked;

        const icon: icon = {
            img: "",
            type: "",
            title: "",
        };

        if (checkboxId === "like") {
            if (checked === true) {
                icon.img = like;
                // icon.title = "Work from home";
                icon.type = "like";
                setIcons([...icons, icon]);
            } else {
                const filteredIcons = icons.filter((icon) => {
                    return icon.type !== "like";
                });
                setIcons([...filteredIcons]);
            }
        } else if (checkboxId === "love") {
            if (checked) {
                icon.img = love;
                icon.title = "Work from office";
                icon.type = "love";
                setIcons([...icons, icon]);
            } else {
                const filteredIcons: icon[] = icons.filter((icon) => {
                    return icon.type !== "love";
                });
                setIcons([...filteredIcons]);
            }
        } else if (checkboxId === "celebrate") {
            if (checked) {
                icon.img = celebrate;
                icon.title = "Work hybrid";
                icon.type = "celebrate";
                setIcons([...icons, icon]);
            } else {
                const filteredIcons: icon[] = icons.filter((icon) => {
                    return icon.type !== "celebrate";
                });
                setIcons([...filteredIcons]);
            }
        } else if (checkboxId === "support") {
            if (checked) {
                icon.img = support;
                icon.title = "Just work";
                icon.type = "support";
                setIcons([...icons, icon]);
            } else {
                const filteredIcons: icon[] = icons.filter((icon) => {
                    return icon.type !== "support";
                });
                setIcons([...filteredIcons]);
            }
        } else if (checkboxId === "insight") {
            if (checked) {
                icon.img = insight;
                icon.title = "No work at all";
                icon.type = "insight";
                setIcons([...icons, icon]);
            } else {
                const filteredIcons: icon[] = icons.filter((icon) => {
                    return icon.type !== "insight";
                });
                setIcons([...filteredIcons]);
            }
        } else {
            if (checked) {
                icon.img = curious;
                icon.title = "Everything";
                icon.type = "curious";
                setIcons([...icons, icon]);
            } else {
                const filteredIcons: icon[] = icons.filter((icon) => {
                    return icon.type !== "curious";
                });
                setIcons([...filteredIcons]);
            }
        }
    };

    return (
        <section>
            <div className="intro">
                <h1 className="main-title"> Reaction poll generator </h1>

                <div className="content">
                    <div className="container">
                        <div className="title"> {pollTitle} </div>
                        <div className="poll-content">
                            {icons.map((el: icon, index: number) => {
                                console.log(el);
                                return (
                                    <div className="poll-icon" key={index}>
                                        <div>
                                            {el.type === "like"
                                                ? allIconsStates.likeState
                                                : el.type === "love"
                                                ? allIconsStates.loveState
                                                : el.type === "curious"
                                                ? allIconsStates.curiousState
                                                : el.type === "insight"
                                                ? allIconsStates.insightState
                                                : allIconsStates.supportState}
                                        </div>
                                        <Arrow iconType={el.type} />
                                        <div className="icon-holder">
                                            <img src={el.img} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="reaction-icons">
                <div className="container">
                    <div className="icons like">
                        <div className="icon-holder">
                            <input
                                type="checkbox"
                                name=""
                                id="like"
                                onChange={handleCheckBoxChange}
                            />
                            <img src={like} alt="Like icon" />
                        </div>
                        <div>
                            <input
                                className="icon-input"
                                type="text"
                                placeholder="Enter label for like"
                                onChange={(e) =>
                                    handleIconChange(
                                        "likeState",
                                        e.target.value,
                                    )
                                }
                                value={allIconsStates.likeState}
                            />
                        </div>
                    </div>

                    <div className="icons love">
                        <div className="icon-holder">
                            <input
                                type="checkbox"
                                name=""
                                id="love"
                                onChange={handleCheckBoxChange}
                            />
                            <img src={love} alt="Love icon" />
                        </div>
                        <div>
                            <input
                                className="icon-input"
                                type="text"
                                placeholder="Enter label for love"
                                onChange={(e) =>
                                    handleIconChange(
                                        "loveState",
                                        e.target.value,
                                    )
                                }
                                value={allIconsStates.loveState}
                            />
                        </div>
                    </div>

                    <div className="icons insight">
                        <div className="icon-holder">
                            <input
                                type="checkbox"
                                name=""
                                id="insight"
                                onChange={handleCheckBoxChange}
                            />
                            <img src={insight} alt="insight icon" />
                        </div>
                        <div>
                            <input
                                className="icon-input"
                                type="text"
                                placeholder="Enter label for insight"
                                onChange={(e) =>
                                    handleIconChange(
                                        "insightState",
                                        e.target.value,
                                    )
                                }
                                value={allIconsStates.insightState}
                            />
                        </div>
                    </div>
                    <div className="icons support">
                        <div className="icon-holder">
                            <input
                                type="checkbox"
                                name=""
                                id="support"
                                onChange={handleCheckBoxChange}
                            />
                            <img src={support} alt="support icon" />
                        </div>
                        <div>
                            <input
                                className="icon-input"
                                type="text"
                                placeholder="Enter label for support"
                                onChange={(e) =>
                                    handleIconChange(
                                        "supportState",
                                        e.target.value,
                                    )
                                }
                                value={allIconsStates.supportState}
                            />
                        </div>
                    </div>
                    <div className="icons curious">
                        <div className="icon-holder">
                            <input
                                type="checkbox"
                                name=""
                                id="curious"
                                onChange={handleCheckBoxChange}
                            />
                            <img src={curious} alt="curious icon" />
                        </div>
                        <div>
                            <input
                                className="icon-input"
                                type="text"
                                placeholder="Enter label for curious"
                                onChange={(e) =>
                                    handleIconChange(
                                        "curiousState",
                                        e.target.value,
                                    )
                                }
                                value={allIconsStates.curiousState}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="poll-title">
                    <h1> Poll title </h1>
                    <input
                        className="poll-title-input"
                        type="text"
                        placeholder="Enter poll title here ..."
                        value={pollTitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <h2>When complete</h2>
                    <button className="btn download">Download</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
