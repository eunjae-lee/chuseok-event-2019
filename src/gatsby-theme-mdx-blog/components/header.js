import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description },
      },
    }) => (
      <>
        <div className="p-8 pb-16">
          <h1 className="text-3xl text-gray-700 mb-4">
            <Link to="/">{title}</Link>
          </h1>
          <p className="text-lg text-gray-800">{description}</p>
        </div>
        <hr className="mx-8" />
      </>
    )}
  />
);
