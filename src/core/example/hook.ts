import { addActor } from '~/requests/addActor';

export const useAddActor = (firstName: string, lastName: string) => {
  if (!firstName || !lastName) {
    return alert('お名前を確認してください！');
  }

  const result = addActor(firstName, lastName);
  if (!result) {
    return alert('登録ができませんでした！');
  }

  return alert('登録完了！');
};
