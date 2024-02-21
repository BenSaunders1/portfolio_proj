// make an object that will display an empty div

import { useColors } from "./colors";
import { CSSProperties, ReactNode, useState } from "react";

// Path: portfolio_proj\src\components\post.tsx

export default function Post({
    PostTitle,
    PostContent,
    PostFooter,
    children,
}: {
    PostTitle: string;
    PostContent: string;
    PostFooter: string;
    children?: ReactNode;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const colors = useColors();

    const needsOverflow = PostContent.length > 800;

    const newHeight = { maxHeight: "100%" };
    const hoverStyle: CSSProperties = {
        cursor: "pointer",
    };
    const outerStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxHeight: needsOverflow ? "450px" : "400px",
        height: "100%",
        borderRadius: "0.3rem",
        // transitionDuration: "0.5s",
        // boxShadow: "0 0 0.6rem 0.2rem rgba(0, 0, 0, 0.1)",

        border: "1px solid" + colors.get("text-border") + "40",
        // Colours
        backgroundColor: colors.get("post-background"),
        color: colors.get("text-heading"),
        ...(isExpanded ? newHeight : {}),
        ...(isHovered ? hoverStyle : {}),
    };

    const overflowButton = needsOverflow ? (
        <div
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "10px",
                padding: "1rem",
                zIndex: 1,
                backgroundColor: "#00000000",
                // boxShadow: `-2px -50px 34px 0px ${colors.get(
                //     "post-background"
                // )} inset`,
            }}
        >
            <p
                style={{
                    color: colors.get("hyperlink"),
                    strokeWidth: "5px",
                    fontSize: "1.2rem",
                }}
            >
                [ See {isExpanded ? "Less" : "More"} ]
            </p>
        </div>
    ) : (
        ""
    );

    return (
        <>
            {/* Content */}
            <div style={outerStyle}>
                {/* Title */}
                <div
                    style={{
                        // Center Contents
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "1rem",
                    }}
                >
                    <h1
                        style={{
                            margin: "5px",
                            padding: "0px",
                            flexGrow: 1,
                            borderBottom:
                                "1px solid" + colors.get("text-border"),
                        }}
                    >
                        {PostTitle}
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gridColumnGap: "0.3rem",
                            padding: "5px",
                            margin: "0px",
                        }}
                    >
                        {children}
                    </div>
                </div>
                {/* info */}

                {/* Content */}
                <div
                    style={{
                        width: "100%",
                        padding: "1rem",
                        overflow: "hidden",
                        zIndex: 1,
                    }}
                >
                    <p>{PostContent}</p>
                </div>

                {overflowButton}
                {/* Footer */}
                <div
                    style={{
                        width: "100%",
                        padding: "1rem",
                    }}
                >
                    <p>{PostFooter}</p>
                </div>
            </div>
        </>
    );
}
