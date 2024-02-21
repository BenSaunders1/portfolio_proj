import { useColors } from "../components/colors";
import { useDarkMode } from "usehooks-ts";

export default function Editor() {
    const colors = useColors();
    const { toggle } = useDarkMode();

    return (
        <>
            <div
                style={{
                    // Center Contents
                    display: "flex",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                    paddingTop: "100px",

                    // Colours
                    backgroundColor: colors.get("white"),
                }}
                onClick={toggle}
            ></div>
        </>
    );
}
