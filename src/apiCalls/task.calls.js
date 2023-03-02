import axios from "axios";


export const createTask = async (todo) => {
    try {
        const res = await axios.post("/api/todos/create", todo);
        return res;
    } catch (err) {
        return err;
    }
}

export const getTasks = async () => {
    try {
        const res = await axios.get("/api/todos");
        return res;
    } catch (err) {
        return err;
    }
}



export const getTask = async (id) => {
    try {
        const res = await axios.get(`/api/todos/${id}`);
        return res;
    } catch (err) {
        return err;
    }
}

export const updateTask = async (id, todo) => {
    try {
        const res = await axios.put(`/api/todos/update/${id}`, todo);
        return res;
    } catch (err) {
        return err;
    }
}


export const deleteTask = async (id) => {
    try {
        const res = await axios.delete(`/api/todos/delete/${id}`);
        return res;
    } catch (err) {
        return err;
    }
}