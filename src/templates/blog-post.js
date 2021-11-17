import { graphql } from "gatsby";
import React from "react";
import Nav from "../components/Nav";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.html);
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <article className="prose prose-lg max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: post.html }}></article>
      </div>
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
