import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./index.module.css";

function FormGet() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);

          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h3>Foydalanuvchilar ma'lumoti</h3>
      {users.length === 0 && <p>Ma'lumot yuklashda xato</p>}
      {users.length < 0 && <p>Yuklanmoqda...</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FormGet;
