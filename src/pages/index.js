import * as React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Tab from "../components/Tab";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between">
        <div className="md:w-9/12 w-full space-y-3 md:pr-3 pr-0">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link
              to={node.fields.slug}
              className="w-full md:h-52 h-96 bg-white shadow-md md:flex"
            >
              <Card
                title={node.frontmatter.title}
                classify={node.frontmatter.classify}
                date={node.frontmatter.date}
              />
            </Link>
          ))}
        </div>
        <Tab />
      </div>
    </div>
  );
};

export const IndexQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            classify
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
