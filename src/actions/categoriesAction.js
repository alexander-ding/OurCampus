export const CATEGORY_SELECTED = "CATEGORY_SELECTED";
export const selectCategory = (category) => ({
  type: CATEGORY_SELECTED,
  data: category
});

export const SEARCHED = "SEARCHED";
export const search = (text) => ({
  type: SEARCHED,
  data: text
})