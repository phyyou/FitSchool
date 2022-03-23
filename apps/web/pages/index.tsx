import { Box, Button, Card, Container, Flex, Section, Text, Heading } from "ui";

export default function Home() {
  return (
    <Box
      css={{
        width: "100%",
        height: "100%",
        py: "$4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button radii={"pill"} size={3}>
        Button
      </Button>
      <Section size="3">
        <Container size="3">
          <Container size="2">
            <Text id="card" css={{ mb: "$6", scrollMarginTop: "$7" }}>
              Card
            </Text>
          </Container>
          <Flex css={{ gap: "$3" }}>
            <Box css={{ width: 250 }}>
              <Card css={{ p: "$3" }}>
                <Heading css={{ mb: "$2" }}>
                  Modulz raises $4.2M to close the gap between design and code
                </Heading>
                <Text size="3" css={{ color: "$slate11", lineHeight: "23px" }}>
                  Modulz is a visual code editor that empowers teams to design,
                  develop, document and deploy a design system, without writing
                  code.
                </Text>
              </Card>
            </Box>
            <Box css={{ width: 250 }}>
              <Card as="a" href="#" css={{ p: "$3" }} variant="interactive">
                <Heading css={{ mb: "$2" }}>
                  Modulz raises $4.2M to close the gap between design and code
                </Heading>
                <Text size="3" css={{ color: "$slate11", lineHeight: "24px" }}>
                  Modulz is a visual code editor that empowers teams to design,
                  develop, document and deploy a design system, without writing
                  code.
                </Text>
              </Card>
            </Box>
            <Box css={{ width: 250 }}>
              <Card as="button" variant="ghost" css={{ p: "$3" }}>
                <Text size="3" css={{ lineHeight: "24px", fontWeight: 500 }}>
                  Default Variants
                </Text>
                <Text size="3" css={{ color: "$slate11", lineHeight: "24px" }}>
                  Modulz is a visual code.
                </Text>
              </Card>
            </Box>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
}
