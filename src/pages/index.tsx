import * as React from "react";
import {
  useStaticQuery,
  type HeadFC,
  type PageProps,
  graphql,
  Link,
} from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import SharedHead from "../components/SharedHead";
import DefaultLayout from "../components/DefaultLayout";

import github from "../images/github-mark.svg";
import so from "../images/stackoverflow.svg";
import dev from "../images/dev-badge.svg";
import linkedin from "../images/linkedin.svg";
import { Heading, Paragraph } from "@/components/Typography";
import Container from "@/components/Container";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      horizontal: file(relativePath: { eq: "tree_horizontal.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1024, height: 360)
        }
      }
      vertical: file(relativePath: { eq: "tree_vertical.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 360, height: 769)
        }
      }
      selfie: file(relativePath: { eq: "selfie.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 164, height: 164)
        }
      }
    }
  `);
  const horizontalImage = getImage(data.horizontal);
  const verticalImage = getImage(data.vertical);
  const image =
    horizontalImage && verticalImage
      ? withArtDirection(horizontalImage, [
          {
            media: "(max-width: 769px)",
            image: verticalImage,
          },
        ])
      : null;
  const selfieImage = getImage(data.selfie);

  return (
    <DefaultLayout title="Home">
      <Container>
        {image ? (
          <GatsbyImage
            className="intro-art-directed shadow-lg rounded-xl mb-5"
            image={image}
            alt="Tree in a park"
          />
        ) : null}
        <Heading level="h1">Hello and welcome 🤗</Heading>
        <Paragraph>
          I’m Yishai Zehavi, a full-stack web developer, content writer, and
          avid board gamer.
        </Paragraph>
        <Paragraph>
          For the past 7 years I've worked as a software developer both in the
          military and in the high-tech industry. Recently, I found that I'm
          enjoying writing about programming and coding more than any other
          aspect of software development. That's why I decided to pursue the
          path of a writer. Currently, I'm writing a post series about HTTP
          caching (published in dev.to). I have lots of other topics I want to
          research and write about, and I hope to keep pursuing this path.
        </Paragraph>
        <Paragraph className="mb-5">
          I’m not usually taking selfies, but I was able to find a recent selfie
          I took:
        </Paragraph>
        {selfieImage ? (
          <GatsbyImage
            class="shadow-lg rounded-2xl mb-5"
            image={selfieImage}
            alt="Selfie of Yishai Zehavi"
          />
        ) : null}
        <Paragraph className="mt-0 mb-3">
          You can find today mostly on dev.to, but on other platforms as well:
        </Paragraph>
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="https://github.com/zyishai" target="_blank">
              <img src={github} alt="Github" width="32" height="32" />
            </Link>
          </li>
          <li>
            <Link
              to="https://stackoverflow.com/users/9078913/zyishai"
              target="_blank"
            >
              <img src={so} alt="Stackoverflow" width="32" height="32" />
            </Link>
          </li>
          <li>
            <Link to="https://dev.to/yishai_zehavi" target="_blank">
              <img src={dev} alt="Dev" width="32" height="32" />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/zyishai" target="_blank">
              <img src={linkedin} alt="Linkedin" width="32" height="32" />
            </Link>
          </li>
        </ul>
      </Container>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = SharedHead;
