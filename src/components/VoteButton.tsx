"use client";

import React from "react";
import { Button, Row, Avatar } from "@once-ui-system/core";
import { person } from "@/resources";

interface VoteButtonProps {
  href: string;
  id?: string;
  children: React.ReactNode;
}

export default function VoteButton({ href, id, children }: VoteButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem("hasVoted", "true");
    } catch (err) {
      // ignore
    }

    // open vote link in new tab
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Button id={id} data-border="rounded" onClick={handleClick} variant="secondary" size="m" weight="default" arrowIcon>
      <Row gap="8" vertical="center" paddingRight="4">
        <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />
        {children}
      </Row>
    </Button>
  );
}
