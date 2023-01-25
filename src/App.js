import "./App.css";
// import { signInWithGoogle } from "./Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <button onClick={signInWithGoogle}>Sign In With Google</button> */}
    </div>
  );
}

export default App;
