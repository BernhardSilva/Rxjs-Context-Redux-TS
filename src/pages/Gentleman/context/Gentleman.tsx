//Context

import ComponentContext1 from "../components/ComponentContext1";
import ComponentContext2 from "../components/ComponentContext2";
import ComponentRedux2 from "../components/ComponentRedux2";
import { GentlemanProvider } from "./gentleman.context";

const Gentleman = () => {


  return (
    <div>
      <GentlemanProvider>
        <ComponentContext1 />
        <hr />
        <ComponentContext2 />
        <hr />
        <ComponentRedux2 />
      </GentlemanProvider>
    </div>
  )
}

export default Gentleman