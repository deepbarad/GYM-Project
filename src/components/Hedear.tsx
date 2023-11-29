import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import gymLogo from "../assets/Image/gym Logo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { pageName: "Home", pathName: "/" },
    { pageName: "About", pathName: "/about" },
    { pageName: "Gallery", pathName: "/gallery" },
    { pageName: "Contact Us", pathName: "/contactUs" },
  ];
  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="fixed"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <img
              src={gymLogo}
              alt="Gym Logo"
              height={70}
              width={70}
              onClick={() => navigate("/")}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/gallery">
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/contactUs">
              Contact us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link to="#">Login</Link>
          </NavbarItem> */}
          <NavbarItem>
            <Button color="warning" onClick={() => navigate("/JoinForm")}>
              Join Now
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full"
                to={item?.pathName}
                size="lg"
              >
                {item?.pageName}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Header;
