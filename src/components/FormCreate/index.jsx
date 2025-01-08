import { useState, useEffect } from "react";
import styles from "./index.module.css";
import axios from "axios";

function FormCreate() {
  let [users, setUsers] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function valid () {
    if (!name || !email || !password) {
      alert("Barcha maydonni to'ldiring!");
      return false;
    }
    if (password.length < 8) {
      alert("Parol 8 tadan ko'p bo'lishi shart!");
      return false;
    }
    return true;
  }

  function handleSave(e) {
    e.preventDefault();
    if (!valid()) return;
    let user = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/users", {state: user}, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Saqlandi");
          alert("Foydalanuvchi muvaffaqiyatli qo'shildi!");
        }
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            value={name}
            className={styles.input}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter name..."
            required
          />
        </div>
        <div className={styles.name}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            value={email}
            className={styles.input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email..."
            required
          />
        </div>
        <div className={styles.name}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={password}
            className={styles.input}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password..."
            required
          />
        </div>

        <button onClick={handleSave} className={styles.button}>
          SAVE
        </button>
      </form>
      
    </div>
  );
}

export default FormCreate;
