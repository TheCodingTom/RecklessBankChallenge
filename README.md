# README: Fast & Reckless Bank

This project is a banking application built for the Revel8 coding challenge. The challenge required implementing core banking functionalities such as account creation, deposit, withdrawal, and transfer.

---

## Project Background and Development Process

As someone new to Java and Spring Boot, I began this project by completing two online crash courses on Codecademy to grasp the fundamentals. This initial learning phase was crucial for understanding the core concepts of Java and how Spring Boot facilitates backend development, especially in comparison to Node.js, a backend technology I'm already familiar with.

ChatGPT was a valuable tool for looking up syntax and clarifying specific implementations during this learning curve.

Once I had a clearer understanding of the project structure and how the different components interact, I focused on implementing the backend logic. I used Postman to test each feature thoroughly before moving to the frontend.

Since I have more experience with React, developing the frontend was more straightforward. I used Vite with TypeScript for a lightweight and modern development setup.

Although I spent more than the suggested three hours (mostly due to learning Java and Spring Boot), my primary objective was to ensure that **all requested features** were ready for the interview.

> Note: Some frontend aspects (like real-time updates after account changes) still require a manual page refresh. I’ve left `TODO` comments in the code (in App.tsx) to explain next steps.

---

## Application Features

- **Create Account** – Add a new bank account using a form
- **Deposit Money** – Deposit funds into a selected account
- **Withdraw Money** – Withdraw funds
- **Transfer Money** – Transfer between two accounts
- **Accounts Overview** - Fetch and render accounts data (refresh needed)

---

## Running the Project Locally

### Backend

cd server
./mvnw spring-boot:run

Backend will be available at: http://localhost:8080

### Frontend

cd client
npm install
npm run dev

Frontend will be available at: http://localhost:5173

CORS is enabled to allow React to communicate with the Spring Boot backend

---

## Final notes

All core features have been implemented and tested. While the user interface and experience still need refinement, I focused on delivering the requested features.

At first, this challenge felt a bit intimidating due to my lack of experience with Java and Spring Boot. However, once I started to understand how the structure and logic compare to technologies I already know, like Node.js, I quickly gained confidence. In the end, I really enjoyed the process and learned a lot from it.
