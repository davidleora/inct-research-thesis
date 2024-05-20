(() => {
    'use strict'; // Use strict to enforce stricter parsing and error handling in JavaScript
    const statusFieldCode = '入金ステータス'; // This holds the field code for the "入金ステータス" field
    const fieldCodes = ['入金日', '入金確認者']; // This array contains the field codes for "入金日" and "入金確認者"

    // Event Listener Registration
    // SYNTAX: kintone.events.on([...], (event) => { ... });
    kintone.events.on([
        'app.record.create.show', // When the record creation form is shown
        'app.record.edit.show', // When the record editing form is shown
        `app.record.create.change.${statusFieldCode}`, // When the "入金ステータス" field is changed in the record creation form
        `app.record.edit.change.${statusFieldCode}` // When the "入金ステータス" field is changed in the record editing form
    ], (event) => { // Event Handler
        const record = event.record; // Retrieve the record object from the event
        const statusFieldValue = record[statusFieldCode].value; // Gets the value of the "入金ステータス" field
        
        // SYNTAX: fieldCodes.forEach((fieldCode) => { ... });
        fieldCodes.forEach((fieldCode) => {
            if (statusFieldValue !== '確認済') {
                // Set the fieldCode to be hidden
                kintone.app.record.setFieldShown(fieldCode, false);
            } else {
                // Set the fieldCode to be shown
                kintone.app.record.setFieldShown(fieldCode, true);
            }
        });
        return event;
    });
})();