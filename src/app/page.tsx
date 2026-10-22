import { Button, Column, Flex, Heading, Text } from "@once-ui-system/core";
import { person } from "@/resources";

export default function ContactPage() {
  return (
    <Column
      as="main"
      maxWidth="m"
      fillWidth
      paddingY="xl"
      horizontal="center"
    >
      <Flex
        as="section"
        fillWidth
        gap="xl"
        padding="l"
        vertical="center"
        s={{ direction: "column", gap: "l" }}
        style={{
          border: "1px solid rgba(255, 255, 255, 0.35)",
          borderRadius: "28px",
          background: "rgba(10, 25, 48, 0.76)",
          backdropFilter: "blur(22px) saturate(155%)",
          WebkitBackdropFilter: "blur(22px) saturate(155%)",
          boxShadow: "0 20px 55px rgba(25, 34, 48, 0.22)",
        }}
      >
        <Column flex={1} gap="m">
          <Text variant="label-strong-s" style={{ color: "#f4c66a" }}>
            CONTACT
          </Text>

          <Text variant="body-default-m" style={{ color: "#f1f2f5" }}>
            I’m open to conversations about business analytics, reporting, and
            new opportunities.
          </Text>

          <Flex gap="12" wrap>
            <Button href={`mailto:${person.email}`} variant="primary">
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

        <Heading
          as="h1"
          variant="display-strong-m"
          wrap="balance"
          style={{ flex: 1, color: "#fffaf0" }}
        >
          Let’s connect and work together!
        </Heading>
      </Flex>
    </Column>
  );
}
