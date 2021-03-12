import React, { useEffect, useState } from 'react';
import NavigationBar from '../Navigation/NavigationBar';
import { useHistory } from 'react-router-dom';

const HeaderRoute = () => {

    const [path, setPath] = useState(window.location.pathname);
    const pagesWithHeader = [
        "/",
        "/home",
        "/offers",
        "/JobFinder",
        "/offer",
        "/contact",
        "/PostJob",
        "/about"
    ];
    const history = useHistory();
    useEffect(() => {
        return history.listen((location) => {
            setPath(location.pathname);
            console.log(location.pathname);
        })
    }, [history])

    if (pagesWithHeader.includes(path.toLowerCase())) {
        return (<NavigationBar />);
    } else {
        return null
    }
}

export default HeaderRoute;