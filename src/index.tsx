import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  FirebaseAppProvider as FirebaseProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";

import { ApplicationRouter } from "./router";
import { reportWebVitals } from "./service";
import { store } from "./state";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./constant";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Application = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <Provider store={store}>
      <FirestoreProvider sdk={firestoreInstance}>
        <BrowserRouter>
          <ApplicationRouter />
        </BrowserRouter>
      </FirestoreProvider>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <FirebaseProvider firebaseConfig={firebaseConfig}>
      <Application />
    </FirebaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
