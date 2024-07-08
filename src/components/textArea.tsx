import Box from "@mui/joy/Box";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import { FormControl } from "@mui/material";
import { ChangeEventHandler, useState } from "react";

type textAreaProps = {
    textAreaValue: string;
    handleChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function TextArea(props: textAreaProps) {
    const textAreaValue = props.textAreaValue;
    const handleChange = props.handleChange;
    const [italic, setItalic] = useState(false);
    const [fontWeight, setFontWeight] = useState("normal");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (
        <FormControl fullWidth={true}>
            <Textarea
                placeholder="Type something here…"
                minRows={5}
                endDecorator={
                    <Box
                        sx={{
                            display: "flex",
                            gap: "var(--Textarea-paddingBlock)",
                            pt: "var(--Textarea-paddingBlock)",
                            borderTop: "1px solid",
                            borderColor: "divider",
                            flex: "auto",
                        }}
                    >
                        <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={(event) =>
                                setAnchorEl(event.currentTarget)
                            }
                        >
                            <FormatBold />
                            <KeyboardArrowDown />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            size="sm"
                            placement="bottom-start"
                            sx={{ "--ListItemDecorator-size": "24px" }}
                        >
                            {["200", "normal", "bold"].map((weight) => (
                                <MenuItem
                                    key={weight}
                                    selected={fontWeight === weight}
                                    onClick={() => {
                                        setFontWeight(weight);
                                        setAnchorEl(null);
                                    }}
                                    sx={{ fontWeight: weight }}
                                >
                                    <ListItemDecorator>
                                        {fontWeight === weight && <Check />}
                                    </ListItemDecorator>
                                    {weight === "200" ? "lighter" : weight}
                                </MenuItem>
                            ))}
                        </Menu>
                        <IconButton
                            variant={italic ? "soft" : "plain"}
                            color={italic ? "primary" : "neutral"}
                            aria-pressed={italic}
                            onClick={() => setItalic((bool) => !bool)}
                        >
                            <FormatItalic />
                        </IconButton>
                        {/* <Button sx={{ ml: "auto" }}>Send</Button> */}
                    </Box>
                }
                sx={{
                    // width: "100%",
                    height: 230,
                    fontWeight,
                    fontStyle: italic ? "italic" : "initial",
                }}
                value={textAreaValue}
                onChange={handleChange}
            />
        </FormControl>
    );
}
