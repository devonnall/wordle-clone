import { promises as fs } from 'fs'
import path from 'path' 

export async function GET(req: Request, res: Response) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'words.txt')
        const fileContent = await fs.readFile(filePath, 'utf-8')

        return new Response(JSON.stringify({ content: fileContent}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.error('Error reading file:', err)
        return new Response(JSON.stringify({ error: 'Failed to read file' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}