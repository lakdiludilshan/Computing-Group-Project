import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>Dashboard</li>
                <li>Orders</li>
                <li>Customers</li>
                <li>Products</li>
                {/* Add more sidebar items as needed */}
            </ul>
        </div>
    );
};

export default SideBar;