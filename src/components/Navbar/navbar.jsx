import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu,NavbarMenuItem} from "@nextui-org/react";
import Logo from '../../assets/logo.png'
const navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
  
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} style={{ backgroundColor: "#C6FCED" }}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
          <img src={Logo} alt="Acme logo" className="w-20 h-20" />
          </NavbarBrand>
        </NavbarContent> 
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Our Services
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Schedules
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Location
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Appointment
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }

export default navbar