import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ArrowDown2, ArrowRight2, Sun1 } from "iconsax-react";
import { Box, Text, Divider, Switch, Menu } from "@mantine/core";

const CustomMenu = () => {
  return (
    <Menu shadow="md">
      <Menu.Target>
        <Box className="flex items-center cursor-pointer">
          <Text className="text-xs font-bold text-[10px] tracking-wide text-white bg-black px-3 py-2 mr-2">
            DEMO
          </Text>
          <ArrowDown2 size="16" color="#000" />
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>List</Menu.Label> */}
        <Menu.Item>Demo</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

interface IProps {
  theme: Record<string, any>;
  checked: boolean;
  setChecked: (args: boolean) => void;
}

const Nav = (props: IProps) => {
  const { theme, checked, setChecked } = props;

  return (
    <section className={styles.nav}>
      <div className="w-[60%] flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="ComX Logo"
          // className={styles.vercelLogo}
          width={112.84}
          height={59}
          priority
        />
        <div>
          {/* <Text className="bg-[red]">Label</Text> */}
          <Divider color="blue" orientation="vertical" />
          <Switch
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            // color={checked ? "#F4F4F6" : "dark"}
            // color={
            //   checked ? theme.colors.gray[theme.fn.primaryShade()] : "#F4F4F6"
            // }
            color="black"
            size="md"
            onLabel="LIGHT"
            offLabel="DARK"
            thumbIcon={
              checked ? (
                <Sun1
                  size="12"
                  color={theme.colors.dark[theme.fn.primaryShade()]}
                  stroke="3"
                />
              ) : (
                <Sun1
                  size="12"
                  color={theme.colors.dark[theme.fn.primaryShade()]}
                  // color={theme.colors.teal[theme.fn.primaryShade()]}
                  stroke="3"
                />
              )
            }
          />
        </div>
      </div>
      <div className="w-[40%] flex justify-between items-center ml-5">
        <div className="flex-grow flex justify-between items-center h-full px-3 pr-7 border-l border-r">
          <div className="w-fit flex items-center cursor-pointer">
            <ArrowRight2 size="16" color="#000" />
            <div className="ml-5">
              <p className={styles.navHeading}>CASH BALANCE</p>
              <h3 className={styles.navSubHeading}>₦8,374,763</h3>
            </div>
          </div>
          <div>
            <p className={styles.navHeading}>SECURITIES VALUE</p>
            <h3 className={styles.navSubHeading}>₦8,374,763</h3>
          </div>
          <div>
            <p className={styles.navHeading}>LOAN BALANCE</p>
            <h3 className={styles.navSubHeading}>₦8,374,763</h3>
          </div>
        </div>
        <div className="ml-10">
          <CustomMenu />
        </div>
      </div>
    </section>
  );
};

export default Nav;
