import HeaderPartial from './partials/HeaderPartial/HeaderPartial';
import ProductList from './components/ProductsList';
import CartModal from './CartModal'

function App() {
  return (
    <div className="App">
      <HeaderPartial />
      <ProductList />
      <CartModal />
    </div>
  );
}

export default App;
