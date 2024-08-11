import React from "react";

const BlogContent = ({ children }) => {
  return (
    <div className="py-16 px-8 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mt-16 markdown-content prose max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
