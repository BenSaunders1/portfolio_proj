import { ReactElement, ReactNode } from "react";
import { useColors } from "./colors";
import React from "react";

export type IconProps = {
    /** Size of the icon. Defaults to theme default icon size. */
    size?: number;
    /** Stroke width of the icon. `1.5` by default. */
    stroke?: number;
    /** Color of the icon. Inherits by default. */
    color?: string;

    children?: ReactNode;
};

export function Icon(props: IconProps) {
    const colors = useColors();

    const { size = 24, stroke = 1.5, color, children } = props;

    if (children === undefined) return children;
    return React.cloneElement(children as ReactElement, {
        size: size,
        stroke: stroke,
        color: color ? colors.get(color) : undefined,
    });
}
