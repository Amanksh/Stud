import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar rounded className="shadow-lg font-bold fixed top-0 w-full">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="font-bold font-heading">
        <Navbar.Link href="#" className="font-bold text-xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "text-orange-500" : "text-gray-400"}`
            }
          >
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl">
          <NavLink
            to={"Posts"}
            className={({ isActive }) =>
              `${isActive ? "text-orange-500" : "text-gray-400"}`
            }
          >
            Posts
          </NavLink>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl">
          <NavLink
            to={"Notes"}
            className={({ isActive }) =>
              `${isActive ? "text-orange-500" : "text-gray-400"}`
            }
          >
            Notes
          </NavLink>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl">
          <NavLink
            to={"About"}
            className={({ isActive }) =>
              `${isActive ? "text-orange-500" : "text-gray-400"}`
            }
          >
            About
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
