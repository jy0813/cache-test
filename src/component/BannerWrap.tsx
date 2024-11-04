import Banner from "@/component/Banner";
import { Country } from "@/fetch/getMenu";
import { getTopBanners } from "@/fetch/getTopBanner";

export default async function BannerWrap({
  params,
}: {
  params: { country: string };
}) {
  const { country } = params;

  const data = await getTopBanners[country as Country]();
  return <Banner data={data} />;
}
