import React from "react";

const StoryContext = React.createContext({});

export const StoryProvider = StoryContext.Provider;
export const StoryConsumer = StoryContext.Consumer;
export { StoryContext };
