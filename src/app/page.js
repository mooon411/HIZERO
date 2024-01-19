"use client";

import { IoMailOpenOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  let [search, setSearch] = useState("");

  return (
    <>
      <div className="HomeGrid">
        <ul className="line01">
          <li className="cate">
            <ul>
              <h4>Category</h4>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Music</Link>
              </li>
              <li>
                <Link href="/">Video</Link>
              </li>
              <li>
                <Link href="/">list</Link>
              </li>
            </ul>
          </li>
          <li className="search">
            <div className="search_box">
              <h4>Search.</h4>
              <input
                name="search_text"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
            </div>
          </li>
          <li className="cover_img">
            <div className="img"></div>
          </li>
        </ul>
        <ul className="line02">
          <li className="mask_ani">
            <div className="mask_circle"></div>
            <div class="flow-text">
              <div class="flow">Welcome to the Zero World. </div>
              <div class="flow">Welcome to the Zero World. </div>
              <div class="flow">Welcome to the Zero World. </div>
              <div class="flow">Welcome to the Zero World. </div>
            </div>
          </li>
          <li className="center_wrap">
            <div className="mail">
              <a href="mailto: duddls6552@naver.com">
                <div className="icon">
                  <IoMailOpenOutline />
                </div>
                <p>duddls6552@naver.com</p>
              </a>
            </div>
            <div className="text_animation">
              <Link href="/">
                <ul>
                  <li>N</li>
                  <li>O</li>
                  <li>T</li>
                  <li>I</li>
                  <li>C</li>
                  <li>E</li>
                </ul>
              </Link>
            </div>
          </li>
          <li className="links">
            <ul>
              <li>
                <a href="tel:01071659586">
                  <MdCall />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zeroin_01/?hl=ko"
                  target="_blank"
                >
                  <RiInstagramFill />
                </a>
              </li>
              <li>
                <a href="https://github.com/mooon411" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="mailto: duddls6552@naver.com">
                  <IoMail />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
