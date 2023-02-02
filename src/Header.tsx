import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, Drawer, Button } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import type { MenuProps } from "antd";
import logo from "./assets/logolessspace.png";
import "./Header.css";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {width > 700 ? (
        <div>
          <a className="link" href="/#">
            <img src={logo} className="logo" alt="ProChat" />
          </a>
          <nav className="navbar">
            <Button
              className="navbutton"
              onClick={() => (window.location.href = "/changelog")}
            >
              📖 Changelog
            </Button>
            <Button
              className="navbutton"
              onClick={() => (window.location.href = "/pricing")}
            >
              💳 Pricing
            </Button>
            <Button
              className="navbutton"
              onClick={() => (window.location.href = "mailto:me@me.me")}
            >
              📞 Contact
            </Button>
            <Button
              className="navbutton-download"
              onClick={() => (window.location.href = "/download")}
            >
              <a className="link" href="#">
                Download
              </a>
            </Button>
          </nav>
        </div>
      ) : (
        <div>
          <a className="link" href="/#">
            <img src={logo} className="logo-m" alt="ProChat" />
          </a>
          <div className="side">
            <TbLayoutSidebarLeftCollapse
              onClick={showDrawer}
              size={30}
              style={{ marginTop: "15px" }}
            />
          </div>
          <Drawer
            title=""
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            style={{
              background:
                "linear-gradient(158deg,rgb(0, 170, 255) 0%,rgb(129, 247, 255) 100%)",
            }}
          >
            <div className="side">
              <TbLayoutSidebarLeftExpand
                onClick={onClose}
                size={30}
                color="black"
              />
            </div>
            <div className="drawer">
              <h2 onClick={() => (window.location.href = "/changelog")}>
                📖 Changelog
              </h2>
              <h2 onClick={() => (window.location.href = "/pricing")}>
                💳 Pricing
              </h2>
              <h2 onClick={() => (window.location.href = "mailto:me@me.me")}>
                📞 Contact
              </h2>
            </div>
          </Drawer>
        </div>
      )}
    </header>
  );
};

export default Header;
