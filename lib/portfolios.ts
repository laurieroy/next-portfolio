import { Portfolio } from "@interfaces/Portfolio";
import { join } from "path";
import { getAllItems, getDir, getFileNames, getItemInPath } from "./md";

const PORTFOLIO_DIR = getDir("/content/portfolios");

const getPortfolio = (fileName: string): Portfolio => {
  const portfolio= getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio;
  portfolio.slug = fileName.replace(/\.md/, '');

  return portfolio;
}

const getPortfolios = (): Portfolio[] => {
  const names = getPortfolioFileNames();

  return getAllItems(names, getPortfolio) as Portfolio[];
}

const getPortfolioFileNames = () => {
  return getFileNames(PORTFOLIO_DIR);
}

export { getPortfolios }