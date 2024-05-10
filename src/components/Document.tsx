import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";

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

const MyDocument = (props: any) => {
    console.log(props);
    const pages = props.pages;
    return (
        <Document>
            <Page size="A5" style={styles.page}>
                <View style={styles.section}>
                    <Image src="/imgs/programmer.png" style={styles.image} />
                    <Text>
                        3 ways to build your personal brand on LinkedIn.{" "}
                    </Text>
                </View>
            </Page>
            {pages.map((page: any) => page)}
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
