'use client'

import styles from '@/component/Banner.module.css'
import { Country } from '@/fetch/getMenu';
import { getTopBanners } from '@/fetch/getTopBanner';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export const Banner = () => {


  const param = useParams();
  
  const {country} = param;

  const { data } = useSuspenseQuery({queryKey: ['top-banners'], queryFn: getTopBanners[country as Country]});

  return (
    <aside className={styles.banner}>
      {data?.map((banner: any) => (
        <>
          <Image key={banner.id} src={banner.image} alt={banner.text} />
          <span>{banner.text}</span>
        </>
      ))}
    </aside>
  )
}

export default Banner;