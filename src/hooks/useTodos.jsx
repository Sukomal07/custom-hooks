import axios from "axios";
import { useEffect, useState } from "react";

function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/todos");
            setTodos(res.data.todos);
            setLoading(false);
        };

        const intervalId = setInterval(fetchData, n * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [n]);

    return { todos, loading };
}

export default useTodos;
