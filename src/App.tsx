import React from "react";
import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LeftSection from "./coponents/LeftSection";
import localProfileData from "./profileData.json";
import Footer from "./coponents/Footer";
import LoadingScreen from "./coponents/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import Project from "./coponents/Project";
import AppApiContext from "./AppContextProvider";
import HomePage from "./coponents/Home";

function App() {
  const [appData, setAppData] = React.useState(localProfileData);
  const [isLoadingData, setIsLoadingData] = React.useState(true);

  React.useEffect(() => {
    fetch("https://google.com")
      .then((res) => res.json())
      .then((res) => {
        setAppData(localProfileData);
        setIsLoadingData(false);
      })
      .catch((err) => {
        setTimeout(() => {
          setAppData(localProfileData);
          setIsLoadingData(false);
        }, 1000);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/article/:articleId",
      element: <Project />,
    },
  ]);

  return (
    <AppApiContext.Provider value={{
      appData
    }}>
      <div className="appSection">
        {isLoadingData ? (
          <LoadingScreen />
        ) : (
          <React.Fragment>
            <LeftSection />
            <AnimatePresence mode="wait">
              <RouterProvider router={router} />
            </AnimatePresence>
          </React.Fragment>
        )}
      </div>
      <Footer />
    </AppApiContext.Provider>
  );
}

export default App;
