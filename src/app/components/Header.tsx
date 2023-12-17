import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <h2 className="HeaderLogo">NetFlix App</h2>
            {/* <Image src="" alt="app-logo" width={140} height={40}></Image> */}
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
}
