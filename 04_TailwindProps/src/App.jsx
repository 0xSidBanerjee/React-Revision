import './App.css'
import Cards from '../components/Cards'

const App=()=> {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
      Hello world!
    </h1>
    <Cards username="Mash" usrBtn="Cream Puff"/>
    <Cards username="Cool Zero" usrBtn="Divine Visionary"/>
    </>
  )
}

export default App
