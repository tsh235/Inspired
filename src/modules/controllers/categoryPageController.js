import { DATA } from "../const";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const categoryPageController = (routerData) => {
  const { gender, category } = routerData.data;
  const params = { gender, category }; // count: 8 count передает сколько товаров будет выводится на страницу

  if (routerData.params?.page) {
    params.page = routerData.params.page;
  }

  const { title } = DATA.navigation[gender].list.find(
    (item) => item.slug === category
  );

  renderNavigation(gender, category);
  renderHero(false);
  renderProducts(title, params);
};
