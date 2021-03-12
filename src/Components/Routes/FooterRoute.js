import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';

const HeaderRoute = () => {

    const [path, setPath] = useState(window.location.pathname);
    const pagesWithFooter = [
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

    if (pagesWithFooter.includes(path.toLowerCase())) {
        return (<Footer />);
    } else {
        return null
    }
}

export default HeaderRoute;