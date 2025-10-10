import { PAGE_TITLE_PREPEND } from "./constants";

export const generatePageTitle = (pageName: string) => {
  return PAGE_TITLE_PREPEND + pageName;
};
