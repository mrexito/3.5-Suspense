import { getPostBySlug } from "@/app/lib/posts";


export default async function Page({ params }) {
  const { slug } = params
  console.log("slug:", slug)

  const {content, frontmatter} = await getPostBySlug(slug)
  return (
    <section className="py-24">
      <div className="container">
        {/* Post frontmatter */}
        <header className="rounded bg-gray-100 p-8">
          <h1 className="font-sherif text-3xl">{frontmatter.title}</h1>
          <p className="text-sm font-light uppercase leading-snug tracking-wide">
            {frontmatter.author}
          </p>
        </header>
        {/*Post content */}
        <main className="prose mt-12">{content}</main>
      </div>
    </section>
  )
}
