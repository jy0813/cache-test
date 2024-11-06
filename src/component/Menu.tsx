"use client";
import { Country } from "@/fetch/getMenu";

import Link from "next/link";

type Props = {
  country: Country;
  data: any[];
};
export const Menu = ({ country, data }: Props) => {
  return (
    <>
      <ul>
        <li>
          <Link href={`/${country}/products`}>
            <span>전체상품</span>
          </Link>
        </li>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/${country}/products/${item.id}`} prefetch>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
