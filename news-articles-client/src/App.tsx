import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-buttons-wrapper">
          <div className="button-get-article-wrapper">
            <button>Get Article</button>
          </div>
          <div className="button-get-breaking-news-wrapper">
            <button>Breaking News</button>
          </div>
        </div>
        <div className="articles-retrieved-wrapper">
          <label>Articles Retrieved: {12}</label>
        </div>
      </header>
      <body className="app-body">
        <div className="article-card">
            article card
        </div>
        <div className="article-card">
            article card
        </div>
        <div className="article-card">
            article card
        </div>

      </body>
      <footer className="app-footer">
        <div className="articles-retrieved-wrapper">
          <div>Articles Retrieved: {12}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
