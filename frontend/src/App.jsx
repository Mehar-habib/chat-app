import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatApp from "./pages/ChatApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
