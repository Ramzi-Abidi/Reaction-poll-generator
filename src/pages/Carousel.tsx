import { Header } from "../components/Header";
import pollIcon from "/imgs/poll.png";
import Links from "../components/Links";
import "../styles/carousel.css";
import { PDFDownloadLink, PDFViewer, Page, StyleSheet } from "@react-pdf/renderer";
import MyDocument from "../components/Document";
import { useState } from "react";

const Carousel = () => {
    const styles = StyleSheet.create({
        page: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#E4E4E4",
        },
        section: {
            borderRadius: "8px",
            margin: 30,
            padding: 20,
            backgroundColor: "#FFF",
            color: "#000",
        },
        image: {
            width: 60,
            marginBottom: 20,
        },
        text: {
            fontSize: 45,
            fontWeight: "bold",
        },
        introSection: {
            borderRadius: "8px",
            margin: 30,
            padding: 50,
            backgroundColor: "#FFF",
            color: "#000",
        },
        backgroundPage: {
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            display: "flex",
            height: "100%",
            width: "100%",
        },
    });
    const [pages, setPages] = useState<any>([]);
    const addPage = () => {
        setPages([
            ...pages,
            <Page size="A5" style={styles.page} key={pages.length}></Page>,
        ]);
    };

    return (
        <section>
            <div className="intro">
                <Header pollIcon={pollIcon} />
                <Links />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <PDFViewer width="750" height="500">
                    <MyDocument pages={pages} />
                </PDFViewer>
                <PDFDownloadLink
                    document={<MyDocument pages={pages} />}
                    fileName="report.pdf"
                    className="btn btn-primary"
                    style={{ marginRight: 10 }}
                >
                    <span>Download Report</span>
                </PDFDownloadLink>
                <button onClick={() => addPage()}> add page</button>
            </div>
        </section>
    );
};

export default Carousel;
