import {
    IconHome,
    IconLogin,
    IconMessageReport,
    IconTools,
} from "@tabler/icons-react";
import Home from "../pages/home";
import Button from "./button";
import { useColors } from "./colors";

export default function Navbar() {
    const colors = useColors();

    return (
        <div
            style={{
                // Center Contents
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "1rem",
                position: "fixed",
                zIndex: 99,
                height: 150,
            }}
        >
            <div
                style={{
                    display: "flex",
                    maxWidth: 800,
                    justifyContent: "space-between",
                    padding: "2rem",
                    alignItems: "center",
                    width: "100%",
                    maxHeight: 250,
                    height: 100,
                    zIndex: 99,
                    borderRadius: "0.3rem",
                    boxShadow: "0 0 0.6rem 0.2rem rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    // Colours
                    backgroundColor: colors.get("navbar-background"),
                    color: colors.get("text-heading"),
                }}
            >
                <h1>Ben Saunders</h1>
                <span
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                    }}
                >
                    <Button>
                        <IconHome />
                    </Button>
                    <Button>
                        <IconTools />
                    </Button>
                    <Button>
                        <IconMessageReport />
                    </Button>
                    <Button>
                        <IconLogin />
                    </Button>
                </span>
            </div>
        </div>
    );
}
