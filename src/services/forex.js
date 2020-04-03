import { firestore } from '../firebase/firebase.utils';

const getApiKey = async () => {
  const docRef = firestore.doc(`secrets/currency-api`);
  const snap = await docRef.get();

  if (!snap.exists) {
    throw new Error("Api key is missing from secrets");
  }

  return snap.apikey;
}

export const convertToDollars = async (amount, ciso3) => {
  const APIKEY = await getApiKey();
  const cf = await new Promise((resolve) => {
    fetch({
      method: 'get',
      url: `https://free.currconv.com/api/v7/convert?${ciso3.toUpperCase()}_USD&compact=ultra&apiKey=${APIKEY}`
    }).then(res => res.json()).then(res => res[`${ciso3}_USD`]).catch(console.error);
  });
  return amount * cf;
}