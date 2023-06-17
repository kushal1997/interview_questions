
import './App.css';
import { Header, Footer } from "./components/Layouts"
import { Sidebar } from "./components/Layouts/Sidebar"
import { MiddleTextArea } from "./components/cards/MiddleTextArea"

function App() {
  return (
    <div className="app">
    <Header />
        <Sidebar />
        <MiddleTextArea />
    
    </div>
  );
}

export default App;
