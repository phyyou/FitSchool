import {
  Button,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import { Footer } from "@components/home/Footer";

export default function Home() {
  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        async={true}
        defer={true}
      ></Script>

      <Stack minH={"100%"} direction={{ base: "column" }}>
        <Stack h={"100%"} direction={{ base: "column-reverse", md: "row" }}>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src={
                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Flex>
          <Flex
            p={8}
            flex={0.75}
            align={"center"}
            justify={{ base: "center", lg: "start" }}
          >
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  School Fit
                </Text>
                <br />{" "}
                <Text color={"blue.400"} as={"span"}>
                  우리 학교 급식의 건강
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                School Fit에서 확인하세요.
              </Text>
              <Box width={{ lg: "50%" }}>
                <div
                  id="g_id_onload"
                  data-client_id="1093219573949-ku461bq5dfa36llbga5h7iq72ek3bfv2.apps.googleusercontent.com"
                  data-login_uri="http://localhost:3000/signin/callback"
                  data-auto_prompt="false"
                  data-ux_mode="redirect"
                ></div>
                <div
                  className="g_id_signin"
                  data-type="standard"
                  data-size="large"
                  data-theme="outline"
                  data-text="sign_in_with"
                  data-shape="pill"
                  data-logo_alignment="left"
                ></div>
              </Box>
              {/* <Button
                rounded={"full"}
                width={"50%"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign with Google
              </Button> */}
            </Stack>
          </Flex>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
}
