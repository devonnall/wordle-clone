import Link from "next/link"
import { getWords } from "@/lib/getWords"
import WordleGrid from "@/components/ui/WordleGrid"
import Header from "@/components/ui/Header"
import NewHeader from "@/components/ui/NewHeader"

export default function Wordly() {
    const words = getWords()

    return (
        <div className="space-y-12">
            <NewHeader />
            <WordleGrid />
        </div>
    )
}