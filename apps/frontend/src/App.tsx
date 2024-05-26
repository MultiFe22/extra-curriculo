import Opportunities from "./pages/Opportunities/Opportunities";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Project/Project";
import SignUp from "./pages/SignUp/SignUp";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" Component={Opportunities} />
          <Route path="/project/:id" Component={Project} />
          <Route path="/signup" Component={SignUp} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
