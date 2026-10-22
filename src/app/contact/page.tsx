import { Button, Column, Flex, Heading, Text } from "@once-ui-system/core";

export default function ContactPage() {
  return (
    <Column
      as="main"
      maxWidth="m"
      fillWidth
      paddingY="xl"
      horizontal="center"
    >
      <Column
        as="section"
        fillWidth
        gap="m"
        padding="l"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "28px",
          background: "rgba(10, 25, 48, 0.76)",
          backdropFilter: "blur(22px) saturate(155%)",
          WebkitBackdropFilter: "blur(22px) saturate(155%)",
          boxShadow: "0 20px 55px rgba(25, 34, 48, 0.22)",
        }}
      >
        <Text variant="label-strong-s" style={{ color: "#f4c66a" }}>
          CONTACT
        </Text>

        <Heading
          as="h1"
          variant="display-strong-m"
          wrap="balance"
          style={{ color: "#fffaf0" }}
        >
          Let’s connect and work together!
        </Heading>

        <Text variant="body-default-m" style={{ color: "#f1f2f5" }}>
          I’m open to conversations about business analytics, reporting, and new
          opportunities. Feel free to get in touch.
        </Text>

        <Flex gap="12" wrap>
          <Button href="mailto:hguptaa717@gmail.com" variant="primary">
            Email me
          </Button>

          <Button
            href="https://www.linkedin.com/in/harshgupta-businessanalyst/"
            variant="secondary"
          >
            Connect on LinkedIn
          </Button>
        </Flex>
      </Column>
    </Column>
  );
}
