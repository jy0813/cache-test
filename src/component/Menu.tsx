'use client'

import { Country, getMenu } from "@/fetch/getMenu";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation"


export const Menu = () => {

  const param = useParams();

  const {country} = param;

  const { data } = useSuspenseQuery({queryKey: ['menu'], queryFn: getMenu[country as Country]});


  return (
    <>
      <ul>
        <li>
          <Link
            href={`/${country}/products`}
          >
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
  )
}