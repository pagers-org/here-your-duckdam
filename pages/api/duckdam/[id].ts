import { doc, getDoc } from '@firebase/firestore';
import { db } from '@shared/utils/firebase';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id } = req.query;
        const parseId = id as string;

        const docRef = doc(db, 'duckdam', parseId);
        const docSnap = await getDoc(docRef);

        if (docSnap.data()) res.status(200).json(docSnap.data());
        else res.status(502).json('Bad Request');
    }
}

export default handler;
