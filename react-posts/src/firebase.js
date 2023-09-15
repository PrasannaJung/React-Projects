import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXWTO7hfEpC4gqzGGxj-VSz-sFwqLAYqI",
  authDomain: "react-http-f9209.firebaseapp.com",
  projectId: "react-http-f9209",
  storageBucket: "react-http-f9209.appspot.com",
  messagingSenderId: "123991833988",
  appId: "1:123991833988:web:ba9c1c6125dd3fd469f1d1",
  databaseURL: "https://react-http-f9209-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export { app };
