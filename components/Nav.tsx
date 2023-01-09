import Image from "next/image";
import { ArrowDown2, ArrowRight2, Sun1 } from "iconsax-react";
import { Box, Text, Switch, Menu, useMantineTheme } from "@mantine/core";
import styles from "../styles/Home.module.css";
import { formatCurrency } from "../utils";

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
        <Menu.Item>Demo</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

interface IProps {
  data: {
    availableBalance: string;
    loanBalance: string;
    securityBalance: string;
  };
  theme: Record<string, any>;
  checked: boolean;
  setChecked: (args: boolean) => void;
}

const Nav = (props: IProps) => {
  const mantineTheme = useMantineTheme();
  const { data, theme, checked, setChecked } = props;
  const { colorScheme, toggleColorScheme } = theme;

  return (
    <section className={styles.nav}>
      <div className="w-[60%] flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="ComX Logo"
          width={112.84}
          height={59}
          priority
        />
        <div>
          <Switch
            checked={checked}
            onChange={(event) => {
              toggleColorScheme();
              setChecked(event.currentTarget.checked);
            }}
            color={colorScheme == "light" ? "#f4f4f6" : "black"}
            size="md"
            onLabel={<h5 className="text-black">LIGHT</h5>}
            offLabel={<h5 className="text-white">DARK</h5>}
            thumbIcon={
              checked ? (
                <Sun1
                  size="12"
                  color={
                    mantineTheme.colors.dark[mantineTheme.fn.primaryShade()]
                  }
                  stroke="3"
                />
              ) : (
                <Sun1
                  size="12"
                  color={
                    mantineTheme.colors.dark[mantineTheme.fn.primaryShade()]
                  }
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
              {/* <h3 className={styles.navSubHeading}>₦8,374,763</h3> */}
              <h3 className={styles.navSubHeading}>
                ₦{formatCurrency(Number(data?.availableBalance))}
              </h3>
            </div>
          </div>
          <div>
            <p className={styles.navHeading}>SECURITIES VALUE</p>
            {/* <h3 className={styles.navSubHeading}>₦8,374,763</h3> */}
            <h3 className={styles.navSubHeading}>
              ₦{formatCurrency(Number(data?.securityBalance))}
            </h3>
          </div>
          <div>
            <p className={styles.navHeading}>LOAN BALANCE</p>
            {/* <h3 className={styles.navSubHeading}>₦8,374,763</h3> */}
            <h3 className={styles.navSubHeading}>
              ₦{formatCurrency(Number(data?.loanBalance))}
            </h3>
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
