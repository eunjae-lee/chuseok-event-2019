import React from 'react';
import { MDXProvider } from '@mdx-js/react';

export default ({
  children,
  pageContext: {
    frontmatter: { title, description },
  },
}) => {
  return (
    <MDXProvider
      components={{
        h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
        h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
        h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
        h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
        h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
        p: ({ children, ...props }) => (
          <p {...props} className="text-gray-800">
            {children}
          </p>
        ),
      }}
    >
      <article className="p-8">
        <h2 className="text-2xl text-orange-600">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        {children}
      </article>
    </MDXProvider>
  );
};
