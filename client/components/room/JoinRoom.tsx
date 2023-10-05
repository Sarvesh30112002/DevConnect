import React, { useState } from "react";
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { ServerApi } from "../../utils/constants";

export default function JoinRoom(): JSX.Element {
	const [roomId, setRoomId] = useState("");
	const [password, setPassword] = useState("");

	const formSubmitEventHandler = () => {
		ServerApi.post("/api/joinRoom", {
			roomId,
			password: password,
		})
			.then((res) => {
				// Handle successful join
				console.log("Successfully joined room:", res.data);
				location.replace(`/room/${roomId}`);
			})
			.catch((err) => {
				// Handle error
				console.error("Error joining room:", err);
			});
	};

	return (
		<Flex
			minH={"50vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack
				spacing={4}
				w={"full"}
				maxW={"md"}
				bg={useColorModeValue("white", "gray.700")}
				rounded={"xl"}
				boxShadow={"lg"}
				p={6}
				my={12}
			>
				<Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
					Join New Room
				</Heading>
				<form>
					<FormControl mt={6}>
						<FormLabel>Room Id</FormLabel>
						<Input
							type="string"
							value={roomId}
							onChange={(e) => setRoomId(e.target.value)}
							placeholder="Enter Room Id"
							_placeholder={{ color: "gray.500" }}
						/>
					</FormControl>
					<FormControl mt={6}>
						<FormLabel>Room Password</FormLabel>
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="* * * * * * *"
							_placeholder={{ color: "gray.500" }}
						/>
					</FormControl>
					<Text
						fontSize={{ base: "sm", sm: "md" }}
						color={useColorModeValue("gray.800", "gray.400")}
						my="5"
					>
						Ask from room host or{" "}
						<Link color={"blue.400"} href="/createroom">
							Make your own room
						</Link>
					</Text>
					<Stack spacing={6}>
						<Button
							onClick={formSubmitEventHandler}
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}
						>
							Join Room
						</Button>
					</Stack>
				</form>
			</Stack>
			<Text
				fontSize="17px"
				position="absolute"
				bottom="-160px"
				left="620px"
			>
				Developed with 💖 by Sarvesh Hadole
			</Text>
		</Flex>
	);
}
