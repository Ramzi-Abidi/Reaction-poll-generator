import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
import { IPage } from "../features/carousel/carouselSlice";

const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f1f1f1",
    },
    section: {
        borderRadius: "8px",
        margin: 30,
        padding: 25,
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
    fullView: {
        height: "100%",
        width: "100%",
    },
    title: {
        fontSize: "20px",
        lineHeight: "1.5px",
        marginTop: "20px",
    },
    userName: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "#666",
        marginBottom: "5px",
    },
    userNameContainer: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "5px",
    },
});

const MyDocument = (props: any) => {
    const pages: IPage[] = props.pages;
    const textArea = props.textArea;

    // const styles = props.styles;
    // const pageContent = props.pageContent;
    return (
        <Document>
            <Page size={{ width: 1080, height: 1350 }} style={styles.page}>
                <View style={styles.fullView}>
                    <Image
                        src="/imgs/blurry-bckg.jpg"
                        style={styles.backgroundPage}
                    />
                    <View style={styles.section}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src="/imgs/programmer.png"
                                style={styles.image}
                            />
                            <div style={styles.userNameContainer}>
                                <Text style={styles.userName}>Ramzi abidi</Text>
                                <Text style={styles.userName}>
                                    Software engineer at DeepVolt
                                </Text>
                            </div>
                        </View>
                        <Text style={styles.title}>content</Text>
                        <Text>{textArea}</Text>
                    </View>
                </View>
            </Page>
            {pages.map((page: IPage, index: number) => (
                <Page
                    size={{ width: 1080, height: 1350 }}
                    style={page.style}
                    key={index}
                >
                    <View style={styles.fullView}>
                        <Image
                            src="/imgs/blurry-bckg.jpg"
                            style={styles.backgroundPage}
                        />
                        <View style={styles.section}>
                            <Image
                                src="/imgs/programmer.png"
                                style={styles.image}
                            />
                            <Text>{page.content}</Text>
                        </View>
                    </View>
                </Page>
            ))}
        </Document>
    );
};

export default MyDocument;

{
    /* <Page size="A5" style={styles.page}>
            <View style={styles.section}>
                <Image src="/imgs/programmer.png" style={styles.image} />
                <Text>3 ways to build your personal brand on LinkedIn. </Text>
            </View>
        </Page>
        <Page size="A5" style={styles.page}>
            <View style={styles.section}>
                <Image src="/imgs/programmer.png" style={styles.image} />
                <Text>3 ways to build your personal brand on LinkedIn. </Text>
            </View>
        </Page> */
}
