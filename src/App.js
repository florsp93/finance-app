import Form from "./components/form/form.component";
import Total from "./components/total/total.component";
import Balance from "./components/balance/balance.component";

const App = () => (
  <div>
    <div className="background-div">
      <Total />
      <Form />
    </div>
    <div>
      <Balance />
    </div>
  </div>
);

export default App;
