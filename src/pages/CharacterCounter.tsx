import { ChangeEvent, useState } from "react";
import { Header } from "../components/Header";
import HeroTitle from "../components/HeroTitle";
import Links from "../components/Links";
import pollIcon from "/imgs/poll.png";
import "../styles/characterCounter.css";
import TextArea from "../components/textArea";

const CharacterCounter = () => {
    const [textAreaValue, setTextAreaValue] = useState<string>("");
    const [remainingCharacters, setRemainingCharacters] =
        useState<number>(3000);
    const [typedCharacters, setTypedCharacters] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const len = text.length;
        setTextAreaValue(text);
        setTypedCharacters(len);
        setRemainingCharacters(3000 - len);
    };

    return (
        <section className="characters-counter">
            <div className="container">
                <div className="intro">
                    <Header pollIcon={pollIcon} />
                    <Links />
                    <HeroTitle title="LinkedIn Character Counter" />
                    <p>
                        Use this free tool to check character count in your
                        LinkedIn post, <br /> about section, or message exactly
                        as it will appear on LinkedIn.
                    </p>
                </div>

                <div className="characters-counter-content-container">
                    <div className="characters-counter-content">
                        <div className="left-part">
                            <div className="first">
                                <div className="characters">
                                    <span>Characters typed:</span>
                                    <span
                                        style={{
                                            color:
                                                typedCharacters > 3000
                                                    ? "red"
                                                    : "",
                                        }}
                                    >
                                        {typedCharacters} / 3000
                                    </span>
                                </div>
                                <div className="characters">
                                    <span>Character remaining:</span>
                                    <span
                                        style={{
                                            color:
                                                remainingCharacters < 0
                                                    ? "red"
                                                    : "",
                                        }}
                                    >
                                        {remainingCharacters}
                                    </span>
                                </div>
                            </div>
                            <div className="second">
                                <TextArea
                                    textAreaValue={textAreaValue}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="right-part">
                            <div>
                                <span>See more limit</span>
                                <span
                                    style={{
                                        color:
                                            typedCharacters > 210 ? "red" : "",
                                    }}
                                >
                                    {typedCharacters} / 210
                                </span>
                            </div>
                            <div>
                                <span>Connection request</span>
                                <span
                                    style={{
                                        color:
                                            typedCharacters > 300 ? "red" : "",
                                    }}
                                >
                                    {typedCharacters} / 300
                                </span>
                            </div>
                            <div>
                                <span>About section</span>
                                <span
                                    style={{
                                        color:
                                            typedCharacters > 2600 ? "red" : "",
                                    }}
                                >
                                    {typedCharacters} / 2600
                                </span>
                            </div>
                            <div>
                                <span>Headline </span>
                                <span
                                    style={{
                                        color:
                                            typedCharacters > 220 ? "red" : "",
                                    }}
                                >
                                    {typedCharacters} / 220
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharacterCounter;
