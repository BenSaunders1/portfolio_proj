import {
    IconCode,
    IconCpu2,
    IconGitCommit,
    IconMessageReport,
    IconSettings,
    IconTool,
} from "@tabler/icons-react";
import Button from "../components/button";
import { useColors } from "../components/colors";
// import { useDarkMode } from "usehooks-ts";
import Post from "../components/post";

export default function Home() {
    const colors = useColors();
    // const { toggle } = useDarkMode();

    return (
        <>
            {/* Navbar */}
            {/* Content */}

            {/* Outer Div */}
            <div
                style={{
                    // Center Contents
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    paddingTop: "150px",

                    // Colours
                    backgroundColor: colors.get("white"),
                }}
                // onClick={toggle}
            >
                {/* Inner Div */}
                <div
                    style={{
                        // Center Contents horizontally
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                        gap: "1rem",

                        // Size
                        maxWidth: 800,
                        width: "100%",
                    }}
                >
                    {/* Content */}
                    <Post
                        PostTitle="The Bentendo (8-bit breadboard computer): The ALU"
                        // Generate 5 paragraphs of lorem ipsum
                        PostContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est."
                        PostFooter="12-06-2002 | 12:00 PM | Project-5 Update 1"
                    >
                        <Button>
                            <IconCode />
                        </Button>
                        <Button>
                            <IconTool />
                        </Button>
                    </Post>
                    <Post
                        PostTitle="Post about something else"
                        PostContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est."
                        PostFooter="02-06-1999 | 12:00 PM | Project-1 Update 3"
                    >
                        <Button>
                            <IconCpu2 />
                        </Button>
                        <Button>
                            <IconSettings />
                        </Button>
                    </Post>
                    <Post
                        PostTitle="Post about something else"
                        PostContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae pellentesque lacus, non fermentum nulla. Pellentesque vel sapien at mi viverra consequat id ac risus. Suspendisse tincidunt, ante non vestibulum venenatis, erat orci interdum enim, vitae fermentum odio nulla et mauris. Vivamus viverra est a eros ultrices, non consectetur augue finibus. Sed feugiat varius nibh, nec pretium est iaculis vel. Donec lobortis eleifend fringilla. In lorem est, efficitur nec lorem id, laoreet venenatis felis. Vestibulum mollis mauris metus, sit amet molestie justo semper vel. Sed tempus justo vitae euismod hendrerit. Etiam tortor lacus, elementum vel risus vel, scelerisque tristique erat. Donec sit amet felis est."
                        PostFooter="02-06-1999 | 12:00 PM | Project-1 Update 3"
                    >
                        <Button>
                            <IconGitCommit />
                        </Button>
                    </Post>
                </div>
            </div>
        </>
    );
}
