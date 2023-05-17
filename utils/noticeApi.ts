// import { ec2 } from "@/axios/api"
// import { Item } from "./types/responseType"
// import axios from "axios"

// /** 질문글 무한 스크롤 */
// export const getInfiniteQuestionPostList = async (lastArticleId: number, size: number) => {
//     const res = await axios.get<Item[]>(`http://43.201.195.195:8080/api/notices?lastArticleId=${lastArticleId}&size=${size}&firstPage=true`)
//     const postList: Item[] = res.data
//     return {
//         postList,
//         nextLastPostId: postList[postList.length - 1]?.itemId,
//         isLast: postList.length < 20
//     }
// }