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
              </Stack>
            </Flex>
          </Stack>
          <Footer />
        </Stack>
      </>
    );
  }
  