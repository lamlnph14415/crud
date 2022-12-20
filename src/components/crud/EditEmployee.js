import { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const EditEmployee = (route) => {
    let history = useHistory();

    const { employees, editEmployee } = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        designation: "",
        location: "",
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(
            (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(employeeId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, employees]);

    const onSubmit = (e) => {
        e.preventDefault();
        editEmployee(selectedUser);
        history.push("/");
    };

    const handleOnChange = (userKey, newValue) =>
        setSelectedUser({ ...selectedUser, [userKey]: newValue });

    if (!selectedUser || !selectedUser.id) {
        return <div>Invalid Employee ID.</div>;
    }

    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            NAME
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.name}
                            onChange={(e) => handleOnChange("name", e.target.value)}
                            type="text"
                            placeholder="nhạp vào name"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="location"
                        >
                            PRICE
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.location}
                            onChange={(e) => handleOnChange("location", e.target.value)}
                            type="number"
                            placeholder="nhạp Price"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="designation"
                        >
                            DESCRIBE
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.designation}
                            onChange={(e) => handleOnChange("designation", e.target.value)}
                            type="text"
                            placeholder="Nhap Describe"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};