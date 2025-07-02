import { CartContextProvider } from "./context/CartContext";
import { CartSummary } from "./components/CartSummary";
import { PageSetup } from "./components/PageSetup";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      {/* <div className="container mt-3"> */}
        <div className="row">
          {/* Product Cards - 8/12 Columns */}
          <div className="col-md-8">
            <div className="d-flex  gap-3 pb-2">
              <PageSetup />
            </div>
          </div>

          {/* Cart Summary - 4/12 Columns */}
          {/* <div className="col-md-4 mt-3 mt-md-0"> */}
            <CartSummary />
          {/* </div> */}
        </div>
      {/* </div> */}
    </CartContextProvider>
  );
}

export default App;
