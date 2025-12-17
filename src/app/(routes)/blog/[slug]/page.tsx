import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MOCK_POSTS } from "@/app/(routes)/blog/mock-data"
import { format } from "date-fns"
import { tr } from "date-fns/locale"

export const metadata: Metadata = {
  title: "Blog | Beatty Center",
  description: "Güzellik ve estetik dünyasından en güncel bilgiler ve uzman tavsiyeleri.",
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = MOCK_POSTS.find((post) => post.slug === slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Yazı Bulunamadı</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Aradığınız blog yazısı bulunamadı.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Blog&rsquo;a Dön
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="h-4 w-4 inline" />
            Blog
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href={`/blog?category=${post.category.slug}`}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {post.category.name}
                </Link>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(post.publishedAt), "d MMMM yyyy", { locale: tr })}</span>
              </div>
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} dakika okuma</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none bg-card rounded-2xl p-8 shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
            <Tag className="h-4 w-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">İlgili Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_POSTS.filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Card key={relatedPost.slug} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="aspect-video relative">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {relatedPost.category.name}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{format(new Date(relatedPost.publishedAt), "d MMM yyyy", { locale: tr })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{relatedPost.readingTime} dk</span>
                        </div>
                      </div>
                    </div>
                  </Link>
          </Card>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
} 