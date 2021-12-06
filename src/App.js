import AppRouter from "./routers/AppRouter";
// import Home from './components/pages/Home/Home.js';
import Wrapper from "./components/layout/Wrapper/Wrapper.js";
// import Scripts from "./components/layout/Scripts/Scripts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <AppRouter />
      </Wrapper>
    </div>
  );
}

export default App;
