import styles from "./homepage.module.css";
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar";
import Featured from "./components/Featured/Featured";
import CategoryList from "./components/CategoryList/CategoryList";
import CardList from "./components/CardList/CardList";
import Menu from "./components/Menu/Menu";

export default function Home() {
  return (
  <div>
    <Featured/>
    <CategoryList/>
    <div className="{styles.content}">
      <CardList/>
      <Menu/>
    </div>
  </div>
  )
}
