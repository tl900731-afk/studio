'use server';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export async function logAccess(screen: string) {
  if (
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'your_project_id_here'
  ) {
    try {
      await addDoc(collection(db, 'acessos'), {
        tela: screen,
        data: serverTimestamp(),
      });
    } catch (e) {
      console.log('Erro ao salvar log:', e);
    }
  }
}
