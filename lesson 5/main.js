"use strict";

function chess() {
    let main = document.querySelector('.main');
    let cell, point = true;
    let figures = {
        0: ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],
        1: ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
        6: ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'],
        7: ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
    };

    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (k == 0) {
                point = !point;
            } 
            cell = document.createElement('div');
            if (point) {
                cell.className = 'cell black_field';
            } else {
                cell.className = 'cell white_field';
            }

            if (figures[i] !== undefined){
                cell.innerHTML = figures[i][k];
            }

            main.appendChild(cell);
            point = !point;
        }
    }
}

chess();

