import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import { getFirestore } from "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  FirebaseAppProvider as FirebaseProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";

import { FIREBASE_CONFIG } from "./constant";
import { ApplicationRouter } from "./router";
import { reportWebVitals } from "./service";
import { store } from "./state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Application = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <Provider store={store}>
      <FirestoreProvider sdk={firestoreInstance}>
        <HelmetProvider>
          <BrowserRouter>
            <ApplicationRouter />
          </BrowserRouter>
        </HelmetProvider>
      </FirestoreProvider>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <FirebaseProvider firebaseConfig={FIREBASE_CONFIG}>
      <Application />
    </FirebaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
