 import StatisticsListItem from "./StatisticsListItem"

 export default  function Statistics({ stats}) {
    return (
    <div>
       <section class="statistics">


  <ul class="stat-list">
{stats.map(({label, percentage }) => (
<li>
  <StatisticsListItem label={label} percentage={percentage}/>
</li>

))}

   
  </ul>
</section>
    </div>)
}