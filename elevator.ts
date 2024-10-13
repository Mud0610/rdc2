enum Direction {
  Up,
  Down,
}

export class Button {
  public readonly direction: Direction;
  public floor: Floor;
  public isPressed: boolean;

  constructor(floor: Floor, direction: Direction) {
    this.isPressed = false;
    this.floor = floor;
    this.direction = direction;
  }
}

export class Floor {
  public readonly building: Building;
  public readonly buttons: Button[];
  public readonly floorNumber: number;

  constructor(building: Building, floorNumber: number, totalNoFloors: number) {
    this.buttons = [];
    this.building = building;
    this.floorNumber = floorNumber;
    if (this.floorNumber === 0) {
      this.buttons.push(new Button(this, Direction.Up));
    } else if (this.floorNumber === totalNoFloors - 1) {
      this.buttons.push(new Button(this, Direction.Down));
    }
    this.buttons.push(new Button(this, Direction.Up));
    this.buttons.push(new Button(this, Direction.Down));
  }
}

export class Building {
  public readonly floors: Floor[];
  public readonly elevators: Elevator[] = [];

  constructor(noOfFloors: number) {
    this.floors = [];
    for (let currentFloor = 0; currentFloor < noOfFloors; currentFloor++) {
      this.floors.push(new Floor(this, currentFloor, noOfFloors));
    }
    for (let currentElevator = 0; currentElevator < 3; currentElevator++) {
      this.elevators.push(new Elevator(0));
    }
  }
}

class Elevator {
  public currentFloor: number;

  constructor(currentFloor: number) {
    this.currentFloor = currentFloor;
  }
}

export class User {
  public readonly floor: Floor;
  public elevator: Elevator;

  constructor(floor: Floor) {
    this.floor = floor;
  }

  press(button: Elevator) {
    button.currentFloor = this.floor.floorNumber;
  }
}

module.exports = {
  Direction,
  Button,
  Floor,
  Building,
  User,
};
