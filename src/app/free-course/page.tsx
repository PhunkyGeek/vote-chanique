import { Column, Row, Heading, Text, Schema, Meta, RevealFx, Badge } from "@once-ui-system/core";
import { baseURL, home, person, about } from "@/resources";
import FreeCourseCards from "@/components/FreeCourseCards";

const part1Link = "https://drive.google.com/file/d/1EHd-t0bM0AOC1vUs1pJJIruFS31briG6/view?usp=drive_link"; // replace with your download link
const part2Link = "https://drive.google.com/file/d/1e1LPIM_l1pWNgxq43OcKyg_TOzsSDDt6/view?usp=drive_link"; // replace with your download link

export async function generateMetadata() {
  return Meta.generate({
    title: "Free Personal Development Course — Chanique Evrs",
    description: "Free two-part personal development course by Chanique Evrs focused on mindset, resilience and practical wellbeing.",
    baseURL: baseURL,
    path: "/free-course",
    image: `/api/og/generate?title=${encodeURIComponent("Free Course — Chanique Evrs")}`,
  });
}

export default function FreeCourse() {
  return (
    <Column maxWidth="m" paddingY="12" gap="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/free-course"
        title="Free Personal Development Course"
        description="Two downloadable personal development course parts by Chanique Evrs"
        image={`/api/og/generate?title=${encodeURIComponent("Free Course — Chanique Evrs")}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column fillWidth horizontal="center" gap="m">
      <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
        <Heading variant="display-strong-s" wrap="balance">Free Personal Development Course</Heading>
        <Text onBackground="neutral-weak" variant="heading-default-xl">
          Download part 1 and part 2 of Chanique's free Udemy course on personal development - practical lessons for mental, emotional and physical wellbeing.
        Voting is your way of giving back support to cancer awareness and the community.
        </Text>
      </Column>

      <FreeCourseCards part1Link={part1Link} part2Link={part2Link} voteLink={about.calendar?.link || "/"} />
    </Column>
  );
}
