import styles from '@/component/Header.module.css'
import { Menu } from '@/component/Menu';
import { getQueryClient } from '@/component/TanstackQueryOption';
import { Country, getMenu } from '@/fetch/getMenu';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';

export const Header = async ({params}: {
  params: { country: string };
}) => {

  const {country} = params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['menu'],
    queryFn: getMenu[country as Country],
  });

  return (
    <header className={styles.header}>
      <Link href={'/'} prefetch>
        <h1>헤더</h1>
      </Link>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Menu/>
      </HydrationBoundary>
    </header>
  )
}

export default Header;