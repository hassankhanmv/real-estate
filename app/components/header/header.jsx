import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
  Select,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconPhoto,
  IconArrowRight,
  IconHeart,
  IconUserCircle,
  IconMenu2,
} from "@tabler/icons-react";
import "@mantinex/mantine-logo/styles.css";
import { ButtonMenu } from "./components/button-menu/button-menu";
import { PropertiesMenu } from "./components/properties-menu/properties-menu";
import { AuthModal } from "../modal/auth-modal";

import classes from "./header.module.css";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCB8ybnu9u2ckzdiRRDl1YK9hCf5FBoZ2kYQ&s"
              }
              alt={"image"}
              height={50}
            />
            <Group gap={0} visibleFrom="sm">
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <PropertiesMenu />
                    </Center>
                  </a>
                </HoverCard.Target>
              </HoverCard>
              <Divider orientation="vertical" />
              <a href="#" className={classes.link}>
                Let's Connect
              </a>
              <Divider orientation="vertical" />
              <a href="#" className={classes.link}>
                (231) 902-34892
              </a>
            </Group>
          </Group>
          <Group visibleFrom="sm">
            <Button
              onClick={open}
              className={classes.btn}
              justify="center"
              leftSection={<IconHeart size={18} />}
              variant="default"
              color="#00000014"
              radius="md"
            >
              Saved
            </Button>
            <ButtonMenu />
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <PropertiesMenu />
            </Center>
          </UnstyledButton>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              onClick={open}
              className={classes.btn}
              justify="center"
              leftSection={<IconHeart size={18} />}
              variant="default"
              color="#00000014"
              radius="md"
            >
              Saved
            </Button>
            <ButtonMenu />
          </Group>
        </ScrollArea>
      </Drawer>
      <AuthModal opened={opened} open={open} close={close} />
    </Box>
  );
}
