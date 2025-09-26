
import './App.css'
import Button from '@mui/material/Button';

function App() {

  let handleClick = () =>
    console.log("button clicked");

  return (
    <>
      <h1>Material UI</h1>
      <Button variant="contained" onClick={handleClick} size="small"> 
        Click Me !
        </Button>
      <Button variant="contained" onClick={handleClick} color="success"> 
        Click Me again !
        </Button>
    </>
  )
}

export default App
