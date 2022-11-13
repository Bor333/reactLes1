import {Form} from "./components/Form";
import {Form as FormClass} from "./class-components/Form";
import {Count as CountClass} from "./class-components/Count";

export const App = () => {
  return (
    <div className="App">
        <CountClass count={10}/>
        <hr/>
      <FormClass />
    </div>
  );
}

