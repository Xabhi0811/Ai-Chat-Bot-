import React from "react";
import Chat from "./components/Chat";
import EmergencyInfo from "./components/EmergencyInfo";
import FAQ from "./components/FAQ";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h2 className="title">AI-Powered Public Safety Chatbot</h2>
      <Chat />
      
       <EmergencyInfo />
      <FAQ/>  
    </div>
  );
}
