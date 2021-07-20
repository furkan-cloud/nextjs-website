import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Articles</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Articles</Link>
          </li>
          <li>
            <Link href="/new-articles">Add New Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
