import { CustomError, apiInstance } from "@/api/fetchRequest";

export interface BaseMenu {
  id: string;
  name: string;
}

export interface Menu extends BaseMenu {
  products: BaseMenu[];
}

export type MenuResponse = Menu[];


export type Country = 'kr' | 'us';

const getMenuData = async (country: Country) => {
  try {
    const response = await apiInstance.get<MenuResponse>({
      endPoint: `/${country}/menu`,
      next: {
        revalidate: 10,
        tags: ['menu'],
      },
      transform: (data) => data.categories,
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

export const getMenu = {
  kr: () => getMenuData('kr'),
  us: () => getMenuData('us'),
};
