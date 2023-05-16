// import axios from "axios";

// const BASE_URL = "http://43.201.195.195:8080";

// export const ec2 = axios.create({baseURL: BASE_URL});

// export const getNotices = async (lastArticleId: number, size: number) => {
//     try {
//         const response = await axios.get(`http://43.201.195.195:8080/api/notices?lastArticleId=${lastArticleId}&size=${size}&firstPage=true`, {
//             params: {
//                 lastArticleId,
//                 size,
//                 firstPage: true,
//             },
//         })

//         return response.data.result.notices;

//     } catch (error) {
//         throw new Error("데이터 가져오는데 실패");
//     }
// }