import fs from 'fs' 
import path from 'path'

export function getWords() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'words.txt')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const words = fileContent.split('\n').map(word => word.trim()).filter(Boolean)

    return words
}