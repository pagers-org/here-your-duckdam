import { collection, doc, setDoc, getDoc, updateDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from 'next';

import { FirestoreCollectionNames } from '@/shared/constant/FirestoreCollectionNames';
import { HttpStatusCode } from '@/shared/constant/HttpStatusCode';
import { RequestMethod } from '@/shared/constant/RequestMethod';
import { ResponseMessage } from '@/shared/constant/ResponseMessage';
import { db } from '@/shared/utils/firebase';

type AddFieldProps = {
    ids: string[];
    fields: {
        [key: string]: string;
    }
}

/**
 * firebase 컬럼 추가 API
 * @param ids 변경할 데이터의 id값
 * @param fields 추가할 필드명과 초기 값 (ex: {name: "이름"})
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === RequestMethod.GET) {
        const { ids, fields }: AddFieldProps = req.body;

        for(const id of ids) {
            const docRef = doc(db, FirestoreCollectionNames.Duckdam, id);
            const docSnap = await getDoc(docRef);

            await updateDoc(docRef, {
                ...docSnap.data(),
                ...fields
            });
        }
    }
    res.status(HttpStatusCode.OK).json({
        code: HttpStatusCode.OK,
        message: ResponseMessage.Success
    });
}

export default handler;
