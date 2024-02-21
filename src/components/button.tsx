import { CSSProperties, useState } from "react";
import { useColors } from "./colors";
import { Icon } from "./icon";
import { Tooltip } from "@mantine/core";

export type ButtonProps = {
    style?: CSSProperties;
    onClick?: () => void;
    children: React.ReactNode;
    tooltip?: string;
};

const button_style: CSSProperties = {
    // Center Contents
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "3rem",
    height: "3rem",
    borderRadius: "0.3rem",
    boxShadow: "0 0 0.6rem 0.2rem rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    border: "none",
    transitionDuration: "0.2s",
    transformOrigin: "center",
};

const button_hover: CSSProperties = {
    transform: "translate(0, -2px)",
    boxShadow: "0 0.6rem 0.6rem 0 rgba(0, 0, 0, 0.2)",
};

const button_pressed: CSSProperties = {
    transform: "translate(0, 2px)",
    boxShadow: "0 0 0.6rem 0.2rem rgba(0, 0, 0, 0.1)",
};

export default function Button(props: ButtonProps) {
    const { style, onClick, children, tooltip } = props;
    const colors = useColors();
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);

    const button_colors = {
        backgroundColor: colors.get("button-background"),
        color: colors.get("button-text"),
    };

    const button_style_final = {
        ...button_style,
        ...(hover ? button_hover : {}),
        ...(pressed ? button_pressed : {}),
        ...button_colors,
        ...style,
    };

    const button = (
        <button
            onClick={onClick}
            style={button_style_final}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon>{children}</Icon>
        </button>
    );

    if (!tooltip) return button;

    return (
        <Tooltip
            position="bottom"
            label={tooltip}
            transitionProps={{ duration: 200 }}
            openDelay={200}
            offset={10}
        >
            {button}
        </Tooltip>
    );
}
