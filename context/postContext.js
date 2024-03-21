import React, { createContext } from "react";

// Create the context with initial values
const PostContext = createContext();

const PostProvider = ({ children }) => {
  return (
    <PostContext.Provider>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
