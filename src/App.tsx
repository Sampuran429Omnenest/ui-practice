import CreateWatchlist from "./components/CreateWatchlist"
import ScripRow from "./components/ScripRow"
import TopBar from "./components/TopBar"

function App() {
  return(
    <div className="flex flex-col gap-y-14">
        <div className="flex flex-col  items-center justify-center h-screen">
          <ScripRow scripName="Reliance"/>
          <ScripRow scripName="Reliance"/>
          <CreateWatchlist/>
          <TopBar/>
        </div>
    </div>
  )
}

export default App
