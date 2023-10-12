import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import SharedHead from "../components/SharedHead";
import DefaultLayout from "../components/DefaultLayout";
import Container from "@/components/Container";
import { Heading, Paragraph } from "@/components/Typography";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";

const ResumePage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout title="Resume">
      <Container className="h-full w-full flex flex-col">
        <div className="flex justify-between items-center">
          <Heading level="h1">Resume</Heading>

          <Button
            variant="outline"
            className="flex items-center gap-x-1 bg-slate-50 border-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              <path d="M12 17v-6"></path>
              <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
            </svg>
            <span className="text-sm text-slate-700 font-medium">
              Download CV
            </span>
          </Button>
        </div>
        <Paragraph>
          Below, is a summary of my education and work experience. You can also
          download my resume as a pdf file.
        </Paragraph>
        <hr className="my-8" />

        <Timeline className="self-start pb-6">
          <Timeline.Group year="2015">
            <Timeline.Entry>
              Military school: software developer training
            </Timeline.Entry>
          </Timeline.Group>
          <Timeline.Group year="2016">
            <Timeline.Entry>GIS Web developer</Timeline.Entry>
            <Timeline.Entry>Full-Stack Web developer</Timeline.Entry>
          </Timeline.Group>
          <Timeline.Group year="2020">
            <Timeline.Entry>
              Graduated with B.Sc in Computer Science
            </Timeline.Entry>
          </Timeline.Group>
          <Timeline.Group year="2021">
            <Timeline.Entry>
              Work at Fiverr as Software Developer
            </Timeline.Entry>
          </Timeline.Group>
          <Timeline.Group year="2022">
            <Timeline.Entry>
              Took a break, rest and find my hobbies
            </Timeline.Entry>
          </Timeline.Group>
          <Timeline.Group year="2023">
            <Timeline.Entry>Freelancer and content writer</Timeline.Entry>
          </Timeline.Group>
        </Timeline>
        {/* <div className="self-start grid grid-cols-[auto,_auto,_auto] pb-6">
          <span className="px-3 py-8 flex justify-center items-center [&:not(:last-of-type)]:border-b border-slate-300">
            <span className="transform -rotate-90">2015</span>
          </span>
          <Separator orientation="vertical" className="bg-slate-300" />
          <div className="flex flex-col justify-center gap-y-8 py-8">
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
          </div>

          <span className="px-3 py-8 flex justify-center items-center [&:not(:last-of-type)]:border-b border-slate-300">
            <span className="transform -rotate-90">2016</span>
          </span>
          <Separator orientation="vertical" className="bg-slate-300" />
          <div className="flex flex-col justify-center gap-y-8 py-8">
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
          </div>

          <span className="px-3 py-8 flex justify-center items-center [&:not(:last-of-type)]:border-b border-slate-300">
            <span className="transform -rotate-90">2020</span>
          </span>
          <Separator orientation="vertical" className="bg-slate-300" />
          <div className="flex flex-col justify-center gap-y-8 py-8">
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Separator className="bg-slate-300" />
              <span className="leading-none">text</span>
            </div>
          </div>
        </div> */}
      </Container>
    </DefaultLayout>
  );
};

export default ResumePage;

export const Head: HeadFC = SharedHead;
