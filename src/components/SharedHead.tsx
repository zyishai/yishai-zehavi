import React from "react";
import { HeadFC, graphql, useStaticQuery } from "gatsby";

const Head: HeadFC = () => {
  const siteData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <title>{siteData.site.siteMetadata.title}</title>
    </>
  );
};

export default Head;
