# Daily Learning Streak Tracker

A simple full-stack web application that helps students maintain a **daily learning habit** by tracking their study streak.

This project was built as part of the **KALNET Full Stack Development Task** using **Next.js, TypeScript, Tailwind CSS, and API Routes**.

---

## Project Overview

Students often struggle to maintain consistency while studying.
This application allows a student to:

* Mark that they **studied today**
* Track their **current learning streak**
* See **total days studied**
* View **last study date**
* Access a **history of study dates**

The goal is to demonstrate **basic full-stack development skills** including frontend, backend APIs, and deployment.

---

## Tech Stack

The project is built using the following technologies:

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Next.js API Routes**
* **In-memory storage (for simplicity)**
* **Vercel deployment**

---

## Features

### 1. Dashboard

Displays:

* Current streak
* Total study days
* Last study date
* Button to mark **"I Studied Today"**

---

### 2️. Study Button

When the user clicks **I Studied Today**:

* The system records today's date
* Prevents duplicate entries
* Updates the study streak

Example message:

```
You have already marked today.
```

---

### 3️. Streak Logic

The streak follows these rules:

If a student studies on consecutive days, the streak increases.

Example:

```
10 March → Studied
11 March → Studied
12 March → Studied

Current Streak = 3
```

If a day is missed:

```
13 March → Missed
14 March → Studied

Streak resets to = 1
```

---

### 4️. Study History

The **History page** shows all study dates.

Example:

```
14 March 2026
12 March 2026
11 March 2026
10 March 2026
```

Newest entries appear first.

---

##  API Endpoints

### POST `/api/study`

Marks today's study.

Response:

```
{
  success: true,
  message: "Study recorded successfully"
}
```

---

### GET `/api/streak`

Returns:

```
{
  currentStreak: number,
  totalDays: number,
  lastStudyDate: string
}
```

---

### GET `/api/history`

Returns a list of study dates.

```
[
  "2026-03-14",
  "2026-03-12",
  "2026-03-11"
]
```

---

## ⚙️ Setup Instructions

### 1️. Clone the repository

```
git clone https://github.com/your-username/learning-streak-tracker.git
```

### 2️. Navigate to the project folder

```
cd learning-streak-tracker
```

### 3️. Install dependencies

```
npm install
```

### 4️. Run the development server

```
npm run dev
```

### 5️. Open in browser

```
http://localhost:3000
```

---

##  Deployment

This project is deployed using **Vercel**.

Steps:

1. Push code to **GitHub**
2. Connect the repository to **Vercel**
3. Deploy the project

Example deployment link:

```
https://learning-streak-tracker.vercel.app
```

---

##  Future Improvements

Possible enhancements:

* User authentication
* Persistent database (SQLite / Prisma)
* Multiple users
* Calendar view for study tracking
* Progress analytics

---
