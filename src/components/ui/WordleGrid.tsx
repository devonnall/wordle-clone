

function Tile() {
    return (
        <div className="size-14 border border-neutral-300 dark:border-neutral-800 rounded-md">

        </div>
    )
}

export default function WordleGrid() {

    return (
        <div className="flex flex-col gap-1 w-fit mx-auto">
            <div className="grid grid-cols-5 gap-1">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
            <div className="grid grid-cols-5 gap-1">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
            <div className="grid grid-cols-5 gap-1">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
            <div className="grid grid-cols-5 gap-1">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
            <div className="grid grid-cols-5 gap-1">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
            <div className="grid grid-cols-5 gap-1">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
        </div>
    )
}