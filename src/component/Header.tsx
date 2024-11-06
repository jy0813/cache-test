import styles from "@/component/Header.module.css";
import { Menu } from "@/component/Menu";
import { Country, getMenu } from "@/fetch/getMenu";
import Link from "next/link";

export const Header = async ({ params }: { params: { country: string } }) => {
  const country = params.country as Country;
  const data = await getMenu[country]();

  return (
    <header className={styles.header}>
      <Link href={"/"} prefetch>
        <h1>헤더</h1>
      </Link>
      <Menu data={data} country={country} />
    </header>
  );
};

export default Header;
