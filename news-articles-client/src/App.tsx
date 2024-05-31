import React from "react";
import AppHeader from "./components/HeaderComponents/AppHeader/AppHeader";
import AppContent from "./components/ContentComponents/AppContent/AppContent";
import AppFooter from "./components/FooterComponents/AppFooter/AppFooter";
import Providers from "./components/providers/Providers";

function App() {
  return (
    <Providers>
      <div className="App">
          <AppHeader />
          <AppContent />
          <AppFooter />
      </div>
    </Providers>
  );
}

export default App;
