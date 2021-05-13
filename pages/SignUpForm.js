import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import UserContext from "../context/createContext";

export default function SignUpForm() {
  const { formData, setFormData } = useContext(UserContext);
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState(false);
  const router = useRouter();

  const validation = () => {
    if (!registerData.firstName) {
      setErrors(true);
    } else {
      setErrors(false);
    }
    if (!registerData.email) {
      setErrors(true);
    } else {
      setErrors(false);
      console.log(registerData);

      router.push("/SelectForm");
    }
  };

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validation();
  };

  return (
    <div className={styles.container}>
     
        <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up Now</h1>
          <input
            name="firstName"
            onChange={handleChange}
            name="firstName"
            placeholder="First Name"
          />
          {errors && <p style={{color:'#1c8adb'}}>first name must be entered</p>}
          <input
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
          <input placeholder="Email" name="email" onChange={handleChange} />
          {errors && <p style={{color:'#1c8adb'}}>email must be entered</p>}
          <button type="submit">Next</button>
        </form>
    
    </div>
  );
}
