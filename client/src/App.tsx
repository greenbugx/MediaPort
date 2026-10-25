import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
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
import { Loader } from "@/components/Loader";

function ScrollToTop() {
  const [location] = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location, lenis]);

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
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
        <CustomCursor />
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <AnimatePresence>
            {initialLoading && (
              <Loader
                autoHide={true}
                minDisplayTime={3000}
                onFinish={() => setInitialLoading(false)}
              />
            )}
          </AnimatePresence>
          <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Router />
            <Footer />
          </div>
        </QueryClientProvider>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
