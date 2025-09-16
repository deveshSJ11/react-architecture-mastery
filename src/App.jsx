// App.jsx
import "./App.css";
import Button from "./Button.jsx";
// import Form from "./form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";

function App() {
  return (
    <div className="App">
      <LikeButton />

      <h1>React Events & State Example</h1>

      {/* Event Handling Example */}
      <section>
        <h2>Event Handling</h2>
        <Button />
        <Form />
      </section>

      {/* State Management Example */}
      <section>
        <h2>State with useState Hook</h2>
        <Counter />
      </section>
    </div>
  );
}

export default App;
