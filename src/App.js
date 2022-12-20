import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import { Layout } from './components/Layout';
import { CartContextProvider } from './context/cartContext';



function App() {
  return (
    <CartContextProvider>
      <Layout>
        <Body/>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
