import { createElement } from "../createElement";

export const renderHero = (gender) => {
  const hero = document.querySelector(".hero");

  if (!gender) {
    hero.style.display = "none";
    return;
  }

  hero.style.display = "";

  hero.className = `hero hero__${gender}`;

  const container = createElement(
    "div",
    {
      className: "container",
    },
    {
      parent: hero,
      append: createElement(
        "div",
        {
          className: "hero__content",
        },
        {
          parent: container,
          appends: [
            createElement("h2", {
              className: "hero__title",
              textContent: "Новая коллекция Бюстгальтер-балконет",
            }),
            createElement("a", {
              className: "hero__link",
              textContent: "Перейти",
            }),
          ],
        }
      ),
    }
  );
};
