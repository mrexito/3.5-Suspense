import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc"
import Newsletter from "../components/Newsletter";

const rootDirectory = path.join(process.cwd(), "app/content")

const components = {
  h1: props => (
    <h1 {...props} className="text-emerald-400">
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter
}

export async function getPostBySlug(slug:string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true
    }
  })
  
  return { content, frontmatter, slug:realSlug}
}

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory)
  let posts = []
  for (const file of files) {
    const post = await getPostBySlug(file)
    posts.push(post)
  }
  return posts
}
