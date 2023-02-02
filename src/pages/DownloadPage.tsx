import React, { useState, useEffect } from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./DownloadPage.css";

const DownloadPage = () => {
  const [os, setOS] = useState("loading");

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const detectOS = async () => {
      if (navigator.platform.indexOf("Win") !== -1) setOS("windows");
      if (navigator.platform.indexOf("Mac") !== -1) setOS("macos");
    };
    detectOS();
  }, []);

  return (
    <div>
      {width > 700 ? (
        <div className="container">
          <h1 className="title">Download ProChat</h1>
          <p className="subtitle">Please select your operating system</p>
          <div className="buttons-container">
            <a
              href="https://download-link-for-macos.com"
              className="download-button"
            >
              <div
                className={`os-button macos ${
                  os === "macos" ? "selected" : ""
                }`}
              >
                <FaApple size={70} />
                {os === "macos" && (
                  <div className="arrow">
                    <AiOutlineArrowDown size={45} color="#0984e3" />
                  </div>
                )}
              </div>
            </a>
            <a
              href="https://download-link-for-windows.com"
              className="download-button"
            >
              <div
                className={`os-button windows ${
                  os === "windows" ? "selected" : ""
                }`}
              >
                <FaWindows size={70} />
                {os === "windows" && (
                  <div className="arrow">
                    <AiOutlineArrowDown size={45} color="#55efc4" />
                  </div>
                )}
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="title">Download ProChat</h1>
          <p className="subtitle">Please select your operating system</p>
          <div className="buttons-container">
            <a
              href="https://download-link-for-macos.com"
              className="download-button"
            >
              <div
                className={`os-button-m macos ${
                  os === "macos" ? "selected" : ""
                }`}
              >
                <FaApple size={70} />
                {os === "macos" && (
                  <div className="arrow">
                    <AiOutlineArrowDown size={45} color="#0984e3" />
                  </div>
                )}
              </div>
            </a>
            <a
              href="https://download-link-for-windows.com"
              className="download-button"
            >
              <div
                className={`os-button-m windows ${
                  os === "windows" ? "selected" : ""
                }`}
              >
                <FaWindows size={70} />
                {os === "windows" && (
                  <div className="arrow">
                    <AiOutlineArrowDown size={45} color="#55efc4" />
                  </div>
                )}
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadPage;
