import { Column, Flex, Heading, Text } from "@once-ui-system/core";

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56c0 .95.79 1.72 1.77 1.72h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const contactLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  width: "fit-content",
  textDecoration: "none",
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
        vertical="center"
        s={{ direction: "column", gap: "xl" }}
        style={{ minHeight: "70vh" }}
      >
        {/* Contact details on the left */}
        <Column flex={1} gap="l">
          <a href="mailto:hguptaa717@gmail.com" style={contactLinkStyle}>
            <EmailIcon />
            <Text variant="body-default-m" onBackground="neutral-strong">
              hguptaa717@gmail.com
            </Text>
          </a>

          <a
            href="https://www.linkedin.com/in/harshgupta-businessanalyst/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            style={contactLinkStyle}
          >
            <LinkedInIcon />
            <Text variant="body-default-m" onBackground="neutral-strong">
              View profile
            </Text>
          </a>
        </Column>

        {/* Heading on the right */}
        <Column flex={2} gap="m" horizontal="end" style={{ textAlign: "right" }}>
          <Text variant="label-strong-s" style={{ color: "#d49a4a" }}>
            CONTACT
          </Text>

          <Heading
            as="h1"
            variant="display-strong-m"
            wrap="balance"
          >
            Let’s connect and work together!
          </Heading>

          <Text variant="body-default-m" onBackground="neutral-weak">
            I’d be glad to hear from you about business analytics, reporting, or
            new opportunities.
          </Text>
        </Column>
      </Flex>
    </Column>
  );
}
