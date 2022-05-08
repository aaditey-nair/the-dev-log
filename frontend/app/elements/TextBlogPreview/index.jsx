import React from "react";

function TextBlogPreview({ details }) {
  return (
    <div>
      <h1 className="text-2xl font-black text-secondary mb-2">
        Title Goes Here
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="mt-4 text-sm text-primary">Sunday, 8th May 2022</p>
    </div>
  );
}

export default TextBlogPreview;
