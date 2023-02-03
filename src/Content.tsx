import { Button, Col, Row, Card } from "antd";
import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import first from "./assets/first.mp4";
import third from "./assets/third.mp4";
import fourth from "./assets/fourth.mp4";
import "./Content.css";

export const Content = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {width > 700 ? (
        <div>
          <Row>
            <Col span={18} push={6}>
              <video
                src={first}
                playsInline
                muted
                autoPlay
                controls
                loop
                style={{ maxWidth: "1000px", borderRadius: "20px" }}
              ></video>
            </Col>
            <Col span={6} pull={18}>
              <div className="tagline">
                <h1 className="h1-gradient">Monitor</h1>
                <h1 className="h1-nogradient">Your Chat</h1>
                <h1 className="h1-nogradient-lika">Like a </h1>
                <h1 className="h1-gradient-pro-really">Pro</h1>
              </div>
            </Col>
            <div style={{ minHeight: "600px" }} />
            <div className="tons">
              <h1 className="h1-nogradient-lika">Tons of</h1>
              <h1 className="h1-gradient-tons"> customization</h1>
              <div style={{ minHeight: "60px" }} />
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> Transparent Overlay</span>
              </div>
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> Custom Background Color</span>
              </div>
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> Custom Colors For</span>
              </div>
              <div className="checks-indent">
                <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
                <span> Subscribers</span>
              </div>
              <div className="checks-indent">
                <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
                <span> VIPs</span>
              </div>
              <div className="checks-indent">
                <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
                <span> Mods</span>
              </div>
              <div className="checks-indent">
                <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
                <span> First Time Chatters</span>
              </div>
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> Custom Username Size</span>
              </div>
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> Custom Message Size</span>
              </div>
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> Custom Emote Resolutions</span>
              </div>
              <div className="checks">
                <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
                <span> 5 Essential Filters</span>
              </div>
            </div>
            <br />
            <div className="tons">
              <h1 className="h1-nogradient-lika">Essential</h1>
              <h1 className="h1-gradient-tons"> filters</h1>
              <video
                src={third}
                playsInline
                muted
                autoPlay
                controls
                loop
                style={{
                  minHeight: "200px",
                  maxWidth: "400px",
                  marginTop: "100px",
                  minWidth: "650px",
                  borderRadius: "20px",
                }}
              ></video>
            </div>
            <br />
            <div className="tons">
              <h1 className="h1-nogradient-lika">Highlight</h1>
              <h1 className="h1-gradient-tons"> the important things</h1>
              <video
                src={fourth}
                playsInline
                muted
                autoPlay
                controls
                loop
                style={{
                  minHeight: "200px",
                  marginTop: "100px",
                  minWidth: "650px",
                  borderRadius: "20px",
                }}
              ></video>
            </div>
            <br />
            {/* <div className="tons">
              <h1 className="h1-nogradient-lika">And</h1>
              <h1 className="h1-gradient-tons"> more</h1>
              <br />
              <video
                src={fourth}
                playsInline
                muted
                autoPlay
                controls
                loop
                style={{
                  minHeight: "200px",
                  marginTop: "100px",
                  minWidth: "650px",
                  borderRadius: "20px",
                }}
              ></video>
            </div> */}
            <br />
            <div className="tons">
              <h1 className="h1-gradient-tons">Download Now</h1>
              <br />
              {/* <h2>Always free, only pay once to remove the ProChat logo!</h2> */}
              <Button
                className="navbutton-download"
                onClick={() => (window.location.href = "/download")}
              >
                <a className="link" href="/download">
                  Download
                </a>
              </Button>
              {/* <Button
                className="navbutton-buy"
                onClick={() => (window.location.href = "/pricing")}
              >
                <a className="link" href="/pricing">
                  Buy 🤑
                </a>
              </Button> */}
            </div>
          </Row>
        </div>
      ) : (
        <div>
          <div className="tagline-m">
            <h1 className="h1-gradient">Monitor</h1>
            <h1 className="h1-nogradient">Your Chat</h1>
            <h1 className="h1-nogradient-lika">Like a </h1>
            <h1 className="h1-gradient-pro-really">Pro</h1>
          </div>
          <br />
          <div className="tons-m">
            <h1 className="h1-nogradient-lika">Tons of</h1>
            <h1 className="h1-gradient-tons"> customization</h1>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> Transparent Overlay</span>
            </div>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> Custom Background Color</span>
            </div>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> Custom Colors For</span>
            </div>
            <div className="checks-indent-m">
              <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
              <span> Subscribers</span>
            </div>
            <div className="checks-indent-m">
              <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
              <span> VIPs</span>
            </div>
            <div className="checks-indent-m">
              <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
              <span> Mods</span>
            </div>
            <div className="checks-indent-m">
              <AiOutlineCheck style={{ color: "#5DF0FF" }} size={30} />
              <span> First Time Chatters</span>
            </div>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> Custom Username Size</span>
            </div>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> Custom Message Size</span>
            </div>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> Custom Emote Resolutions</span>
            </div>
            <div className="checks-m">
              <AiOutlineCheck style={{ color: "#5DB5FF" }} size={30} />
              <span> 5 Essential Filters</span>
            </div>
          </div>
          <br />
          <div className="tons-m">
            <h1 className="h1-nogradient-lika">Essential</h1>
            <h1 className="h1-gradient-tons"> filters</h1>
            <video
              src={third}
              playsInline
              muted
              autoPlay
              controls
              loop
              style={{
                maxWidth: "100%",
                marginTop: "100px",
                borderRadius: "20px",
              }}
            ></video>
          </div>
          <br />
          <div className="tons-m">
            <h1 className="h1-nogradient-lika">Highlight</h1>
            <h1 className="h1-gradient-tons"> the important things</h1>
            <video
              src={fourth}
              playsInline
              muted
              autoPlay
              controls
              loop
              style={{
                maxWidth: "100%",
                marginTop: "100px",
                borderRadius: "20px",
              }}
            ></video>
          </div>
          <br />
          {/* <div className="tons-m">
            <h1 className="h1-nogradient-lika">And</h1>
            <h1 className="h1-gradient-tons"> more</h1>
            <video
              src={fourth}
              playsInline
              muted
              autoPlay
              controls
              loop
              style={{
                maxWidth: "100%",
                marginTop: "100px",
                borderRadius: "20px",
              }}
            ></video>
          </div> */}
          <br />
          <div className="tons-m">
            <h1 className="h1-gradient-tons">Download Now</h1>
            <br />
            {/* <h2>Always free, only pay once to remove the ProChat logo!</h2> */}
            <Button
              className="navbutton-download"
              onClick={() => (window.location.href = "/download")}
            >
              <a className="link" href="/download">
                Download
              </a>
            </Button>
            {/* <Button
              className="navbutton-buy"
              onClick={() => (window.location.href = "/pricing")}
            >
              <a className="link" href="/pricing">
                Buy 🤑
              </a>
            </Button> */}
          </div>
        </div>
      )}
    </div>
  );
};
