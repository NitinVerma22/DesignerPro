import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSlot } from "@/components/AdSlot";
import { SimpleTest } from "@/components/SimpleTest";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/test-react" component={SimpleTest} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showTest, setShowTest] = useState(false);

  // Show simple test if there are loading issues
  if (showTest) {
    return <SimpleTest />;
  }

  try {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <AdSlot />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("App loading error:", error);
    return <SimpleTest />;
  }
}

export default App;
