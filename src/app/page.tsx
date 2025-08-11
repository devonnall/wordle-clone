import { Separator } from "@/components/ui/separator"
import { 
    Article, 
    ArticleTitle,
    ArticleSubtitle, 
    ArticleHeading, 
    ArticleContent, 
    ArticleSeparator,
    ArticleList,
    ArticleListItem,
    ArticleCard,
    ArticleCardTitle,
    ArticleCardContent,
    ArticleContentBody,
} from "@/components/article"

export default function Home() {

    return (
        // <article className="pl-16 mt-8 mb-48">
        //     <h1 className="text-4xl font-extrabold mb-4">Introduction</h1>
        //     <p className="mb-12">Hello, I&apos;m a computer science student.</p>
        //     <Separator />
        //     <h2 className="text-3xl mt-8 font-bold">Technologies</h2>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     </p>
        //     <h2 className="text-3xl mt-4 font-bold">Skills</h2>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     </p>
        //     <h2 className="text-3xl mt-4 font-bold">Experience</h2>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     </p>
        // </article>

        <Article className="mb-8">
            <ArticleTitle>Hello, I'm Devon 👋</ArticleTitle>
            <ArticleSubtitle>Full-stack developer with a curiosity for data and the stories it tells</ArticleSubtitle>
            <ArticleSeparator className="mb-8" />
            <ArticleContent>
                <ArticleHeading level={2}>Go Further</ArticleHeading>
                <ArticleContentBody>
                    <p>Find here a collection of projects, learnings, and experiments in software development, or check out the sidebar.</p>
                </ArticleContentBody>
            </ArticleContent>
            <div className="grid grid-cols-1 gap-2 gap-x-8 sm:grid-cols-2">
                <ArticleCard href="/projects">
                    <ArticleCardTitle>Projects</ArticleCardTitle>
                    <ArticleCardContent>Read about the projects I have worked on, like this website and ones in machine learning/artificial intelligence.</ArticleCardContent>
                </ArticleCard>
                <ArticleCard href="/technologies">
                    <ArticleCardTitle>Technologies</ArticleCardTitle>
                    <ArticleCardContent>Learn about the programming languages, platforms, and tools I use to build applications and programs.</ArticleCardContent>
                </ArticleCard>
                <ArticleCard href="/frameworks">
                    <ArticleCardTitle>Frameworks and Libraries</ArticleCardTitle>
                    <ArticleCardContent>An overview of my experience with several frameworks and libraries I use, including Next.js, Firebase, and others.</ArticleCardContent>
                </ArticleCard>
                <ArticleCard href="/blog">
                    <ArticleCardTitle>Blog</ArticleCardTitle>
                    <ArticleCardContent>A collection of blog posts documenting the tech I use and how I use them.</ArticleCardContent>
                </ArticleCard>
            </div>
        </Article>
    )
}