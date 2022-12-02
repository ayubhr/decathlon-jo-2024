import React, { useState } from "react";
import Hero from "./components/Home/hero/Hero";
import Nouveaute from "./components/Home/nouveaute/Nouveaute";
import Promotion from "./components/Home/promotion/Promotion";
import NavBar from "./components/navbar/NavBar";
import Modal from "./components/Modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [displayConfig, setDisplayConfig] = React.useState({
    modal: false,
    title: null,
    msg: null,
    type: "success",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar setDisplayConfig={setDisplayConfig} />
        <Promotion setDisplayConfig={setDisplayConfig} />
      </div>
      {displayConfig.modal && (
        <Modal setDisplayConfig={setDisplayConfig} {...displayConfig} />
      )}

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
