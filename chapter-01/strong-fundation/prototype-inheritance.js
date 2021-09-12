// vacation construktor
function Vacation(destination, lengths) {
  this.destination = destination;
  this.lengths = lengths;
}

Vacation.prototype.print = function () {
  console.log(this.destination + "|" + this.lengths + "|" + "day");
};

const maui = new Vacation("Maui", 7);
maui.print();

// class
class Vacation1 {
  construktor(destination, lengths) {
    this.destination = destination;
    this.lengths = lengths;
  }

  print() {
    console.log(`${this.destination} will take ${this.lengths} days`);
  }
}

const trip = new Vacation1("santiago, Chile", 7);
trip.print();
