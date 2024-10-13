const { Building, Button, Direction, User } = require("./elevator");
describe("Elevator Availability", () => {
  it("should call any elevator if the user is on fifth floor, wants to go down and all the elevators are idle at 0", () => {
    // arrange
    const building = new Building(20);
    const fifthFloor = building.floors[5];
    const downButton = fifthFloor.buttons.filter((button) => {
      return button.direction === Direction.Down;
    })[0];
    // console.log(downButton);

    const user = new User(fifthFloor);
    console.log(user);
    const elevatorPostions = building.elevators.map((elevator) => {
      return elevator.currentFloor;
    }); // [0, 0, 0]

    // act
    user.press(downButton);
    const elevators = building.elevators.filter((elevator) => {
      return (elevator.currentFloor = 5);
    });

    // assert
    // console.log(elevatorPostions);
    expect(elevatorPostions).toStrictEqual([0, 0, 0]);
    expect(elevators).toHaveLength(1);
  });
});
