import logMessage from "./logger";

class KilometerTracker {
  constructor(maxKilometers) {
    this.maxKilometers = maxKilometers;
    this.currentKilometers = 0;
  }

  trackKilometers(kilometerCount) {
    this.currentKilometers += kilometerCount;
    if (this.currentKilometers > this.maxKilometers) {
      logMessage("No more Fuel");
    }
  }

  // Single responsability principle is followed. KilometerTrack has now one reason to change.
  // The only reason we have to change the tracker, is if we want to enhance with more logic in example
  // The only reason we have to change the logger, is if we want to send an email instead a simple console.log in example
  // Now, each section of code have one single reason to change
  // The main benefit of the single responsability is that the code is much easier to follow or read
}

const kilometerTracker = new KilometerTracker(2000);
kilometerTracker.trackKilometers(500);
kilometerTracker.trackKilometers(700);
kilometerTracker.trackKilometers(1000);
