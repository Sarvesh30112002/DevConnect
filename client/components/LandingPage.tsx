/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LandingPage(): JSX.Element {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <img
          style={{ padding: 0, marginTop: -170, marginBottom: -100, height:510 }}
          src={"/pair4.png"}
        />
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Code Together,{" "}
          <Text as={"span"} color={"blue.400"}>
          Grow Together
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} fontSize="xl" px="5">
          Need to pair code? We got you covered with our DevConnect with
          real time pair programming, chat and code sharing through whatsapp
          with one click !  
          <br />
          Connect On{" "}
          <span style={{ color: "blue", display: "inline" }}>
          DevConnect  &nbsp;
          </span>
          !!!
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NextLink href="/joinroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Join New Room
            </Button>
          </NextLink>
          <NextLink href="/createroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Create Room
            </Button>
          </NextLink>
        </Stack>
        <Text fontSize="xl" position="absolute" bottom="-px">
            Developed with 💖 by Sarvesh Hadole !
            </Text>
      </Stack>
    </Container>
  );
}
