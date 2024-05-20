(() => {
    'use strict';

    kintone.events.on('app.record.index.show', (event) => { // 実行したい処理
        // ログインユーザーのコードを取得
        const loginUser = kintone.getLoginUser();
        const loguinUserCode = loginUser.code;

        const targetUserCodes = ['liuleora@gmail.com'];

        // レコード一覧のメニューの下側の要素を取得
        const headerSpaceElement = kintone.app.getHeaderSpaceElement();
        
        if (targetUserCodes.includes(loguinUserCode)) {
            // ログインユーザーに応じた処理をここに書く
            headerSpaceElement.textContent = 'Hello Members!';
        } else {
            headerSpaceElement.textContent = '';
        }
        return event;
    });
})();