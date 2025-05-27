import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageRouter from './pageRouter/PageRouter';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <PageRouter />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
