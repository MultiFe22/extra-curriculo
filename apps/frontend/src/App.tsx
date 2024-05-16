import Opportunities from "./pages/Opportunities";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Opportunities />
    </QueryClientProvider>
  );
}

export default App;
