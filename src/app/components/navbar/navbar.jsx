import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../themetoggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} />
        <Image src="/instagram.png" width={24} height={24} />
      </div>
      <div className={styles.logo}>HN</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
