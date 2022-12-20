import { Heading } from "./Heading";

import React from 'react';
import { EmployeeList } from "../crud/EmployeeList";

export const Home = () => {
    return (
        <React.Fragment>
            <div className="container mx-auto">
                <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
                    ADD SP
                </h3>
                <Heading />
                <EmployeeList />
            </div>
        </React.Fragment>
    );
};