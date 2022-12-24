import { Portfolio } from "@interfaces/Portfolio";
import { join } from "path";
import { getAllItems, getDir, getFileNames, getItemInPath, markdowToHtml } from "./md";

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

const getPortfolioSlugs = () => {
  return getPortfolioFileNames().map(fileName => fileName.replace(/\.md$/, ''));
}

const getPortfolioBySlug = (slug: string) => {
  const fileName = slug + ".md";

  return getPortfolio(fileName);
}

const getPortfolioBySlugWithMarkdown = async (slug: string): Promise<Portfolio> => {
  const portfolio = getPortfolioBySlug(slug);
  portfolio.content = await markdowToHtml(portfolio.content);

  return portfolio;
}

const getPortfolioFileNames = () => {
  return getFileNames(PORTFOLIO_DIR);
}

export { 
  getPortfolios,
  getPortfolioSlugs,
  getPortfolioBySlugWithMarkdown,
}