import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme }  from "./theme";
import { DarkMode } from "./DarkMode";
import { useContext } from "react";

function App() {
  const client = new QueryClient();
  const { isDark } = useContext(DarkMode);
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/search/:menuName/:id" element={<Search />}></Route>
          <Route path="/tv" element={<Tv />} />
          <Route path="/tv/:listType/:id" element={<Tv />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/home/:listType/:id" element={<Home />}></Route>
        </Routes>
      </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;