import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import CurrencyServices from "./pages/CurrencyServices";
import Bundles from "./pages/Bundles";
import Leveling from "./pages/Leveling";
import Auth from "./pages/Auth";
import UserPanel from "./pages/UserPanel";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/currency-services" element={<CurrencyServices />} />
            <Route path="/bundles" element={<Bundles />} />
            <Route path="/leveling" element={<Leveling />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/user-panel" element={<UserPanel />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
