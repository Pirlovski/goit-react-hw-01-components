
export default function StatisticsListItem({label, percentage}) {

    return (<div>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
        </div>)
}