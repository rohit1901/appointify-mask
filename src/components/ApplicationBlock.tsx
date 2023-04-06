export type ApplicationBlockType = {
    name: string; href: string; actionText: string; description: string;
}
export default function ApplicationBlock({name, href, actionText, description}: ApplicationBlockType) {
    return (
        <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                    <p className="text-3xl font-bold tracking-tight text-gray-900">{name}</p>
                    <a
                        href={href}
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >{actionText}</a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}