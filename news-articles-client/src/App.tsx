import React, {useState} from "react";
import AppHeader from "./components/HeaderComponents/AppHeader/AppHeader";
import AppContent from "./components/ContentComponents/AppContent/AppContent";
import AppFooter from "./components/FooterComponents/AppFooter/AppFooter";
import Providers from "./components/providers/Providers";
import BreakingNewsModal from "./components/BreakingNewsModal/BreakingNewsModal";

function App() {

    const [breakingNewsModalIsOpen, setBreakingNewsModalIsOpen] = useState<boolean>(false);


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
