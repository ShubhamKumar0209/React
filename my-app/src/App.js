
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us"/>
    <div className="container my-3">
      <About/>
      <TextForm heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;
