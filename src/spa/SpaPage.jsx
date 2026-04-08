import { useState } from "react";
import DigitalClockApp from "./DigitalClockApp";
import DateCounterApp from "./DateCounterApp";

function SpaPage() {
  const [aktivApp, setAktivApp] = useState("DigitalClockApp");

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "40px",
      marginBottom: "20px",
      padding: "40px" }}>


      <div style={{ marginBottom: "30px",justifyContent:"center", display: "flex",gap: "10px", }}>
        <button onClick={() => setAktivApp("DigitalClockApp")}
          style={{
            backgroundColor:"#6b3e26",
            color: "white",
            border:"none",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor:"pointer",
            fontWeight: "bold",
          }}
          >
          Digitális Óra
        </button>

        <button
          onClick={() => setAktivApp("DateCounterApp")}
          style={{
            backgroundColor:"#6b3e26",
            color: "white",
            border:"none",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor:"pointer",
            fontWeight: "bold", }}
        >
          Nap számláló applikáció
        </button>
      </div>
<div style={{
    textAlign: "center",
    backgroundColor:"#f8e8d0",
    color: "#6b3e26",
    padding:"20px",
    borderRadius: "10px",
    width:"320px",
    margin:"0px auto",
    boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
    }}>
      {aktivApp === "DigitalClockApp" && <DigitalClockApp />}
      {aktivApp === "DateCounterApp" && <DateCounterApp />}
      </div>
    </div>
    
  );
}

export default SpaPage;