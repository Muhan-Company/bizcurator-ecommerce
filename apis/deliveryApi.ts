import axios from 'axios';

const path = "http://43.201.195.195:8080";

export const deliveryApi = async (searchTerm: string) => {
    const response = await axios.get(
        `${path}/api/admins/orders?page=1&search=${encodeURIComponent(searchTerm)}`
    );
    return response.data.result;
};