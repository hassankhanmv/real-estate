import {
  Box,
  Button,
  Center,
  Menu,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
  IconHeart,
  IconUserCircle,
  IconMenu2,
  IconBookmark,
  IconTrash,
} from "@tabler/icons-react";
import classes from "../../header.module.css";

export function PropertiesMenu() {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <a href="#" className={classes.link}>
          <Center inline>
            <Box component="span" mr={8}>
              Properties
            </Box>
            <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
          </Center>
          {/* Properties{" "}
          <IconChevronDown
            style={{ width: rem(16), height: rem(16) }}
            stroke={2}
          /> */}
        </a>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Featured Properties</Menu.Item>
        <Menu.Item>Past Transactions</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
