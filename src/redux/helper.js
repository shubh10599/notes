// export const delay = () => {
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve;
//     }, 5000)
//   );
// };

// import { resolve } from "core-js/fn/promise";

export const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};
