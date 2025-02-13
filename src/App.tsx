
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
