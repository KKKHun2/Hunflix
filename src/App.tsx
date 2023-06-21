
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/tv" element={<Tv />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
export default App;