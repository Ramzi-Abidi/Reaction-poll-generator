import { Header } from "../components/Header";
import pollIcon from "/imgs/poll.png";
import Links from "../components/Links";
import "../styles/carousel.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/Document";
import { useDispatch, useSelector } from "react-redux";
import { IPage, carouselActions } from "../features/carousel/carouselSlice";
import { RootState } from "../store";
import CarouselConf from "../components/CarouselConf";
import { Button } from "@mui/material";
import { useState } from "react";

const Carousel = () => {
    const [textArea, setTextArea] = useState("");

    const dispatch = useDispatch();
    const page: IPage = {
        size: { width: 1080, height: 1350 },
        style: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#E4E4E4",
        },
        key: 1,
        content: "Hello world",
    };
    const addPageHandler = () => {
        dispatch(carouselActions.addPage(page));
    };

    const pages: IPage[] = useSelector((state: RootState) => {
        return state.carouselReducer.pages;
    });

    const styles = useSelector((state: RootState) => {
        return state.stylesReducer.styles;
    });
    // const handleChange=()=>{

    // }
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
                    flexDirection: "row",
                    marginTop: "2rem",
                }}
            >
                <div className="">
                    <PDFViewer width={750} height={500}>
                        <MyDocument
                            pages={pages}
                            styles={styles}
                            textArea={textArea}
                        />
                    </PDFViewer>
                </div>
                <div>
                    <CarouselConf />
                    <textarea name="" id="" value={textArea} onChange={(e)=>setTextArea(e.target.value)}>{textArea}</textarea>
                    <div className="buttons">
                        <Button onClick={addPageHandler}>Add page</Button>
                        <PDFDownloadLink
                            document={
                                <MyDocument
                                    pages={pages}
                                    styles={styles}
                                    textArea={textArea}
                                />
                            }
                            fileName="Report.pdf"
                            className="btn btn-primary"
                            style={{ marginRight: 10 }}
                        >
                            <Button variant="contained">Download</Button>
                        </PDFDownloadLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
