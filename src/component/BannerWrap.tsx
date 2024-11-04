import Banner from "@/component/Banner";
import { getQueryClient } from "@/component/TanstackQueryOption";
import { Country } from "@/fetch/getMenu";
import { getTopBanners } from "@/fetch/getTopBanner";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function BannerWrap ({params}: {
  params: { country: string };
}) {

  const {country} = params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey:['top-banners'],
    queryFn: getTopBanners[country as Country],
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Banner />
    </HydrationBoundary>
  )
}