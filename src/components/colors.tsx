import { useDarkMode } from "usehooks-ts";

const BASE_WHITE = "#EFEEEE",
    BASE_BLACK = "#11181C";

export type Color = {
    key: string;
    default: string;
    dark?: string;
};

export const DEFAULT_PALETTE: Color[] = [
    {
        key: "white",
        default: BASE_WHITE,
        dark: BASE_BLACK,
    },
    {
        key: "black",
        default: BASE_BLACK,
        dark: BASE_WHITE,
    },
    {
        key: "permaWhite",
        default: BASE_WHITE,
    },
    {
        key: "permaBlack",
        default: BASE_BLACK,
    },
    {
        key: "green",
        default: "#31C57A",
        dark: "#53CA8E",
    },
    {
        key: "post-background",
        default: "#F5F5F5",
        dark: "#1E1E1E",
    },
    {
        key: "text-heading",
        default: "#11181C",
        dark: "#EFEEEE",
    },
    {
        key: "text-body",
        default: "#4F4F4F",
        dark: "#DDDDDD",
    },
    {
        key: "text-border",
        default: "#BDBDBD",
        dark: "#4F4F4F",
    },
    {
        key: "button-background",
        default: "#E54542",
        dark: "#E26765",
    },
    {
        key: "button-text",
        default: "#FFFFFF",
        dark: "#424242",
    },
    {
        key: "navbar-background",
        default: "rgba(255, 255, 255, 0.45)",
        dark: "rgba(20, 20, 20, 0.45)",
    },
    {
        key: "hyperlink",
        default: "#3B5BDB",
        dark: "#E26765",
    },
];

const PRIMARY_COLOR = "green";

type UseColorsReturn = {
    /** Returns a color from the palette, or `undefined` if that color does not exist. */
    get(key?: string): string | undefined;
};

export function useColors(): UseColorsReturn {
    const { isDarkMode } = useDarkMode();

    function get(key?: string): string | undefined {
        if (!key) return undefined;

        let color = DEFAULT_PALETTE.find((c) => c.key === key);
        if (key === "primary")
            color = DEFAULT_PALETTE.find((c) => c.key === PRIMARY_COLOR);

        if (!color) return undefined;

        if (color.dark && isDarkMode) return color.dark;
        return color.default;
    }

    return { get };
}
