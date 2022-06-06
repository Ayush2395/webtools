import React, { useEffect, useState } from "react";
import { useAppState } from "../context/AppState";
import { auth, db } from "../backend/firebase.config";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import Lottie from "react-lottie";
import animationData from "../assets/animation/9177-taskman.json";
import { TiTick } from "react-icons/ti";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import ListTask from "../components/ListTask";
import { MdErrorOutline } from "react-icons/md";

function Todos() {
  const { onAuthStateChanged, error, setError, user } = useAppState();
  const navigate = useNavigate();
  const collectionRef = collection(db, `users/${user.uid}/tasks`);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState(false);
  const [taskId, setTaskId] = useState("second");

  function getTaskID(id) {
    setTaskId(id);
  }

  const usersTask = async (event) => {
    event.preventDefault();
    setError("");
    if (task === "") {
      return setError({ error: true, msg: "Please type your task first" });
    }
    if (status === "")
      return setError({ error: true, msg: "Choose the status of task" });

    const userNewTask = {
      task: task,
      status: status,
      timeStamp: serverTimestamp(),
    };

    if (taskId !== undefined || taskId !== "") {
      const taskDoc = doc(collectionRef, taskId);
      await updateDoc(taskDoc, userNewTask)
        .then(() => {
          setError({ error: false, msg: "Your Task is updated" });
        })
        .catch((err) => {
          setError({ error: true, msg: err.code });
        });
      setTaskId("");
    } else {
      await addDoc(collectionRef, userNewTask)
        .then(() => {
          setError({ error: false, msg: "Your task is Added" });
        })
        .catch((err) => {
          setError({ error: true, msg: err.code });
        });
    }
    setTask("");
  };

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (!user) {
        navigate("/login");
      } else {
        navigate("/todos");
        setError({ error: true, msg: "Welcome" });
      }
    });
  }, [user]);

  useEffect(() => {
    if (taskId !== undefined || taskId !== "") {
      editHandler();
    }
  }, [taskId]);

  const editHandler = async () => {
    const taskDoc = doc(collectionRef, taskId);
    await getDoc(taskDoc).then((snap) => {
      setTask(snap.data().task);
      setStatus(snap.data().status);
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveaspectratio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="section todos_section">
        <div className="banner">
          <h1 style={{ color: "var(--yellow-color)" }}>Todo List</h1>
          <div className="animation">
            <Lottie options={defaultOptions} width={205} height={205} />
          </div>
        </div>
        {error?.msg && (
          <div className="button message">
            <MdErrorOutline size={25} color="var(--link-color)" />
            <p>{error?.msg}</p>
            <button
              onClick={() => setError({ error: false })}
              className="alert"
            >
              <AiFillCloseCircle color="var(--yellow-color)" size={25} />
            </button>
          </div>
        )}
        <form onSubmit={usersTask} className="form">
          <div className="form_group" style={{ marginTop: "80px" }}>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              className="form_input"
              placeholder=""
            />
            <label className="form_label">Your task</label>
            <button type={"submit"} className={"add_btn"}>
              <AiFillPlusCircle size={30} color={"var(--yellow-color)"} />
            </button>
            <button
              disabled={flag}
              onClick={() => {
                setFlag(true);
                setStatus("checked");
              }}
              className={"add_btn btn_2"}
            >
              <TiTick size={30} color={"var(--link-color)"} />
            </button>
            <button
              disabled={!flag}
              onClick={() => {
                setFlag(false);
                setStatus("unchecked");
              }}
              className={"add_btn btn_3"}
            >
              <AiFillCloseCircle size={30} color={"var(--text-color)"} />
            </button>
          </div>
        </form>
        <ListTask getTaskID={getTaskID} />
      </div>
    </>
  );
}

export default Todos;
