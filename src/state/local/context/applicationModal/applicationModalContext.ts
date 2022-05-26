import { createContext } from "react";

const ApplicationModalContext = createContext({
  showModal: (_modalContent: JSX.Element) => null,
  hideModal: () => null,
});

export { ApplicationModalContext };
