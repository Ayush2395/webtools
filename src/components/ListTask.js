import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { db } from "../backend/firebase.config";
import { useAppState } from "../context/AppState";

function ListTask({ getTaskID }) {
  const { user } = useAppState();
  const collectionRef = collection(db, `users/${user.uid}/tasks`);
  const que = query(collectionRef, orderBy("timeStamp", "desc"));
  const [task, setTask] = useState([]);

  function getTask() {
    onSnapshot(que, (snap) => {
      setTask(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }

  async function deleteTask(id) {
    const taskDoc = doc(collectionRef, id);
    await deleteDoc(taskDoc);
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <section className="section addTask_section">
        <h2 className="title">Your task</h2>
        {task.map((item) => {
          return (
            <div className="form_group" key={item.id}>
              <div className="form_input">
                <div style={{ position: "relative", top: "15px" }}>
                  {item.task}
                </div>
                <button
                  className="add_btn btn_2"
                  onClick={() => {
                    getTaskID(item.id);
                  }}
                >
                  <AiFillEdit size={25} color={"var(--dark-purple)"} />
                </button>
                <button
                  className="add_btn btn_3"
                  onClick={() => {
                    deleteTask(item.id);
                  }}
                >
                  <AiFillDelete size={25} color={"var(--link-color)"} />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ListTask;
