import ApplicationBlock, {ApplicationBlockType} from "@components/components/ApplicationBlock";

export default function Home() {
    const appBlockProps: ApplicationBlockType[] = [{
        name: "Appointify",
        href: "/login",
        actionText: "Get access",
        description: "A Calendar app to mark events!"
    }, {
        name: "Appointipoker",
        href: "/login",
        actionText: "Get access",
        description: "A Scrum Poker app!"
    }, {
        name: "Surprise",
        href: "/login",
        actionText: "Get access",
        description: "Something hot!"
    }]
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Choose your playground
                </h2>
                <div
                    className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {appBlockProps.map(p => <ApplicationBlock key={p.name} {...p}/>)}
                </div>
            </div>
        </div>
    )
}
