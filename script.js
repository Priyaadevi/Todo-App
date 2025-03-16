// Import Firebase SDK (Use CDN links)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your Firebase Configuration (Replace with your actual credentials)
const firebaseConfig = {
  apiKey: "AIzaSyCTofR0FKWX6pdg4joXqUjfZ70akhPPRlo",
  authDomain: "to-do-f2508.firebaseapp.com",
  projectId: "to-do-f2508",
  storageBucket: "to-do-f2508.appspot.com",  // Fixed storageBucket value
  messagingSenderId: "694500897852",
  appId: "1:694500897852:web:cb855cee87a4ca10b77f39",
  measurementId: "G-EC62677SSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

// Fetch and display tasks from Firebase
async function loadTasks() {
    taskList.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
        renderTask(doc.id, doc.data().text);
    });
}

// Add task to Firebase
async function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        console.error("Task input is empty!");
        return;
    }

    try {
        const docRef = await addDoc(collection(db, "tasks"), { text: taskText });
        console.log("Task added successfully with ID:", docRef.id);
        taskInput.value = "";
        loadTasks();
    } catch (error) {
        console.error("Error adding task:", error.message);
    }
}


// Delete task from Firebase
async function deleteTask(id) {
    await deleteDoc(doc(db, "tasks", id));
    loadTasks();
}

// Render task in UI
function renderTask(id, text) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${text}</span>
        <button onclick="deleteTask('${id}')">Delete</button>
    `;
    taskList.appendChild(listItem);
}

// Load tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);
// Make functions globally accessible
window.addTask = addTask;
window.deleteTask = deleteTask;
