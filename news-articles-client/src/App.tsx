import React from "react";
import AppHeader from "./components/HeaderComponents/AppHeader/AppHeader";
import AppContent from "./components/ContentComponents/AppContent/AppContent";
import AppFooter from "./components/FooterComponents/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
