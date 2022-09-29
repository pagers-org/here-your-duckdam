import { doc, getDoc } from '@firebase/firestore';
import { db } from '@shared/utils/firebase';
import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCode } from '@shared/constant/HttpStatusCode';
import { RequestMethod } from '@shared/constant/RequestMethod';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === RequestMethod.GET) {
        const { id } = req.query;
        const parseId = id as string;

        const docRef = doc(db, 'duckdam', parseId);
        const docSnap = await getDoc(docRef);

        if (docSnap.data()) {
            res.status(HttpStatusCode.OK).json(docSnap.data());
            return;
        }
        res.status(HttpStatusCode.UnprocessableEntity).json('Bad Request');
    }
}

export default handler;
