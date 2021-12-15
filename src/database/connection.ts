import { getConnection as getTypeConnection, createConnection } from "typeorm";

export const getConnection = () => {
    return getTypeConnection();
};

export const initConnection = async () => {
    return createConnection();
};
