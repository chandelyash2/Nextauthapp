import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import UserContext from "../context/createContext";
import { useRouter } from "next/router";
function Select() {
  const { formData, setFormData } = useContext(UserContext);
  const [userSelect, setUserSelect] = useState({
    age: "",
    category: "",
    members: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setUserSelect({
      ...userSelect,
      [e.target.name]: e.target.value,
    });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
    fetch('/api/users/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: formData.firstName, email: formData.email })
    });

    

    console.log("User Data Submited:", formData);
    router.push("/");
  };

  const registerUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log("Sorry data is not registering ", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Select the fields</h1>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label for="age">Choose Yoour Age:</label>
          <select id="age" name="age" onChange={handleChange}>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="31">31</option>
            <option value="35">35</option>
          </select>
          <label for="category">Choose Your Category:</label>

          <select id="Category" name="category" onChange={handleChange}>
            <option value="Agriculture">Agriculture</option>
            <option value="It">It</option>
            <option value="Pharma">Pharma</option>
          </select>
          <label for="members">Choose Your team members:</label>
          <select id="Members" name="members" onChange={handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Select;
