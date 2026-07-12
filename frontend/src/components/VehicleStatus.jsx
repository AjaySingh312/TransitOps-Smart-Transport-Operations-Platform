const status = [
{label:"Available",value:75,color:"bg-green-500"},
{label:"On Trip",value:40,color:"bg-blue-500"},
{label:"In Shop",value:15,color:"bg-orange-500"},
{label:"Retired",value:8,color:"bg-red-500"},
];

export default function VehicleStatus(){

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-semibold mb-6">
Vehicle Status
</h2>

{
status.map((s)=>(

<div key={s.label} className="mb-5">

<div className="flex justify-between mb-2">

<span>{s.label}</span>

<span>{s.value}%</span>

</div>

<div className="w-full bg-gray-200 rounded-full h-3">

<div
style={{width:`${s.value}%`}}
className={`${s.color} h-3 rounded-full`}
/>

</div>

</div>

))
}

</div>

)

}
