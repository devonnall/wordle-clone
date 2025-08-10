// import Link from "next/link"
// import { getWords } from "@/lib/getWords"
// import WordleGrid from "@/components/ui/WordleGrid"
// import Header from "@/components/ui/Header"
// import NewHeader from "@/components/ui/NewHeader"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import EnvProbe from "./Temp"

export default function Home() {

    return (
        <article className="pl-16 mt-8 mb-48">
            {/* <Header /> */}
            
            <h1 className="text-4xl font-extrabold mb-4">Introduction</h1>
            <p className="mb-12">Hello, I&apos;m a computer science student.</p>
            <Separator />
            <h2 className="text-3xl mt-8 font-bold">Technologies</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2 className="text-3xl mt-4 font-bold">Skills</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2 className="text-3xl mt-4 font-bold">Experience</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <EnvProbe />
        </article>
    )
}