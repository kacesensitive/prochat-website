import { Divider } from "antd";
import React, { useState, useEffect } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Changes.css";

export const Changes = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {width > 700 ? (
        <>
          <div style={{ minHeight: "170px" }}></div>
          <h1>Changes</h1>
          <AiFillTwitterCircle size={40} color="rgb(0, 234, 255)" />
          <div className="changes">
            <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
            <h2>0.0.2 (Beta)</h2>
            <h3>Improvements</h3>
            <li>Added block height slider</li>
            <li>Added custom chat message size slider</li>
            <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
            <h2>0.0.1 (Beta)</h2>
            <h3>The beginning</h3>
            <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
          </div>
        </>
      ) : (
        <>
          <div style={{ minHeight: "170px" }}></div>
          <h1>Changes</h1>
          <AiFillTwitterCircle size={40} color="rgb(0, 234, 255)" />
          <div className="changes-m">
            <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
            <h2>0.0.2 (Beta)</h2>
            <h3>Improvements</h3>
            <li>Added block height slider</li>
            <li>Added custom chat message size slider</li>
            <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
            <h2>0.0.1 (Beta)</h2>
            <h3>The beginning</h3>
            <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
          </div>
        </>
      )}
    </div>
  );
};
