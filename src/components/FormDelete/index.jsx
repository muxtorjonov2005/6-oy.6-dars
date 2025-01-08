import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./index.module.css";

function FormDelete() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteUser(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setUsers(users.filter((user) => user.id !== id));
          confirm('Rostanham o\'chirmoqchimisiz')        }
      })
      .catch((error) => {
        console.log("Xatolik yuz berdi:", error);
      })

  }

  return (
    <div className={styles.container}>
      <h3>Foydalanuvchilar ro'yxati</h3>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => deleteUser(user.id)} className={styles.button} >O'chirish</button>
            </li>
          ))}
        {users.length === 0 && <p>Foydalanuvchilar yo'q.</p>}
      </ul>
    </div>
  );
}

export default FormDelete;
