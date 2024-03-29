import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const AddEmployee = () => {
    let history = useHistory();

    const { addEmployee, employees } = useContext(GlobalContext);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [designation, setDesignation] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            name,
            location,
            designation,
        };
        addEmployee(newEmployee);
        history.push("/");
    };

    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="nhap vao name"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="location"
                        >
                            PRICE
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            type="number"
                            placeholder="Nhap Price"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="designation"
                        >
                            DESCRIBE
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            type="text"
                            placeholder="Nhap Describe"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add New
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