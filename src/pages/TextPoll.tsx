import like from "/imgs/Linkedin-Like-Icon.png";
import love from "/imgs/Linkedin-Love-Icon.png";
import insight from "/imgs/Linkedin-Insightful-Icon.png";
import support from "/imgs/Linkedin-Support-Icon.png";
import curious from "/imgs/Linkedin-Curious-Icon.png";
import celebrate from "/imgs/Linkedin-Celebrate-icon.png";
import { ChangeEvent, FormEvent, useState } from "react";
import Arrow from "../components/Arrow";
import { icon } from "../utils/interfaces";
import pollIcon from "/imgs/poll.png";
import html2canvas from "html2canvas";
import { Header } from "../components/Header";
import AnimatePage from "./AnimatedPage";

const Home = () => {
    const [pollTitle, setPollTitle] = useState<string>("");
    const [icons, setIcons] = useState<icon[]>([]);
    const [allIconsStates, setAllIconsStates] = useState({
        likeState: "",
        loveState: "",
        supportState: "",
        curiousState: "",
        insightState: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [underlinedTitle, setUnderlinedTitle] = useState<boolean>(false);

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

    const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checkboxId: string = event.target.id;
        const checked: boolean = event.target.checked;

        const icon: icon = {
            img: "",
            type: "",
            title: "",
        };

        switch (checkboxId) {
            case "like":
                if (checked) {
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
                break;
            case "love":
                if (checked) {
                    icon.img = love;
                    // icon.title = "Work from office";
                    icon.type = "love";
                    setIcons([...icons, icon]);
                } else {
                    const filteredIcons: icon[] = icons.filter((icon) => {
                        return icon.type !== "love";
                    });
                    setIcons([...filteredIcons]);
                }
                break;
            case "celebrate":
                if (checked) {
                    icon.img = celebrate;
                    // icon.title = "Work hybrid";
                    icon.type = "celebrate";
                    setIcons([...icons, icon]);
                } else {
                    const filteredIcons: icon[] = icons.filter((icon) => {
                        return icon.type !== "celebrate";
                    });
                    setIcons([...filteredIcons]);
                }
                break;
            case "support":
                if (checked) {
                    icon.img = support;
                    // icon.title = "Just work";
                    icon.type = "support";
                    setIcons([...icons, icon]);
                } else {
                    const filteredIcons: icon[] = icons.filter((icon) => {
                        return icon.type !== "support";
                    });
                    setIcons([...filteredIcons]);
                }
                break;
            case "insight":
                if (checked) {
                    icon.img = insight;
                    // icon.title = "No work at all";
                    icon.type = "insight";
                    setIcons([...icons, icon]);
                } else {
                    const filteredIcons: icon[] = icons.filter((icon) => {
                        return icon.type !== "insight";
                    });
                    setIcons([...filteredIcons]);
                }
                break;
            default:
                if (checked) {
                    icon.img = curious;
                    // icon.title = "Everything";
                    icon.type = "curious";
                    setIcons([...icons, icon]);
                } else {
                    const filteredIcons: icon[] = icons.filter((icon) => {
                        return icon.type !== "curious";
                    });
                    setIcons([...filteredIcons]);
                }
                break;
        }
    };

    const handleDownload = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(() => true);
        const element: HTMLElement | null = document.querySelector(".content");
        if (element === null) {
            return;
        }
        try {
            html2canvas(element).then((canvas) => {
                const img = canvas.toDataURL("image/png");

                const a = document.createElement("a");

                a.href = img;

                a.download = "Reaction-poll.PNG";

                a.click();
                setIsLoading(() => false);
            });
        } catch (err) {
            setIsLoading(() => false);
            console.log(err);
        }
    };

    const handleSetUnderlinedText = (event: ChangeEvent<HTMLInputElement>) => {
        const checked: boolean = event.target.checked;

        setUnderlinedTitle(() => checked);
    };

    const renderTitle = (): JSX.Element => {
        if (pollTitle == "") {
            return <span style={{ fontWeight: "500" }}>Poll title...</span>;
        }

        if (underlinedTitle === true) {
            return (
                <span style={{ textDecoration: "underline" }}>{pollTitle}</span>
            );
        }

        return <span>{pollTitle}</span>;
    };

    return (
        <AnimatePage>
            <section>
                <div className="intro">
                    <Header pollIcon={pollIcon} />
                    <div className="content" id="content">
                        <div className="container">
                            <div className="title">{renderTitle()}</div>
                            <div className="poll-content">
                                {icons.map((el: icon, index: number) => {
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
                                                <img
                                                    src={el.img}
                                                    alt="Icon"
                                                    style={
                                                        el.type === "insight"
                                                            ? { width: "35px" }
                                                            : {}
                                                    }
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reaction-icons">
                    <h3
                        style={{
                            textAlign: "center",
                            marginBottom: ".25rem",
                            marginTop: "0",
                        }}
                    >
                        {" "}
                        Choose reactions{" "}
                    </h3>
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
                                <img
                                    className="insight-img"
                                    src={insight}
                                    alt="insight icon"
                                />
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

                <form
                    className="bottom-section"
                    onSubmit={(event: FormEvent<HTMLFormElement>) =>
                        handleDownload(event)
                    }
                >
                    <div className="poll-title">
                        <h1 className="light-text"> Poll title </h1>
                        <input
                            className="poll-title-input"
                            type="text"
                            placeholder="Enter poll title here ..."
                            required
                            value={pollTitle}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="underlined-text-quest">
                        <p
                            className="light-text"
                            style={{ marginRight: "10px" }}
                        >
                            Underlined title?
                        </p>
                        <input
                            type="checkbox"
                            id="like"
                            onChange={handleSetUnderlinedText}
                        />
                    </div>
                    <div>
                        <h2 className="light-text">When complete</h2>
                        {isLoading && (
                            <span className="btn download">Loading...</span>
                        )}
                        {!isLoading && (
                            <button type="submit" className="btn download">
                                Download
                            </button>
                        )}
                    </div>
                </form>
            </section>
        </AnimatePage>
    );
};

export default Home;
