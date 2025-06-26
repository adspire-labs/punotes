
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import StudyMaterials from "./pages/StudyMaterials";
import SubmitMaterials from "./pages/SubmitMaterials";
import AdminMaterials from "./pages/AdminMaterials";
import SupportUs from "./pages/SupportUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/submit-materials" element={<SubmitMaterials />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/admin-materials" element={<AdminMaterials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
