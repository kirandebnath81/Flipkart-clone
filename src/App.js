import "./App.css";

import Products from "./pages/Products/Products";
import { Header, Footer } from "./layout";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
