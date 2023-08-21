import { Container } from "@chakra-ui/layout"
import { Route, Routes } from "react-router"
import StartPage from "./pages/StartPage"
import Header from "./components/header/Header"
import IsFetchingSpinner from "./components/fethingspinner/IsFetchingSpinner.tsx";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <Container>
        <Header />
        <IsFetchingSpinner />
        <Routes>
            <Route path="/" element={<StartPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </Container>
  )
}

export default App
