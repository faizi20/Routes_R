import React, { useEffect, useState } from "react";

function GoTop() {
  const [isVisible, setIsVisible] = useState(false);
  const topHandler = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightTop = 250;
    const windScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windScroll > heightTop) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div className="top-btn" onClick={topHandler}>
          <i class="fas fa-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default GoTop;
