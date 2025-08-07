import Link from "next/link"
import { getWords } from "@/lib/getWords"
import WordleGrid from "@/components/ui/WordleGrid"
import Header from "@/components/shared/Header"

export default function Home() {
    const words = getWords()

    return (
        <div>
            <Header />
            <WordleGrid />
        </div>
    )
}