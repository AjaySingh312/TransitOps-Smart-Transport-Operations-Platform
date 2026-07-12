export default function StatCard({
title,
value,
color
}){

return(

<div className={`bg-white border-l-4 ${color} rounded-lg p-4 shadow`}>

<p className="text-gray-500 text-xs uppercase">
{title}
</p>

<h2 className="text-3xl font-bold mt-2">
{value}
</h2>

</div>

)

}
