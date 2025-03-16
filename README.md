# 📝 Todo Application

A **responsive Todo app** that allows users to add, delete, and manage tasks, with data stored in **Firebase Firestore**. The app is deployed using **GitHub Pages**.

## 🌐 Live Demo
🔗 [View the Website](https://priyaadevi.github.io/Todo-App/)

---

## 📂 Project Structure
```
/Todo-App
│── index.html       # Main HTML file
│── styles.css       # CSS for styling the application
│── script.js        # JavaScript for Firebase integration
│── README.md        # Documentation
```

---

## 🚀 Features
✅ **Add, Delete, and Manage Tasks**
✅ **Data Persistence with Firebase Firestore**
✅ **Responsive Design (Mobile-Friendly)**
✅ **Deployed on GitHub Pages**

---

## 🛠️ Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/priyaadevi/Todo-App.git
cd Todo-App
```

### 2️⃣ Deploy on GitHub Pages
1. Go to **Settings → Pages** in your repository.
2. Under **Branch**, select `main` and click **Save**.
3. Your site will be live at:
   ```
   https://priyaadevi.github.io/Todo-App/
   ```

---

## 🔥 Firebase Setup
### 1️⃣ Configure Firestore Database
1. **Go to Firebase Console** → [Click Here](https://console.firebase.google.com/)
2. Click **"Build" → "Firestore Database"**
3. Click **"Create Database"** → Choose **Start in test mode**
4. Set Firestore Rules:
   ```json
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /tasks/{taskId} {
         allow read, write: if true;
       }
     }
   }
   ```
5. Click **Publish**.

---

## 🖥️ How to Use
1️⃣ **Open the website** and enter a task in the input box.
2️⃣ Click **"Add Todo"** → The task will be saved in Firebase Firestore.
3️⃣ Click **"Delete"** to remove a task.
4️⃣ Refresh the page → Tasks will **persist** (stored in Firestore).

---



## 📝 License
This project is open-source and available under the **MIT License**.

---

### 📩 Need Help?
If you have any issues, feel free to open an **issue** in this repository.
