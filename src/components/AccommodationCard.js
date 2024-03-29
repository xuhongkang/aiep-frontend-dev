export default function GoalCard({service, provider, comments, startDate, endDate, location, frequency, duration}) {
    return (
        <div className="card w-full bg-primary text-primary-content">
            <div className="card-body p-5">
            <div className='whitespace-nowrap text-wrap'>
                        <h2 className="card-title">{service}</h2>
                        <p>{location}</p>
                    </div>
                <div className='flex'>
                    <div className="flex-1 stats shadow">
                        <div className="stat">
                            <div className="stat-title">Start & End</div>
                            <div className="stat-value text-wrap">{`${startDate} - ${endDate}`}</div>
                        </div>
                        <div className="flex-1 stat">
                            <div className="stat-title">Duration</div>
                            <div className="stat-value">{duration}</div>
                            <div className="stat-desc">Every {frequency}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-end">
                    <details className="collapse bg-neutral">
                        <summary className="collapse-title text-xl font-medium">View/Hide Details</summary>
                        <div className='flex p-5'>
                            <div className='flex-1 whitespace-nowrap text-wrap'>
                                <h2 className="card-title">Provider</h2>
                                <p>{provider}</p>
                            </div>
                            <div className='flex-1 whitespace-nowrap text-wrap'>
                                <h2 className="card-title">Comments</h2>
                                <p>{comments}</p>
                            </div>
                        </div>
                    </details>
                </div>
        </div>
    )
}