import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';

export const Firestore = () => {
    const [ newName, setNewName ] = useState("");
    const [ newAge, setNewAge ] = useState(0);
  
    const [ users, setUsers ] = useState([]);
    const usersCollectionRef = collection(db, "users");
  
  
    const createUser = async () => {
      await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)} )
    }
  
    const updateUser = async (id, age) => {
       const userDoc = doc(db, "users", id)
       const newFileds = {age: age + 1};
       await updateDoc(userDoc, newFileds)
    };
  
    const deleteUser = async (id) => {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
    }
  
    useEffect(() => {
  
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }
  
      getUsers();
  // eslint-disable-next-line
    }, [])
  
    return (
      <div>
        <input 
         placeholder="Name.." 
         onChange={(event) => {
         setNewName(event.target.value);
        }} />
        <input type='number' 
          placeholder="Age.." 
          onChange={(event) => {
          setNewAge(event.target.value
          )
          }} />
        
        <button onClick={createUser}>Create user</button>
        {users.map((user) => {
          return (
            <div>
              {""}
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
              <button 
                onClick={() => {updateUser(user.id, user.age)}}>Increase age</button>
              <button onClick={() => {deleteUser(user.id);}}>Delete user</button>
            </div>
          );
        })}
      </div>
    );
}
