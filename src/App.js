import {Form} from "./components/Form";
import {Form as FormClass} from "./class-components/Form";
import {Count} from "./class-components/Count";

export const App = () => {
  return (
    <div className="App">
        {/*{<Form />}*/}
        <Count />
        <hr/>
      <FormClass />
    </div>
  );
}

