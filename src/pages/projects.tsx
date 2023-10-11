import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import SharedHead from "../components/SharedHead";
import DefaultLayout from "../components/DefaultLayout";
import Container from "@/components/Container";
import { Heading, Muted, Paragraph } from "@/components/Typography";
import { Button } from "@/components/ui/button";

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout title="Projects">
      <Container>
        <Heading level="h1">Recent Projects</Heading>
        <Paragraph className="mb-12">
          Mostly, I’m not working on full projects, since I like to experiment
          and learn new stuff often, but here’s couple of my recent projects I
          worked on or still working on.
        </Paragraph>

        <Project
          title="Quizz"
          technologyList={["Remix", "Surreal DB", "Tailwind CSS"]}
          description="Quizz is a web application that helps teachers and personal trainers to organize their professional schedule and manage their finances. It is built as a personal request of a relative and is still active today."
          siteUrl="https://quizz.yishaizehavi.com/"
          repositoryUrl="https://github.com/zyishai/quizz"
        />
      </Container>
    </DefaultLayout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = SharedHead;

type ProjectProps = {
  title: string;
  technologyList: string[];
  description: string;
  siteUrl: string;
  repositoryUrl: string;
};
const Project = ({
  title,
  technologyList,
  description,
  siteUrl,
  repositoryUrl,
}: ProjectProps) => {
  return (
    <article className="border-t py-4 mb-3">
      <h1 className="text-xl">{title}</h1>
      <Muted className="my-2">{technologyList.join(" · ")}</Muted>
      <Paragraph>{description}</Paragraph>
      <div className="mt-3 flex gap-x-3">
        <Button asChild>
          <Link to={siteUrl} target="_blank">
            Visit Site
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to={repositoryUrl} target="_blank">
            Source Code
          </Link>
        </Button>
      </div>
    </article>
  );
};
