// Directions: Rewrite the imperative code below as Object-Oriented 

// let status = 'active'
// let warp = 2
// let type = 'Dilithium Crystal'
// let status_report = 'Captain, '

// if(status === 'active' && warp <= 4) {
//     status_report += 'the engines are active and we could be going faster.'
// } else if (status === 'active' && warp > 4) {
//     status_report += 'the engines are active and we are going ' + warp + '.'
// } else if (status === 'down') {
//     status_report += 'the engines are down.'
// } else {
//     status_report += 'the comms are down and we can`t reach engineering.'
// }

// console.log(status_report)



class WarpDrive {
    constructor(type, recipient) {
        this.type = type;
        this.status = 'active';
        this.warp = 2;
        this.recipient = recipient ? recipient : 'Captain';
    };

    status_report() {
        if (this.status === 'active' && this.warp <= 4) {
            return `${this.recipient}, the engines are active and we could be going faster`
        } else if (this.status === 'active' && this.warp > 4) {
            return `${this.recipient}, the engines are active and we are going at warp ${this.warp}`
        } else if (this.status === 'down') {
            return `${this.recipient}, the engines are down`
        } else {
            return `${this.recipient}, the comms are down and we can't reach engineering`
        }
    };

    set_status(status) {
        this.status = status
    };

    set_warp(integer) {
        this.warp = integer
    };
};

let enterprise_warp = new WarpDrive('Dilithium Crystal', 'Captain Ivan');


console.log(enterprise_warp.status_report());
console.log(enterprise_warp.type);


let ent_warp = new WarpDrive('Diamond Laser');

console.log(ent_warp.status_report());
console.log(ent_warp.type);

ent_warp.warp = 10;

console.log('ent warp to 10');
console.log(ent_warp.status_report());

console.log('deactivating ent warp')
ent_warp.status = 'down';
console.log(ent_warp.status_report());

console.log('ent warp status unreadable');
ent_warp.status = 'unreadable';
console.log(ent_warp.status_report());