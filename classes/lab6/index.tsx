interface Vehicle {//engine
    start(): string;
    stop(): string;
  }
  
  interface Train extends Vehicle {//ice
    increaseSpeed(): string
    decreaseSpeed(): string;
  }
  
  export class Express implements Train {//diesel
    power: number;
    fuelType: string;
    fuelLevel: number;
  
    constructor(power: number, fuelLevel: number) {
      this.power = power;
      this.fuelType = 'Транспортний засіб';
      this.fuelLevel = fuelLevel;
    }
  
    start(): string {
      return 'Транспортний засіб заведено';
    }
  
    stop(): string {
      return 'Транспортний засіб заглушено';
    }
    increaseSpeed(): string{
        return 'Оберти збільшено'
    }
    decreaseSpeed(): string{
        return 'Оберти Зменшено'
    }
  }
  
  export class Auto implements Vehicle {//react engine
    power: number;
  
    constructor(power: number) {
      this.power = power;
    }
  
    start(): string {
      return'Автомобіль заведено';
    }
  
    stop(): string {
      return 'Автомобіль заглушено';
    }
  }