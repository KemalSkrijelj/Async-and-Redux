import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
function App() {
  const counter = useSelector((state) => state.counter);
  const signIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Nav />
      {signIn && <h1>MovieList</h1>}
    </div>
  );
}

export default App;
