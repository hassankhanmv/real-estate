import { Button, Menu, Text, rem, useMantineTheme } from "@mantine/core";
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
  IconHeart,
  IconUserCircle,
  IconMenu2,
} from "@tabler/icons-react";
import classes from "../../header.module.css";

export function ButtonMenu() {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Button
          className={classes.btn}
          variant="default"
          color="#00000014"
          radius="md"
          leftSection={
            <IconMenu2
              style={{ width: rem(18), height: rem(18) }}
              stroke={2.5}
            />
          }
          pr={12}
        >
          <IconUserCircle size={18} />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Login</Menu.Item>
        <Menu.Item>Sign up</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
