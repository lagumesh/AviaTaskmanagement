import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa"; // Importing other icons from react-icons library
import { ImProfile } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAddTask, MdOutlinePayments } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const menu = [
		{
			name: "Dashboard",
			icon: <RxDashboard size={20} />,
			link: "/",
		},
		{
			name: "Profile",
			icon: <ImProfile size={20} />,
			link: "/main",
		},
		{
			name: "My Task",
			icon: <MdAddTask size={20}  />,
			link: "/",
		},
		{
			name: "Documents",
			icon: <FaFileAlt size={20} />,
			link: "/",
		},
		{
			name: "Payroll",
			icon: <MdOutlinePayments size={20} />,
			link: "/",
		},
		{
			name: "Settings",
			icon: <IoSettingsOutline size={20} />,
			link: "/",
		}
	]


	const [activeItem, setActiveItem] = useState("");

	return (
		<>
				{menu.map((item, index) => (
				<Link  key={index} to={item.link}>
						<li className={`${activeItem === item.name ? "text-[#002225] font-medium bg-gray-300" : "text-[#999999] font-normal"} my-2 flex flex-col items-center gap-3 hover:text-[#002225] p-2 rounded transition-all duration-300`} onClick={()=>setActiveItem(item.name)} >{item.icon} {item.name}</li>
				</Link>	
				))}
		</>
	);
};

export default Sidebar;
