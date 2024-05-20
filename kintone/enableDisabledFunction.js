(() => {
    'use strict';
    const areaFieldCode = '地域';
    const wageFieldCode = '日当';

    kintone.events.on([
        'app.record.create.show',
        'app.record.edit.show',
        `app.record.edit.change.${areaFieldCode}`,
        `app.record.create.change.${areaFieldCode}`
    ], (event) => {
        const record = event.record;

        switch(record[areaFieldCode].value) {
            case '首都圏':
                record[wageFieldCode].value = '0';
                record[wageFieldCode].disabled = true;
                break;
            case '海外':
                record[wageFieldCode].value = '3000';
                record[wageFieldCode].disabled = true;
                break;
            case 'その他':
                record[wageFieldCode].disabled = false;
                break;
            default:
                record[wageFieldCode].value = '1000';
                record[wageFieldCode].disabled = true;
                break;
        }
        return event;
    });
})();