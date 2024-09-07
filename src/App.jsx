import './styles/App.css'
import useBearsStore from './zustand/bearsStore'

function App() {
  const bears = useBearsStore((state) => state.bears)
  const increasePopulation = useBearsStore((state) => state.increasePopulation)
  return (
    <div>
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
    </div>
  )
}
export default App
