import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SafeComponent from "./SafeComponent";

import { capitalze } from "testmfe/utils";
import { SharedProvider, useSharedContext } from "testmfe/SharedProvider";

const Header = React.lazy(() => import("testmfe/Header"));
// import  Header  from 'testmfe/Header';
const Footer = React.lazy(() => import("testmfe/Footer"));
// import  Footer  from 'testmfe/Footer';

function IncrementCount() {
  const { count, incrementCount } = useSharedContext();

  return (<div>
    <div style={{ display: "flex", gap: '20px' }}>
      <span>Count: {count}</span>
      <button style={{ fontSize: '26px', fontWeight: '600', padding: '10px 15px' }} onClick={incrementCount}> + </button>
    </div>
  </div>)
}

const App = () => (
  <div className="container">
    <Suspense fallback={<div>Loading ...</div>}>
      <SafeComponent>
        <Header />
      </SafeComponent>

      <div>
        <h5> MFE 1</h5>
        <p>{capitalze('welcome')} to the MFE 1</p>
      </div>

      <div>
        <SharedProvider>
          <IncrementCount />
        </SharedProvider>
      </div>

      <Footer />
    </Suspense>
  </div >
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)