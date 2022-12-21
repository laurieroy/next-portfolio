import {join }from "path"
import { Blog } from "@interfaces/Blog";
import { getAllItems, getDir, getFileNames, getItemInPath, markdowToHtml } from "./md";

const BLOG_DIR = getDir("/content/blogs");

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
  blog.slug = fileName.replace(/\.md/, '');
  return blog;
}

const getBlogs = (): Blog[] => {
const names = getBlogFileNames();
return getAllItems(names, getBlog) as Blog[];
}

const getBlogBySlug = (slug: string) => {
  const fileName = slug + ".md";
  return getBlog(fileName);
}
const getBlogBySlugWithMarkdown = async (slug: string): Promise<Blog> => {
  const blog = getBlogBySlug(slug);
  blog.content = await markdowToHtml(blog.content);
  return blog;
}

const getBlogsSlugs = () => {
return getBlogFileNames().map(fileName => fileName.replace(/\.md$/, ''));
}

const getBlogFileNames = () => {
return getFileNames(BLOG_DIR);
}

export {
getBlog,
getBlogs,
getBlogBySlug,
getBlogBySlugWithMarkdown,
getBlogsSlugs,
getBlogFileNames,
}