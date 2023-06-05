import React, { useEffect, useState } from "react";
import "./App.css";
import "./leaflet.css"
import Context from "./context";

import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

function App() {
  const [allLoaded, setAllLoaded] = useState(false);

  const [pageLoaded, setPageLoaded] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    if (loaded && pageLoaded) {
      setAllLoaded(true);
      return;
    }
  }, [loaded, pageLoaded]);

  return (
    <>
      <div className={allLoaded ? "App" : "App hidden"}>
        <>
          <Context.Provider value={{ pageLoaded, setPageLoaded }}>
            <Navigation />
            <Footer />
          </Context.Provider>
        </>
      </div>
      {allLoaded ? null : <Loader></Loader>}
    </>
  );
}

export default App;
