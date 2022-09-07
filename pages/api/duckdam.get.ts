import { collection, getDocs } from '@firebase/firestore';
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
        const data: DataType = {};
        const querySnapshot = await getDocs(collection(db, 'duckdam'));
        querySnapshot.forEach((doc) => {
            const value = doc.data() as ValueType;
            data[doc.id] = value;
        });

        res.status(200).json(data);
    }
}

export default handler;
