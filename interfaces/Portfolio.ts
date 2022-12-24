import { MarkdownItem } from "./Markdown";

export interface Portfolio extends MarkdownItem {
  coverImage: string;
  employee: string;
  employeeImage: string;
  employmentTime: number;
  highlights: string[];
}