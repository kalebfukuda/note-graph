"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

// Pages import
import CreateNote from "@/components/pages/CreateNote";

const navListMenuItems = [
  {
    title: "Notes",
    description: "Find list of all notes",
    icon: SquaresPlusIcon,
    action: "notes",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    action: "#",
  },
];

type NavListMenuProps = {
  actionsMap: Record<string, () => void>;
};

function NavListMenu({ actionsMap }: NavListMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, action }, key) => (
      <MenuItem
        key={key}
        className="flex items-center gap-3 rounded-lg"
        onClick={() => {
          actionsMap[action]?.();
          setIsMenuOpen(false);
          setIsMobileMenuOpen(false);
        }}
      >
        <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 w-6 text-gray-900",
          })}
        </div>

        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>

      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

type NavListProps = {
  actionsMap: Record<string, () => void>;
};

function NavList({ actionsMap }: NavListProps) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography as="a" href="#" variant="small" className="font-medium">
        <ListItem className="py-2 pr-4">Home</ListItem>
      </Typography>

      <NavListMenu actionsMap={actionsMap} />

      <Typography as="a" href="#" variant="small" className="font-medium">
        <ListItem className="py-2 pr-4">Contact Us</ListItem>
      </Typography>
    </List>
  );
}

type NavMenuProps = {
  openOffcanvas: (title: string, content: React.ReactNode) => void;
};

export default function NavMenu({ openOffcanvas }: NavMenuProps) {
  const [openNav, setOpenNav] = React.useState(false);

  const actionsMap = {
    notes: () => openOffcanvas("Create Note", <CreateNote />),
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography variant="h6" className="mr-4 cursor-pointer">
          Note Graph
        </Typography>

        <div className="hidden lg:block">
          <NavList actionsMap={actionsMap} />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav((cur) => !cur)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList actionsMap={actionsMap} />
      </Collapse>
    </Navbar>
  );
}
