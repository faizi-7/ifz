"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { Download } from "@mui/icons-material";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className={`${styles.container} ${
        isDropdownOpen ? styles.expanded : styles.collapsed
      }`}
    >
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" className="link">
            Faiz Iqbal
          </Link>
        </div>
        <div className={styles.mid} onClick={toggleDropdown}>
          <SearchIcon style={{ cursor: "pointer" }} />
        </div>
        <div className={styles.right}>
          <Link
            className="link"
            href="https://drive.google.com/file/d/1qWBZaVZ49cbterUK_dRkCvyQm7aJO6p9/view?usp=sharing"
          >
            Resume <Download />
          </Link>
        </div>
      </div>
      <div
        className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ""}`}
      >
        <a href="/blog">Writings</a>
        <a href="/draw">Drawing & Graphics</a>
        <a href="/videos">Filmography</a>
        <a href="/admin">Admin</a>
      </div>
    </div>
  );
}
