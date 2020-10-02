import { db } from '@/config/firebaseConfig';

export default async function RouterGuardUser(to, from, next) {
  const { id } = to.params;

  try {
    const { exists } = await db.collection('users').doc(id).get();
    if (!exists) throw new Error();

    next();
  } catch {
    next('/404');
  }
}
