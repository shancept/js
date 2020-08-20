const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let firstRowA = 0;
    let secondRowA = 0;
    let length = firstRow.length > secondRow.length ? firstRow.length : secondRow.length;
    for (let i = 0; i < length; i++) {
        if (firstRow.charAt(i) === 'а') {
            firstRowA++;
        }
        if (secondRow.charAt(i) === 'а') {
            secondRowA++;
        }
    }
    return firstRowA > secondRowA ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму