"use client"

import StatisticsLink from "./StatisticsLink";

export function StatisticsNav() {

    return (
        <div className='flex gap-8'>
            <StatisticsLink href="/Statistics/global" label="global stats" />
            <StatisticsLink href="/Statistics/personal" label="personal stats" />
        </div>
    )
}