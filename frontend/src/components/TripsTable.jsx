const trips = [
{
trip:"TR001",
vehicle:"VAN-05",
driver:"Alex",
status:"On Trip",
eta:"45 min"
},
{
trip:"TR002",
vehicle:"TRK-12",
driver:"John",
status:"Completed",
eta:"--"
},
{
trip:"TR003",
vehicle:"MINI-08",
driver:"Priya",
status:"Dispatched",
eta:"1h 10m"
},
];

export default function TripsTable(){

return(

<div className="bg-white rounded-xl shadow">

<div className="p-4 border-b font-semibold">
Recent Trips
</div>

<table className="w-full">

<thead className="bg-gray-50">

<tr>

<th className="p-3 text-left">Trip</th>
<th>Vehicle</th>
<th>Driver</th>
<th>Status</th>
<th>ETA</th>

</tr>

</thead>

<tbody>

{
trips.map((t)=>(

<tr key={t.trip} className="border-t">

<td className="p-3">{t.trip}</td>
<td>{t.vehicle}</td>
<td>{t.driver}</td>

<td>

<span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
{t.status}
</span>

</td>

<td>{t.eta}</td>

</tr>

))
}

</tbody>

</table>

</div>

)

}
