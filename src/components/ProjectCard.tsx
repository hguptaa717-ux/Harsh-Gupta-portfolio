"use client";

import {
  AvatarGroup,
  Badge,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  /** Whether the project has a case study page to link to. */
  hasContent: boolean;
  description: string;
  avatars: { src: string; "aria-label"?: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  hasContent,
  description,
  avatars,
  link,
}) => {
  const tools = description
    ?.split("·")
    .map((tool) => tool.trim())
    .filter(Boolean);

  return (
    <Column className={styles.glassCard} fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />

      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}

        {(avatars?.length > 0 || (tools && tools.length > 0) || hasContent) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && (
              <AvatarGroup avatars={avatars} size="m" reverse />
            )}

            {tools && tools.length > 0 && (
              <Flex gap="8" wrap>
                {tools.map((tool) => (
                  <Badge
                    key={tool}
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-s"
                    arrow={false}
                  >
                    {tool}
                  </Badge>
                ))}
              </Flex>
            )}

            <Flex gap="24" wrap>
              {hasContent && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Explore project</Text>
                </SmartLink>
              )}

              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
