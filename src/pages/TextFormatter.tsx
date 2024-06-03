import { Header } from "../components/Header";
import Links from "../components/Links";
import pollIcon from "/imgs/poll.png";
import TextArea from "../components/textArea";
import "../styles/textFormatter.css";
import { ChangeEvent, useState } from "react";
import { charMapType } from "../common/types";

const TextFormatter = () => {
    const [textAreaValue, setTextAreaValue] = useState<string>("");

    const lineThroughText = (text: string) => {
        const strikethroughChar = "\u0336"; // Unicode for strikethrough
        return text
            .split("")
            .map((char) => char + strikethroughChar)
            .join("");
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setTextAreaValue(() => text);
    };

    const italicizeText = (text: string) => {
        const charMap: charMapType = {
            A: "\u{1D434}",
            B: "\u{1D435}",
            C: "\u{1D436}",
            D: "\u{1D437}",
            E: "\u{1D438}",
            F: "\u{1D439}",
            G: "\u{1D43A}",
            H: "\u{1D43B}",
            I: "\u{1D43C}",
            J: "\u{1D43D}",
            K: "\u{1D43E}",
            L: "\u{1D43F}",
            M: "\u{1D440}",
            N: "\u{1D441}",
            O: "\u{1D442}",
            P: "\u{1D443}",
            Q: "\u{1D444}",
            R: "\u{1D445}",
            S: "\u{1D446}",
            T: "\u{1D447}",
            U: "\u{1D448}",
            V: "\u{1D449}",
            W: "\u{1D44A}",
            X: "\u{1D44B}",
            Y: "\u{1D44C}",
            Z: "\u{1D44D}",
            a: "\u{1D44E}",
            b: "\u{1D44F}",
            c: "\u{1D450}",
            d: "\u{1D451}",
            e: "\u{1D452}",
            f: "\u{1D453}",
            g: "\u{1D454}",
            h: "\u{1D455}",
            i: "\u{1D456}",
            j: "\u{1D457}",
            k: "\u{1D458}",
            l: "\u{1D459}",
            m: "\u{1D45A}",
            n: "\u{1D45B}",
            o: "\u{1D45C}",
            p: "\u{1D45D}",
            q: "\u{1D45E}",
            r: "\u{1D45F}",
            s: "\u{1D460}",
            t: "\u{1D461}",
            u: "\u{1D462}",
            v: "\u{1D463}",
            w: "\u{1D464}",
            x: "\u{1D465}",
            y: "\u{1D466}",
            z: "\u{1D467}",
            " ": " ",
        };

        return text
            .split("")
            .map((char: string) => charMap[char])
            .join("");
    };

    const italicizeSansText = (text: string) => {
        const charMap: { [key: string]: string } = {
            A: "\u{1D608}",
            B: "\u{1D609}",
            C: "\u{1D60A}",
            D: "\u{1D60B}",
            E: "\u{1D60C}",
            F: "\u{1D60D}",
            G: "\u{1D60E}",
            H: "\u{1D60F}",
            I: "\u{1D610}",
            J: "\u{1D611}",
            K: "\u{1D612}",
            L: "\u{1D613}",
            M: "\u{1D614}",
            N: "\u{1D615}",
            O: "\u{1D616}",
            P: "\u{1D617}",
            Q: "\u{1D618}",
            R: "\u{1D619}",
            S: "\u{1D61A}",
            T: "\u{1D61B}",
            U: "\u{1D61C}",
            V: "\u{1D61D}",
            W: "\u{1D61E}",
            X: "\u{1D61F}",
            Y: "\u{1D620}",
            Z: "\u{1D621}",
            a: "\u{1D622}",
            b: "\u{1D623}",
            c: "\u{1D624}",
            d: "\u{1D625}",
            e: "\u{1D626}",
            f: "\u{1D627}",
            g: "\u{1D628}",
            h: "\u{1D629}",
            i: "\u{1D62A}",
            j: "\u{1D62B}",
            k: "\u{1D62C}",
            l: "\u{1D62D}",
            m: "\u{1D62E}",
            n: "\u{1D62F}",
            o: "\u{1D630}",
            p: "\u{1D631}",
            q: "\u{1D632}",
            r: "\u{1D633}",
            s: "\u{1D634}",
            t: "\u{1D635}",
            u: "\u{1D636}",
            v: "\u{1D637}",
            w: "\u{1D638}",
            x: "\u{1D639}",
            y: "\u{1D63A}",
            z: "\u{1D63B}",
            " ": " ",
        };

        return text
            .split("")
            .map((char: string) => charMap[char])
            .join("");
    };

    const boldText = (text: string): string => {
        const charMap: { [key: string]: string } = {
            A: "\u{1D400}",
            B: "\u{1D401}",
            C: "\u{1D402}",
            D: "\u{1D403}",
            E: "\u{1D404}",
            F: "\u{1D405}",
            G: "\u{1D406}",
            H: "\u{1D407}",
            I: "\u{1D408}",
            J: "\u{1D409}",
            K: "\u{1D40A}",
            L: "\u{1D40B}",
            M: "\u{1D40C}",
            N: "\u{1D40D}",
            O: "\u{1D40E}",
            P: "\u{1D40F}",
            Q: "\u{1D410}",
            R: "\u{1D411}",
            S: "\u{1D412}",
            T: "\u{1D413}",
            U: "\u{1D414}",
            V: "\u{1D415}",
            W: "\u{1D416}",
            X: "\u{1D417}",
            Y: "\u{1D418}",
            Z: "\u{1D419}",
            a: "\u{1D41A}",
            b: "\u{1D41B}",
            c: "\u{1D41C}",
            d: "\u{1D41D}",
            e: "\u{1D41E}",
            f: "\u{1D41F}",
            g: "\u{1D420}",
            h: "\u{1D421}",
            i: "\u{1D422}",
            j: "\u{1D423}",
            k: "\u{1D424}",
            l: "\u{1D425}",
            m: "\u{1D426}",
            n: "\u{1D427}",
            o: "\u{1D428}",
            p: "\u{1D429}",
            q: "\u{1D42A}",
            r: "\u{1D42B}",
            s: "\u{1D42C}",
            t: "\u{1D42D}",
            u: "\u{1D42E}",
            v: "\u{1D42F}",
            w: "\u{1D430}",
            x: "\u{1D431}",
            y: "\u{1D432}",
            z: "\u{1D433}",
            " ": " ", // Ensure space remains unchanged
        };

        return text
            .split("")
            .map((char) => charMap[char] || char)
            .join("");
    };

    const boldSansText = (text: string): string => {
        const charMap: { [key: string]: string } = {
            A: "\u{1D5D4}",
            B: "\u{1D5D5}",
            C: "\u{1D5D6}",
            D: "\u{1D5D7}",
            E: "\u{1D5D8}",
            F: "\u{1D5D9}",
            G: "\u{1D5DA}",
            H: "\u{1D5DB}",
            I: "\u{1D5DC}",
            J: "\u{1D5DD}",
            K: "\u{1D5DE}",
            L: "\u{1D5DF}",
            M: "\u{1D5E0}",
            N: "\u{1D5E1}",
            O: "\u{1D5E2}",
            P: "\u{1D5E3}",
            Q: "\u{1D5E4}",
            R: "\u{1D5E5}",
            S: "\u{1D5E6}",
            T: "\u{1D5E7}",
            U: "\u{1D5E8}",
            V: "\u{1D5E9}",
            W: "\u{1D5EA}",
            X: "\u{1D5EB}",
            Y: "\u{1D5EC}",
            Z: "\u{1D5ED}",
            a: "\u{1D5EE}",
            b: "\u{1D5EF}",
            c: "\u{1D5F0}",
            d: "\u{1D5F1}",
            e: "\u{1D5F2}",
            f: "\u{1D5F3}",
            g: "\u{1D5F4}",
            h: "\u{1D5F5}",
            i: "\u{1D5F6}",
            j: "\u{1D5F7}",
            k: "\u{1D5F8}",
            l: "\u{1D5F9}",
            m: "\u{1D5FA}",
            n: "\u{1D5FB}",
            o: "\u{1D5FC}",
            p: "\u{1D5FD}",
            q: "\u{1D5FE}",
            r: "\u{1D5FF}",
            s: "\u{1D600}",
            t: "\u{1D601}",
            u: "\u{1D602}",
            v: "\u{1D603}",
            w: "\u{1D604}",
            x: "\u{1D605}",
            y: "\u{1D606}",
            z: "\u{1D607}",
            " ": " ",
        };

        return text
            .split("")
            .map((char) => charMap[char])
            .join("");
    };

    const circledText = (text: string): string => {
        const charMap: { [key: string]: string } = {
            A: "\u{24B6}",
            B: "\u{24B7}",
            C: "\u{24B8}",
            D: "\u{24B9}",
            E: "\u{24BA}",
            F: "\u{24BB}",
            G: "\u{24BC}",
            H: "\u{24BD}",
            I: "\u{24BE}",
            J: "\u{24BF}",
            K: "\u{24C0}",
            L: "\u{24C1}",
            M: "\u{24C2}",
            N: "\u{24C3}",
            O: "\u{24C4}",
            P: "\u{24C5}",
            Q: "\u{24C6}",
            R: "\u{24C7}",
            S: "\u{24C8}",
            T: "\u{24C9}",
            U: "\u{24CA}",
            V: "\u{24CB}",
            W: "\u{24CC}",
            X: "\u{24CD}",
            Y: "\u{24CE}",
            Z: "\u{24CF}",
            a: "\u{24D0}",
            b: "\u{24D1}",
            c: "\u{24D2}",
            d: "\u{24D3}",
            e: "\u{24D4}",
            f: "\u{24D5}",
            g: "\u{24D6}",
            h: "\u{24D7}",
            i: "\u{24D8}",
            j: "\u{24D9}",
            k: "\u{24DA}",
            l: "\u{24DB}",
            m: "\u{24DC}",
            n: "\u{24DD}",
            o: "\u{24DE}",
            p: "\u{24DF}",
            q: "\u{24E0}",
            r: "\u{24E1}",
            s: "\u{24E2}",
            t: "\u{24E3}",
            u: "\u{24E4}",
            v: "\u{24E5}",
            w: "\u{24E6}",
            x: "\u{24E7}",
            y: "\u{24E8}",
            z: "\u{24E9}",
            " ": " ",
        };

        return text
            .split("")
            .map((char) => charMap[char] || char)
            .join("");
    };

    const circledNegativeText = (text: string): string => {
        const charMap: { [key: string]: string } = {
            A: "\u{1F150}",
            B: "\u{1F151}",
            C: "\u{1F152}",
            D: "\u{1F153}",
            E: "\u{1F154}",
            F: "\u{1F155}",
            G: "\u{1F156}",
            H: "\u{1F157}",
            I: "\u{1F158}",
            J: "\u{1F159}",
            K: "\u{1F15A}",
            L: "\u{1F15B}",
            M: "\u{1F15C}",
            N: "\u{1F15D}",
            O: "\u{1F15E}",
            P: "\u{1F15F}",
            Q: "\u{1F160}",
            R: "\u{1F161}",
            S: "\u{1F162}",
            T: "\u{1F163}",
            U: "\u{1F164}",
            V: "\u{1F165}",
            W: "\u{1F166}",
            X: "\u{1F167}",
            Y: "\u{1F168}",
            Z: "\u{1F169}",
            a: "\u{1F170}",
            b: "\u{1F171}",
            c: "\u{1F172}",
            d: "\u{1F173}",
            e: "\u{1F174}",
            f: "\u{1F175}",
            g: "\u{1F176}",
            h: "\u{1F177}",
            i: "\u{1F178}",
            j: "\u{1F179}",
            k: "\u{1F17A}",
            l: "\u{1F17B}",
            m: "\u{1F17C}",
            n: "\u{1F17D}",
            o: "\u{1F17E}",
            p: "\u{1F17F}",
            q: "\u{1F180}",
            r: "\u{1F181}",
            s: "\u{1F182}",
            t: "\u{1F183}",
            u: "\u{1F184}",
            v: "\u{1F185}",
            w: "\u{1F186}",
            x: "\u{1F187}",
            y: "\u{1F188}",
            z: "\u{1F189}",
            " ": " ",
        };

        return text
            .split("")
            .map((char) => charMap[char] || char)
            .join("");
    };

    const boldUnderlineText = (text: string): string => {
        const charMap: { [key: string]: string } = {
            A: "\u{1D400}",
            B: "\u{1D401}",
            C: "\u{1D402}",
            D: "\u{1D403}",
            E: "\u{1D404}",
            F: "\u{1D405}",
            G: "\u{1D406}",
            H: "\u{1D407}",
            I: "\u{1D408}",
            J: "\u{1D409}",
            K: "\u{1D40A}",
            L: "\u{1D40B}",
            M: "\u{1D40C}",
            N: "\u{1D40D}",
            O: "\u{1D40E}",
            P: "\u{1D40F}",
            Q: "\u{1D410}",
            R: "\u{1D411}",
            S: "\u{1D412}",
            T: "\u{1D413}",
            U: "\u{1D414}",
            V: "\u{1D415}",
            W: "\u{1D416}",
            X: "\u{1D417}",
            Y: "\u{1D418}",
            Z: "\u{1D419}",
            a: "\u{1D41A}",
            b: "\u{1D41B}",
            c: "\u{1D41C}",
            d: "\u{1D41D}",
            e: "\u{1D41E}",
            f: "\u{1D41F}",
            g: "\u{1D420}",
            h: "\u{1D421}",
            i: "\u{1D422}",
            j: "\u{1D423}",
            k: "\u{1D424}",
            l: "\u{1D425}",
            m: "\u{1D426}",
            n: "\u{1D427}",
            o: "\u{1D428}",
            p: "\u{1D429}",
            q: "\u{1D42A}",
            r: "\u{1D42B}",
            s: "\u{1D42C}",
            t: "\u{1D42D}",
            u: "\u{1D42E}",
            v: "\u{1D42F}",
            w: "\u{1D430}",
            x: "\u{1D431}",
            y: "\u{1D432}",
            z: "\u{1D433}",
            " ": " ",
        };

        const underlineChar = "\u0332"; // Unicode for combining underline
        return (
            text
                .split("")
                .map((char) => charMap[char])
                .join("") + underlineChar
        );
    };

    const handleCopyText = (typeOfText: string) => {
        let copiedText = "";
        let tooltip: HTMLElement | null = null;
        if (typeOfText == "bold") {
            copiedText = boldText(textAreaValue);
            tooltip = document.getElementById("boldMyTooltip");
        } else if (typeOfText === "bold-sans") {
            copiedText = boldText(textAreaValue);
            tooltip = document.getElementById("boldSansMyTooltip");
        } else if (typeOfText === "bold-underline") {
            copiedText = boldUnderlineText(textAreaValue);
            tooltip = document.getElementById("boldUnderlineMyTooltip");
        } else if (typeOfText === "circled-negative") {
            copiedText = circledNegativeText(textAreaValue);
            tooltip = document.getElementById("circledNegativeMyTooltip");
        } else if (typeOfText === "italicize-sans") {
            copiedText = italicizeSansText(textAreaValue);
            tooltip = document.getElementById("italicSansMyTooltip");
        } else if (typeOfText === "italicize") {
            copiedText = italicizeText(textAreaValue);
            tooltip = document.getElementById("italicMyTooltip");
        } else if (typeOfText === "line-through") {
            copiedText = lineThroughText(textAreaValue);
            tooltip = document.getElementById("lineThroughMyTooltip");
        } else if (typeOfText === "circled") {
            copiedText = lineThroughText(textAreaValue);
            tooltip = document.getElementById("circledMyTooltip");
        }
        navigator.clipboard.writeText(copiedText);

        if (tooltip) {
            tooltip!.innerHTML = "Copied!";
            setTimeout(() => {
                tooltip!.innerHTML = "Copy to clipboard";
            }, 2500);
        }
    };

    const outFunc = () => {
        let tooltip = document.getElementById("myTooltip");
        tooltip!.innerHTML = "Copy to clipboard";
    };

    return (
        <section className="text-formatter">
            <div className="intro fixed">
                <Header pollIcon={pollIcon} />
                <Links />
            </div>

            <div className="text-formatter-container top-spacing">
                <div className="text-formatter-content">
                    <p>Enter or copy-paste your text here:</p>

                    <TextArea
                        textAreaValue={textAreaValue}
                        handleChange={handleChange}
                    />

                    <div className="output">
                        <div className="output-textarea">
                            <p className="output-textarea-title">Bold:</p>
                            <p className="result-text">
                                {boldText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() => handleCopyText("bold")}
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="boldMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                        <div className="output-textarea">
                            <p className="output-textarea-title">Bold sans:</p>
                            <p className="result-text">
                                {boldSansText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() => handleCopyText("bold-sans")}
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="boldSansMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="output">
                        <div className="output-textarea">
                            <p className="output-textarea-title">Italic:</p>
                            <p className="result-text">
                                {italicizeText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() => handleCopyText("italicize")}
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="italicMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                        <div className="output-textarea">
                            <p className="output-textarea-title">
                                Italic sans:
                            </p>
                            <p className="result-text">
                                {italicizeSansText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        handleCopyText("italicize-sans")
                                    }
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="italicSansMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="output">
                        <div className="output-textarea">
                            <p className="output-textarea-title">
                                Bold italic:
                            </p>
                            <p className="result-text">
                                {boldUnderlineText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        handleCopyText("bold-underline")
                                    }
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="boldUnderlineMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                        <div className="output-textarea">
                            <p className="output-textarea-title">
                                Bold Strikethrough:
                            </p>
                            <p className="result-text">
                                {lineThroughText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        handleCopyText("line-through")
                                    }
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="lineThroughMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="output">
                        <div className="output-textarea">
                            <p className="output-textarea-title">
                                Circled text:
                            </p>
                            <p className="result-text">
                                {circledText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() => handleCopyText("circled")}
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="circledMyTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                        <div className="output-textarea">
                            <p className="output-textarea-title">
                                Circle negative text:
                            </p>
                            <p className="result-text">
                                {circledNegativeText(textAreaValue)}
                            </p>
                            <div className="tooltip">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        handleCopyText("circled-negative")
                                    }
                                    onMouseOut={() => outFunc()}
                                >
                                    <span
                                        className="tooltiptext"
                                        id="myTooltip"
                                    >
                                        Copy to clipboard
                                    </span>
                                    Copy text
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextFormatter;
