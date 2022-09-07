import { addDoc, collection } from '@firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'utils/firebase';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { img_url, first_word, second_word, third_word } = req.body;

        const docRef = await addDoc(collection(db, 'duckdam'), {
            img_url: img_url,
            first_word: first_word,
            second_word: second_word,
            third_word: third_word,
        });
        res.status(200).json(docRef.id);
    }
}

export default handler;