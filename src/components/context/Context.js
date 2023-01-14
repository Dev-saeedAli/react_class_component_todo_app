import { createContext } from "react";

export const TodoContext = createContext(null)

export const TodoContextProvider = TodoContext.Provider
export const TodoContextConsumer = TodoContext.Consumer
