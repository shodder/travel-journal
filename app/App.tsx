
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="entries-container" >
        <Entry />
      </main>
    </>
  )
}

