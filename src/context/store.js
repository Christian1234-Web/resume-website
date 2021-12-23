import React, { createContext, useState } from 'react';
import data from "../data/data"
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [show, setShow] = useState('');
    let [sstatic, setSstatic] = useState('');
    let [projects, setProjects] = useState(data.data);

    let states = {
        show: [show, setShow],
        static: [sstatic, setSstatic],
        projects: [projects, setProjects]

    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;