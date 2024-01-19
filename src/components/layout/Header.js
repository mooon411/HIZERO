"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svg/logo.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setShaking] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const startShaking = () => {
    if (!isShaking) {
      setShaking(true);
    }
  };

  const stopShaking = () => {
    setShaking(false);
  };

  return (
    <header id="header" role="banner">
      <ul>
        <li>
          <div
            className={`burgerMenu ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <nav className={` ${isOpen ? "show" : "hide"}`}>
            <ul className="navMenu">
              <li
                className={`${isShaking ? "shaking" : ""}`}
                onMouseOver={startShaking}
                onMouseOut={stopShaking}
              >
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li
                className={`${isShaking ? "shaking" : ""}`}
                onMouseOver={startShaking}
                onMouseOut={stopShaking}
              >
                <Link href="/notice" onClick={toggleMenu}>
                  News
                </Link>
              </li>
              <li
                className={`${isShaking ? "shaking" : ""}`}
                onMouseOver={startShaking}
                onMouseOut={stopShaking}
              >
                <Link href="/notice" onClick={toggleMenu}>
                  List
                </Link>
              </li>
              <li
                className={`${isShaking ? "shaking" : ""}`}
                onMouseOver={startShaking}
                onMouseOut={stopShaking}
              >
                <Link href="/blogWrite" onClick={toggleMenu}>
                  Write
                </Link>
              </li>
            </ul>
            <div className="sign_wrap">
              <div
                className={`${isShaking ? "shaking" : ""}`}
                onMouseOver={startShaking}
                onMouseOut={stopShaking}
              >
                <Link href="/login" onClick={toggleMenu}>
                  LOGIN
                </Link>
              </div>
              <div
                className={`${isShaking ? "shaking" : ""}`}
                onMouseOver={startShaking}
                onMouseOut={stopShaking}
              >
                <Link href="/join" onClick={toggleMenu}>
                  JOIN
                </Link>
              </div>
            </div>
          </nav>
        </li>
        <li>
          <Link href="/" id="logo">
            <Image src={logo} alt="logo" />
          </Link>
        </li>
        <li className="right">
          <div className="dark_mode">
            <div class="dark-mode-toggle" id="darkModeToggle">
              <label class="switch">
                <input type="checkbox" id="darkModeCheckbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div className="bgGr"></div>
        </li>
      </ul>
    </header>
  );
}
