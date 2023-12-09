// utils imports
import { Routes, Route } from "react-router-dom"

// components imports
import Planet from "./pages/planet"
import PlanetDetail from "./pages/planet/detail"
import Layout from "./layout"
import Wishlist from "./pages/wishlist"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Planet />} /> {/* Set this as the default route */}
          <Route path="/planets" element={<Planet />} />
          <Route path="/planets/:id" element={<PlanetDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App