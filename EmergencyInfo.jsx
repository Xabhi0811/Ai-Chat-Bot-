import React from "react";

export default function EmergencyInfo() {
  const showEmergencyInfo = () => {
    alert("Emergency Contacts:\nPolice: 100\nFire: 101\nAmbulance: 102\nInstant Help: 112");
  };

  return (
    <button className="emergency-btn" onClick={showEmergencyInfo}>
      Emergency Info
    </button>
  );
}
