import { NextApiRequest, NextApiResponse } from "next";
import { ITodo } from "@/components/admin/ITodo";

const myFunction = (_req: NextApiRequest, res: NextApiResponse<ITodo>): void => {
    res.status(200).json({ id: 1, message: 'I am Todo' });
};

export default myFunction;
