import {useState} from 'react'
import '../styles/globals.css'
import createContext from "../context/createContext";
function MyApp({ Component, pageProps }) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    category: "",
    members: "",
  });
  return (
  <createContext.Provider value={{ formData, setFormData }}>
  <Component {...pageProps} />
  </createContext.Provider>
  )
}

export default MyApp
