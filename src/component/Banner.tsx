"use client";

import styles from "@/component/Banner.module.css";

import { TopBannersResponse } from "@/fetch/getTopBanner";

import Image from "next/image";

type Props = {
  data: TopBannersResponse;
};

export const Banner = ({ data }: Props) => {
  return (
    <aside className={styles.banner}>
      {data?.map((banner: any) => (
        <>
          <Image key={banner.id} src={banner.image} alt={banner.text} />
          <span>{banner.text}</span>
        </>
      ))}
    </aside>
  );
};

export default Banner;
