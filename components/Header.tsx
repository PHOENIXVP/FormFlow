"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Login", href: "/login" },
  { name: "Todos", href: "/todos" },
  { name: "Data USE hook", href: "/data" },
  { name: "todoList", href: "/todolist" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="stickey top-0">
      <ul className="flex flex-wrap space-x-3">
        {NAV_LINKS.map((nav) => {
          if (nav.href === "/" && pathname === "/") return null;
          return (
            <li key={nav.href}>
              <Link
                className={`link p-3 ${
                  nav.href === pathname
                    ? "active text-gray-900 bg-gray-100"
                    : ""
                }`}
                href={nav.href}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <hr />
      <p>Current path: {pathname}</p> */}
      <hr />
    </header>
  );
};
export default Header;
