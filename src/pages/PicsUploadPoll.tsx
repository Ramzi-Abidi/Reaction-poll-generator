import like from "/imgs/Linkedin-Like-Icon.png";
import love from "/imgs/Linkedin-Love-Icon.png";
import insight from "/imgs/Linkedin-Insightful-Icon.png";
import support from "/imgs/Linkedin-Support-Icon.png";
import curious from "/imgs/Linkedin-Curious-Icon.png";
import celebrate from "/imgs/Linkedin-Celebrate-icon.png";
import uploadImg from "/imgs/upload-img.png";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Arrow from "../components/Arrow";
import { icon } from "../utils/types";
import pollIcon from "/imgs/poll.png";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const PicsUploadPoll = () => {
    const [pollTitle, setPollTitle] = useState<string>("");
    const [icons, setIcons] = useState<icon[]>([]);
    const [allIconsStates, setAllIconsStates] = useState({
        likeState: "/imgs/picture.png",
        loveState: "/imgs/picture.png",
        supportState: "/imgs/picture.png",
        curiousState: "/imgs/picture.png",
        insightState: "/imgs/picture.png",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [underlinedTitle, setUnderlinedTitle] = useState<boolean>(false);

    // Update image
    const handleImageUpload = (e: any, propertyName: string) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                // setAllIconsStates({ [propertyName]: reader.result });
                setAllIconsStates((prevState) => ({
                    ...prevState,
                    [propertyName]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
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
        <section>
            <div className="intro">
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
                                <img
                                    src="imgs/github.png"
                                    alt="Give repo star!"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="links">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" style={{ padding: 5 }}>
                                    Text poll
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/pics-upload-poll"
                                    style={{ padding: 5 }}
                                >
                                    Pictures poll
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="content" id="content">
                    <div className="container">
                        <div className="title">{renderTitle()}</div>
                        <div className="poll-content">
                            {icons.map((el: icon, index: number) => {
                                return (
                                    <div className="poll-icon" key={index}>
                                        <div>
                                            {el.type === "like" ? (
                                                <img
                                                    src={
                                                        allIconsStates.likeState
                                                    }
                                                    alt="Love"
                                                />
                                            ) : el.type === "love" ? (
                                                <img
                                                    src={
                                                        allIconsStates.loveState
                                                    }
                                                    alt="Love"
                                                />
                                            ) : el.type === "curious" ? (
                                                <img
                                                    src={
                                                        allIconsStates.curiousState
                                                    }
                                                    alt="Curious"
                                                />
                                            ) : el.type === "insight" ? (
                                                <img
                                                    src={
                                                        allIconsStates.insightState
                                                    }
                                                    alt="Insight"
                                                />
                                            ) : (
                                                <img
                                                    src={
                                                        allIconsStates.supportState
                                                    }
                                                    alt="Insight"
                                                />
                                            )}
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
                    Choose reactions
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
                        <div className="custom-file-upload">
                            <label htmlFor="file-upload">
                                <img src={uploadImg} alt="" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    handleImageUpload(e, "likeState");
                                }}
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
                        <div className="custom-file-upload">
                            <label htmlFor="file-upload">
                                <img src={uploadImg} alt="" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    handleImageUpload(e, "loveState");
                                }}
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
                        <div className="custom-file-upload">
                            <label htmlFor="file-upload">
                                <img src={uploadImg} alt="" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    handleImageUpload(e, "insightState");
                                }}
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
                        <div className="custom-file-upload">
                            <label htmlFor="file-upload">
                                <img src={uploadImg} alt="" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    handleImageUpload(e, "supportState");
                                }}
                            />
                            <input id="file-upload" type="file" />
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
                        <div className="custom-file-upload">
                            <label htmlFor="file-upload">
                                <img src={uploadImg} alt="" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    handleImageUpload(e, "curiousState");
                                }}
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
                    <p className="light-text" style={{ marginRight: "10px" }}>
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
    );
};

export default PicsUploadPoll;
