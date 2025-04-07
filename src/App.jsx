import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // shows loader for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading ? <Loader /> : <Home />}
        </div>
    );
}

export default App;
