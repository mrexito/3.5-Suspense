import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc"

const rootDirectory = path.join(process.cwd(),"content")
console.log(rootDirectory)
export async function getPostBySlug(slug:string) {

  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true
    }
  })
  
  return { content, frontmatter}
}
console.log('here');
