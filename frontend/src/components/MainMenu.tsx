"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function MainMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Button>Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>All Nodes</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
