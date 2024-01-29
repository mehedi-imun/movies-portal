/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext } from "react";
// @ts-expect-error
const MovieContext = createContext();
// @ts-expect-error
const ThemeContext = createContext();

export { MovieContext,ThemeContext };
