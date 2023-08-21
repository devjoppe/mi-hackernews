import { Container } from "@chakra-ui/layout"
import { Route, Routes } from "react-router"
import StartPage from "./pages/StartPage"
import Header from "./components/header/Header"

function App() {
  return (
    <Container>
        <Header />
        <Routes>
            <Route path="/" element={<StartPage />} />
        </Routes>
    </Container>
  )
}

export default App
