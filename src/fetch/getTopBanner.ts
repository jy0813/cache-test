import { apiInstance, CustomError } from "@/api/fetchRequest";
import { Country } from "@/fetch/getMenu";

export interface TopBanner {
  id: number;
  image: string;
  text: string;
  link: string | null;
  created_at: string;
  updated_at: string;
}

export type TopBannersResponse = TopBanner[];


const getTopBannersData = async (country: Country) => {
  try {
    const response = await apiInstance.get<TopBannersResponse>({
      endPoint: `/${country}/top-banners`,
      next: {
        revalidate: 10,
        tags: ['top-banners'],
      },
      transform: (data) => data.top_banners,
    });


    return response;
  } catch (error) {
    if ((error as CustomError).status) {
      const { status, message } = error as CustomError;

      console.error(status, message);
    } else {
      console.error(error);
    }

    throw error;
  }
};

export const getTopBanners = {
  kr: () => getTopBannersData('kr'),
  us: () => getTopBannersData('us'),
};
