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
        ul: ({ children, ...props }) => (
          <ul {...props} className="my-4 list-disc">
            {children}
          </ul>
        ),
        li: ({ children, ...props }) => (
          <li {...props} className="text-gray-800 ml-5">
            {children}
          </li>
        ),
        p: ({ children, ...props }) => (
          <p {...props} className="text-gray-800 mb-2">
            {children}
          </p>
        ),
        a: ({ children, ...props }) => (
          <a {...props} className="text-blue-600">
            {children}
          </a>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            {...props}
            className="border-solid border-l-4 border-orange-600 my-4 pl-4 py-2"
          >
            {children}
          </blockquote>
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
