import React, { useEffect, useState } from "react";

export default function Time() {
    const [currentDate, setDate] = useState(new Date());
    const refresh = () => {
        setDate(new Date());
    };

    useEffect(() => {
        refresh();
    });

    return(
        <div className="Time">
        <h1>Bonjour</h1>
        <p className="horloge">
          Nous sommes le&nbsp;
          <span>{currentDate.toLocaleDateString()}</span> et il est{" "}
          <span>{currentDate.toLocaleTimeString()}</span>
        </p>
        <img src="img/horloge.jpg" alt="Horloge" />
      </div>
   
    )
}

