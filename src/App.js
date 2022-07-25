import Form from "./components/form/form.component";
import Total from "./components/total/total.component";
import Balance from "./components/balance/balance.component";

const App = () => (
  <div className="">
    <p className="lato300" style={{ letterSpacing: "1px" }}>
      con Financeapp podras llevar el control de tus ganancias y gastos de forma
      sencilla.
    </p>
    <Total />
    <Form />
    <Balance />
  </div>
);

export default App;
