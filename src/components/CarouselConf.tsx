import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import { TextField } from "@mui/material";
import { Textarea } from "@mui/joy";

export default function CarouselConf() {
    // const textAreaValue = useSelector((state) => state.form.textAreaValue);
    // const dispatch = useDispatch();

    // const handleChange = (event:any) => {
    //     const { value } = event.target;
    //     dispatch(carouselActions.updateTextAreaValue({value, key}));
    // };

    return (
        <Tabs
            variant="outlined"
            aria-label="Pricing plan"
            defaultValue={0}
            sx={{
                width: 343,
                borderRadius: "lg",
                boxShadow: "sm",
                overflow: "auto",
            }}
        >
            <TabList
                disableUnderline
                tabFlex={1}
                sx={{
                    [`& .${tabClasses.root}`]: {
                        fontSize: "sm",
                        fontWeight: "lg",
                        [`&[aria-selected="true"]`]: {
                            color: "primary.500",
                            bgcolor: "background.surface",
                        },
                        [`&.${tabClasses.focusVisible}`]: {
                            outlineOffset: "-4px",
                        },
                    },
                }}
            >
                <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                    Content
                </Tab>
                <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                    User
                </Tab>
                <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                    Premium
                </Tab>
            </TabList>
            <TabPanel value={0}>
                <Typography level="inherit">
                    <div className="form-title">
                        <span>Title</span>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="form-title">
                        <span>Content</span>
                        <Textarea minRows={2} placeholder="Content" /* onChange={handleChange} */ />
                    </div>
                </Typography>
                <Typography
                    textColor="success.400"
                    fontSize="xl3"
                    fontWeight="xl"
                    mt={1}
                >
                    $0{" "}
                    <Typography
                        fontSize="sm"
                        textColor="text.secondary"
                        fontWeight="md"
                    >
                        － Free forever
                    </Typography>
                </Typography>
            </TabPanel>
            <TabPanel value={1}>
                <Typography level="inherit">
                    Best for professional developers building enterprise or
                    data-rich applications.
                </Typography>
                <Typography
                    textColor="primary.400"
                    fontSize="xl3"
                    fontWeight="xl"
                    mt={1}
                >
                    $15{" "}
                    <Typography
                        fontSize="sm"
                        textColor="text.secondary"
                        fontWeight="md"
                    >
                        / dev / month
                    </Typography>
                </Typography>
            </TabPanel>
            <TabPanel value={2}>
                <Typography level="inherit">
                    The most advanced features for data-rich applications, as
                    well as the highest priority for support.
                </Typography>
                <Typography
                    textColor="primary.400"
                    fontSize="xl3"
                    fontWeight="xl"
                    mt={1}
                >
                    <Typography
                        fontSize="xl"
                        borderRadius="sm"
                        px={0.5}
                        mr={0.5}
                        sx={(theme) => ({
                            ...theme.variants.soft.danger,
                            color: "danger.400",
                            verticalAlign: "text-top",
                            textDecoration: "line-through",
                        })}
                    >
                        $49
                    </Typography>
                    $37*{" "}
                    <Typography
                        fontSize="sm"
                        textColor="text.secondary"
                        fontWeight="md"
                    >
                        / dev / month
                    </Typography>
                </Typography>
            </TabPanel>
        </Tabs>
    );
}
