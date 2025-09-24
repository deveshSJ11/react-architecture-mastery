// App.jsx
import "./App.css";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";
import Commentsform from "./Commentform.jsx";
import Comment from "./Comment.jsx";
import Joker from './Joker.jsx';

function App() {
  return (
    <>

    <Joker/>
    <Counter/>

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
      
      <Commentsform/>

      <Comment/>
      
    </div>

    </>
    

    
  );
}

export default App;
