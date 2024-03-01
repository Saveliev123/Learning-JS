if (-1 || 0) alert( 'first' ); // Выполнится -1 это true
if (-1 && 0) alert( 'second' ); // Не выполнится т.к. 0 это false
if (null || -1 && 1) alert( 'third' ); // Выполнится -1 и 1 true
