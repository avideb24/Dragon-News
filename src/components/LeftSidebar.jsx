import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {

    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl font-bold text-[#403F3F] mb-2">All Categories</h2>
            <div>
                {
                    categories.map((category, idx) =>
                        <div key={idx} className="px-4 py-2">
                            <p className="text-[#9F9F9F] text-lg ">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }>
                                    {category.name}
                                </NavLink>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSidebar;