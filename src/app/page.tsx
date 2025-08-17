import { MoveUpRight, ContactRound, GraduationCap } from "lucide-react"; // Example icons

export default function Page() {
    return (
        <div className="flex justify-center font-sans p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-xl gap-2">
                <div className="flex flex-col justify-between bg-card p-6 rounded-3xl 
                                border border-border md:col-span-2">
                    <div className="">
                        <h1 className="font-extrabold text-2xl">
                            Devon Nall
                        </h1>
                        <p className="font-semibold mb-4">Aspiring <span className="text-indigo-400">Software Developer</span></p>
                        <p className="text-muted-foreground text-sm">I love building web applications and working with data in the context of machine learning and data science.</p>
                    </div>
                </div>

                <div className="flex flex-col bg-card p-6 rounded-3xl border border-border">
                    <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                        <div className="bg-neutral-800 border border-border rounded-lg size-10 flex justify-center items-center">
                            <ContactRound className="stroke-indigo-400 size-5" />
                        </div>
                        About me
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">I&apos;m a senior studying computer science at the University of Oklahoma. I have worked with frameworks and tools like Next.js, Tailwind, Firebase, and more to build web applications.</p>
                </div>

                <div className="relative flex flex-col bg-card p-6 pb-0 rounded-3xl border border-border">
                    <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                        <div className="bg-neutral-800 border border-border rounded-lg size-10 flex justify-center items-center">
                            <GraduationCap className="stroke-indigo-400 size-5" />
                        </div>
                        Relavant Projects
                    </div>

                    <div className="max-h-48 pb-8 overflow-y-auto">
                        <div className="relative flex py-4 px-4 border-b border-border hover:bg-neutral-800/50 hover:rounded-t-lg cursor-pointer">
                            <div className="space-y-1">
                                <div className="text-xs text-muted-foreground">Class Project</div>
                                <div className="font-semibold text-sm">Song Popularity Predictor</div>
                                <p className="text-xs text-muted-foreground">Predicted a given song's popularity based on its features with ML algorithms.</p>
                                <div className="flex gap-1">
                                    <div className="text-xs p-1 px-2 mt-2 rounded-md w-min text-nowrap bg-indigo-100 text-indigo-500">Machine Learning</div>
                                    <div className="text-xs p-1 px-2 mt-2 rounded-md w-min text-nowrap bg-indigo-100 text-indigo-500">Python</div>
                                </div>
                            </div>
                            <MoveUpRight className="absolute top-4 right-4 size-4 text-indigo-400" />
                        </div>
                        <div className="relative flex py-4 px-4 hover:bg-neutral-800/50 hover:rounded-b-lg cursor-pointer">
                            <div className="space-y-1">
                                <div className="font-semibold text-sm">Meal Planner</div>
                                <p className="text-xs text-muted-foreground">Helped develop an early prototype of a meal planning app with AI suggestions powered by Gemini with Flutter.</p>
                                <div className="flex gap-1">
                                    <div className="text-xs p-1 px-2 mt-2 rounded-md w-min text-nowrap bg-indigo-100 text-indigo-500">Flutter</div>
                                    <div className="text-xs p-1 px-2 mt-2 rounded-md w-min text-nowrap bg-indigo-100 text-indigo-500">Python</div>
                                    <div className="text-xs p-1 px-2 mt-2 rounded-md w-min text-nowrap bg-indigo-100 text-indigo-500">Flask</div>
                                </div>
                            </div>
                            <MoveUpRight className="absolute top-4 right-4 size-4 text-indigo-400" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-16 rounded-b-3xl bg-gradient-to-t from-neutral-50 dark:from-neutral-900 to-transparent"></div>
                    </div>    
                </div>
            </div>
        </div>
    )
}