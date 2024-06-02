import React, {useState} from "react";
import AppHeader from "./components/HeaderComponents/AppHeader/AppHeader";
import AppContent from "./components/ContentComponents/AppContent/AppContent";
import AppFooter from "./components/FooterComponents/AppFooter/AppFooter";
import Providers from "./components/providers/Providers";
import BreakingNewsModal from "./components/BreakingNewsModal/BreakingNewsModal";
import useKeyPress from "./hooks/useKeyPress";

function App() {

    const [breakingNewsModalIsOpen, setBreakingNewsModalIsOpen] = useState<boolean>(false);

    useKeyPress('Escape', () => {
        setBreakingNewsModalIsOpen(false);
    });

    return (
    <Providers>
      <div className="App">
          <AppHeader setBreakingNewsModalIsOpen={setBreakingNewsModalIsOpen}/>
          <AppContent />
          <AppFooter />
          {breakingNewsModalIsOpen && <BreakingNewsModal setBreakingNewsModalIsOpen={setBreakingNewsModalIsOpen} />}
      </div>
    </Providers>
  );
}

export default App;
