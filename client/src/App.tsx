import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import DpdPAct from "@/pages/DpdPAct";
import EuropeanUnionAct from "@/pages/EuropeanUnionAct";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/dpdp" component={DpdPAct} />
      <Route path="/eu" component={EuropeanUnionAct} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <CustomCursor />
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Router />
          <Footer />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
