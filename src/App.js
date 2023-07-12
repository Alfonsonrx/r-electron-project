import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return (
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/settings" element={<Settings/>} />
        </Routes>
      </BrowserRouter>)
  } else {
    return (
      <HashRouter basename={'/'}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/settings" element={<Settings/>} />
        </Routes>
      </HashRouter>)
  }
}

export default App;
