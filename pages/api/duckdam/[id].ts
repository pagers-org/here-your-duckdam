import { collection, doc, getDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'utils/firebase';

type ValueType = {
    img_url: string;
    first_word: string;
    second_word: string;
    third_word: string;
};
type DataType = Record<string, ValueType>;

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id } = req.query;
        const parseId = id as string;

        const docRef = doc(db, "duckdam", parseId);
        const docSnap = await getDoc(docRef);
        
        res.status(200).json(docSnap.data());
    }
}

export default handler;
