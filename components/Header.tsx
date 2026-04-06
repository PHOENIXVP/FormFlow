import Link from "next/link";

const Header = () => {
  return (
    <header className="stickey top-0">
      <ul className="flex flex-wrap">
        <li>
          <Link className="link" href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="link" href="/todos">
            Todos
          </Link>
        </li>
      </ul>
      <hr />
    </header>
  );
};
export default Header;
