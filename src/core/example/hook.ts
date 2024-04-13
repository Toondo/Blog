import { addActor } from '~/requests/addActor';

export const useAddActor = () => {
  const addActorHandler = async (firstName: string, lastName: string) => {
    if (!firstName || !lastName) {
      alert('お名前を確認してください！');
      return;
    }

    try {
      const result = await addActor(firstName, lastName);
      if (!result) {
        alert('登録ができませんでした！');
        return;
      }

      alert('登録完了！');
    } catch (error) {
      alert('エラーが発生しました！');
    }
  };

  return addActorHandler;
};
