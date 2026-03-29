import CreateWatchlist from "./components/CreateWatchlist"
import ScripRow from "./components/ScripRow"
import TopBar from "./components/TopBar"

function App() {
  return(
    <div className="flex flex-col items-center justify-center gap-4">
      <TopBar/>
      <ScripRow scripName="Reliance"/>
      <CreateWatchlist/>
    </div>
  )
}

export default App
