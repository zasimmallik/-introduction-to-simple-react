import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {
  function handleClick() {
    alert('Button clicked');

  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h1>React</h1>

      <Counter></Counter>
      <Team></Team>


      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>

      <button onClick={() => addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
