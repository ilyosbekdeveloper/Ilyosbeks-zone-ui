import { createContext } from "react";

const SaidbarContext = createContext({
  isSaidbar: false,
  setSaidbar: () => {},
});
export default SaidbarContext;
