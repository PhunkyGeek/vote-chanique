"use client";

import React, { useEffect, useState } from "react";
import { Row, Column, Heading, Text, Button, Media } from "@once-ui-system/core";

type Props = {
  part1Link: string;
  part2Link: string;
  voteLink: string;
};

const STORAGE_KEY_PART1 = "free_course_voted_part1";
const STORAGE_KEY_PART2 = "free_course_voted_part2";

export default function FreeCourseCards({ part1Link, part2Link, voteLink }: Props) {
  const [unlocked1, setUnlocked1] = useState(false);
  const [unlocked2, setUnlocked2] = useState(false);

  useEffect(() => {
    try {
      const p1 = localStorage.getItem(STORAGE_KEY_PART1) === "true";
      const p2 = localStorage.getItem(STORAGE_KEY_PART2) === "true";
      setUnlocked1(p1);
      setUnlocked2(p2);
    } catch (e) {
      // ignore
    }
  }, []);

  const handleVoteAndUnlock = (part: 1 | 2) => {
    // open vote link in new tab and set localStorage to unlock
    try {
      window.open(voteLink || "/", "_blank", "noopener,noreferrer");
      if (part === 1) {
        localStorage.setItem(STORAGE_KEY_PART1, "true");
        setUnlocked1(true);
      } else {
        localStorage.setItem(STORAGE_KEY_PART2, "true");
        setUnlocked2(true);
      }
    } catch (e) {
      // ignore
    }
  };

  const cardStyle: React.CSSProperties = { position: "relative", overflow: "hidden" };
  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.85)",
    color: "white",
    padding: "16px",
    textAlign: "center",
  };

  return (
    <Row fillWidth gap="24" s={{ direction: "column" }} paddingTop="20">
      {/* Card 1 */}
      <Row border="neutral-medium" radius="m" padding="16" gap="16" s={{ direction: "column" }} style={cardStyle}>
        <Media src="/images/projects/project-01/cover-01.jpg" alt="Personal Development Part 1" sizes="16" />
        <Column>
          <Heading variant="display-strong-xs">Personal Development Course - Part 1</Heading>
          <Text onBackground="brand-weak" variant="body-default-m" marginBottom="12">
            Foundations: mindset, confidence and building daily habits that last.
          </Text>
          <Button href={part1Link} variant="secondary" size="m" weight="default" target="_blank" rel="noopener noreferrer" disabled={!unlocked1}>
            Download Part 1
          </Button>
        </Column>

        {!unlocked1 && (
          <div style={overlayStyle} aria-hidden>
            <Column gap="8">
              <div style={{ fontSize: 40 }}>🔒</div>
              <Heading variant="display-strong-xs">Vote to download</Heading>
              <Text onBackground="neutral-weak">Click the button below to vote for Chanique and unlock this download.</Text>
              <Row gap="8" horizontal="center" paddingTop="8">
                <Button variant="primary" size="s" onClick={() => handleVoteAndUnlock(1)}>
                  Vote now
                </Button>
              </Row>
            </Column>
          </div>
        )}
      </Row>

      {/* Card 2 */}
      <Row border="neutral-medium" radius="m" padding="16" gap="16" s={{ direction: "column" }} style={cardStyle}>
        <Media src="/images/projects/project-01/cover-04.jpg" alt="Personal Development Part 2" sizes="16" />
        <Column>
          <Heading variant="display-strong-xs">Personal Development Course - Part 2</Heading>
          <Text onBackground="brand-weak" variant="body-default-m" marginBottom="12">
            Growth: emotional resilience, communication and creating a supportive community.
          </Text>
          <Button href={part2Link} variant="secondary" size="m" weight="default" target="_blank" rel="noopener noreferrer" disabled={!unlocked2}>
            Download Part 2
          </Button>
        </Column>

        {!unlocked2 && (
          <div style={overlayStyle} aria-hidden>
            <Column gap="8">
              <div style={{ fontSize: 40 }}>🔒</div>
              <Heading variant="display-strong-xs">Vote to download</Heading>
              <Text onBackground="neutral-weak">Click the button below to vote for Chanique and unlock this download.</Text>
              <Row gap="8" horizontal="center" paddingTop="8">
                <Button variant="primary" size="s" onClick={() => handleVoteAndUnlock(2)}>
                  Vote now
                </Button>
              </Row>
            </Column>
          </div>
        )}
      </Row>
    </Row>
  );
}
