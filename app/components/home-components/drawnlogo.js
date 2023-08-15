import logo_drawn from "../../assets/logo_drawn.gif";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function DrawnLogo() {
    const [showGif, setShowGif] = useState(false)
  
    useEffect(() => {
      setShowGif(true);
    }, []);
  
    return (
      <div style={{ width:"50vw", height:"50vw", position:"absolute", top:"50%", left:"75%", transform:"translate(-50%, -50%)" }}>
        <div onError={(event) => event.target.style.display = 'none'} />
  
        {showGif ? (
          <Image
            src={logo_drawn}
            alt="logo"
            fill
            priority
            onEnded={() => setShowGif(false)}
          />
        ) : (
          <button onClick={() => setShowGif(true)} style={{ display:"none" }}>Show GIF</button>
        )}
      </div>
    )
}