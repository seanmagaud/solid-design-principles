class KilometerTracker {
  constructor(maxKilometers) {
    this.maxKilometers = maxKilometers;
    this.currentKilometers = 0;
  }

  trackKilometers(kilometerCount) {
    this.currentKilometers += kilometerCount;
    if (this.currentKilometers > this.maxKilometers) {
      this.logFuel();
    }
  }

  logFuel() {
    console.log("No more fuel");
  }
}

const kilometerTracker = new KilometerTracker(2000);
kilometerTracker.trackKilometers(500);
kilometerTracker.trackKilometers(700);
kilometerTracker.trackKilometers(1000);
