import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { handleUser } from "utils";
const firebaseConfig = {
  apiKey: "AIzaSyDWTQ-Nw5_TO7VIRGjBiHsVozRtyMWC1Lo",
  authDomain: "daemon-instagram-clone.firebaseapp.com",
  projectId: "daemon-instagram-clone",
  storageBucket: "daemon-instagram-clone.appspot.com",
  messagingSenderId: "920301993630",
  appId: "1:920301993630:web:ee9cb8b9ca0541e6e6458f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code)
  }
};

onAuthStateChanged(auth, (user) => {
  handleUser(user || false);
});

