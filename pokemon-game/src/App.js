import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import bacgroundImg from './img/bg1.jpg'

function App() {
  const redColor='red'
  return (
    <>
      <Header title="title of header" descr="description" />
      <Layout title="title of layout" descr = "descr layout" urlBg = {bacgroundImg} />
      <Layout  colorBg = {redColor}/>
      <Layout  urlBg = {bacgroundImg}/>
      <Footer />
    </>
  );
}

export default App;
