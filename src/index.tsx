import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { App } from "./App";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Global = createGlobalStyle`
:root {
  --white: #fff;
  --darkwhite: #e5e5e5;
  --darkblue: #42567a;
  --blue: #3877EE;
  --pink: #EF5DA8;
  --gray: #C7CDD9;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PT Sans, sans-serif;
}
body {
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
button {
  border: none;
  appearance: none;
  outline: none;
  cursor: pointer;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
