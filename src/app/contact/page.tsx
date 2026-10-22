import { Column, Flex, Heading, Text } from "@once-ui-system/core";

const contactLinkStyle = {
  color: "#fffaf0",
  fontSize: "1rem",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  overflowWrap: "anywhere" as const,
};

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
          minHeight: "420px",
          border: "1px solid rgba(255, 255, 255, 0.35)",
          borderRadius: "28px",
          background: "rgba(10, 25, 48, 0.76)",
          backdropFilter: "blur(22px) saturate(155%)",
          WebkitBackdropFilter: "blur(22px) saturate(155%)",
          boxShadow:
            "0 20px 55px rgba(25, 34, 48, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Contact details on the left */}
        <Column flex={1} gap="xl">
          <Column gap="8">
            <Text variant="label-strong-s" style={{ color: "#f4c66a" }}>
              EMAIL
            </Text>
            <a href="mailto:hguptaa717@gmail.com" style={contactLinkStyle}>
              hguptaa717@gmail.com
            </a>
          </Column>

          <Column gap="8">
            <Text variant="label-strong-s" style={{ color: "#f4c66a" }}>
              LINKEDIN
            </Text>
            <a
              href="https://www.linkedin.com/in/harshgupta-businessanalyst/"
              target="_blank"
              rel="noreferrer"
              style={contactLinkStyle}
            >
              linkedin.com/in/harshgupta-businessanalyst
            </a>
          </Column>
        </Column>

        {/* Heading on the right */}
        <Column flex={2} gap="m" horizontal="end" style={{ textAlign: "right" }}>
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
          <Text variant="body-default-m" style={{ color: "#e5e8ef" }}>
            I’d be glad to hear from you about business analytics, reporting, or
            new opportunities.
          </Text>
        </Column>
      </Flex>
    </Column>
  );
}
