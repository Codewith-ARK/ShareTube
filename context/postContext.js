import React, { createContext, useState } from "react";

// Create the context with initial values
const PostContext = createContext({
  POSTS: [],
  setPOSTS: () => {},
});

const PostProvider = ({ children }) => {
  // Functions to update tasks and completed tasks

  return <PostContext.Provider>{children}</PostContext.Provider>;
};

export { PostContext, PostProvider };
