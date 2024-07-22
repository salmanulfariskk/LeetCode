/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let sortSeat = seats.sort((a, b) => a - b);
    let sortStudent = students.sort((a, b) => a - b);

    let move = 0;

    for (let i = 0; i < sortStudent.length; i++) {
        move += Math.abs(sortStudent[i] - sortSeat[i]);
    }

    return move;
};