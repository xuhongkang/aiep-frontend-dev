export function DashboardSkeleton() {
    return (
        <div className="skeleton w-full h-auto"></div>
    );
}

export function TranslationSkeleton() {
    return (
        <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
            </div>
        </div>
        <div className="skeleton h-auto w-full"></div>
        </div>
    );
}

export function ChatBotSkeleton() {
    return (
        <div className="skeleton w-full h-auto"></div>
    );
}