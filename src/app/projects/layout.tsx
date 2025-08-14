export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <div className="mb-16 prose prose-p:text-foreground prose-hr:border-muted prose-li:text-foreground prose-headings:text-black prose-h1:text-4xl prose-h1:tracking-tight prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h5:font-semibold prose-h6:text-md 
                    prose-h1:mb-4 prose-h2:mb-4 dark:prose-headings:text-white prose-a:text-blue-500 prose-a:no-underline dark:prose-a:text-blue-400">
        {children}
      </div>
    )
  }