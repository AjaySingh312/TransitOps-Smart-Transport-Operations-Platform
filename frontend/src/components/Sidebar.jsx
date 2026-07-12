import {
  LayoutDashboard,
  Truck,
  Users,
  Route,
  Wrench,
  Fuel,
  BarChart3,
  Settings
} from "lucide-react";

const menu = [
  {icon: LayoutDashboard, name:"Dashboard"},
  {icon: Truck, name:"Fleet"},
  {icon: Users, name:"Drivers"},
  {icon: Route, name:"Trips"},
  {icon: Wrench, name:"Maintenance"},
  {icon: Fuel, name:"Fuel & Expenses"},
  {icon: BarChart3, name:"Analytics"},
  {icon: Settings, name:"Settings"},
];

export default function Sidebar(){

    return(

<div className="w-64 bg-white border-r">

<div className="text-2xl font-bold p-6">
TransitOps
</div>

<nav>

{
menu.map(({icon:Icon,name},i)=>(

<button
key={i}
className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-yellow-100 ${
i===0 && "bg-yellow-100 text-yellow-700"
}`}
>

<Icon size={18}/>
{name}

</button>

))
}

</nav>

</div>

    )

}
