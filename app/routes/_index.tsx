import { Box, Link, Text } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Box bg="tomato" w="100%" p={4} color="white">
        <Text size={"lg"}>Hello World!</Text>
        <Link
          color={"blue"}
          href="https://github.com/ibrahimbako"
          target="_blank"
        >
          My git hub
        </Link>
      </Box>
    </>
  );
}
