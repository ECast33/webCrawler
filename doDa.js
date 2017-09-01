for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('DoDa');
    } else if (i % 3 == 0) {
        console.log('Do');
    } else if (i % 5 == 0) {
        console.log('Da');
    } else {
        console.log(i);
    }
}