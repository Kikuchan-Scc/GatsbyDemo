import { useStaticQuery, graphql } from "gatsby";

export const getUseLogo = () => {
  const { logo } = useStaticQuery(
    graphql`
      query getUseLogo {
        file(relativePath: { eq: "images/sample.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  return logo.childImageSharp;
};
