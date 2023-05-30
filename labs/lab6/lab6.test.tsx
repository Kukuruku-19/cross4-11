import { Express, Auto } from "../../classes/lab6";

describe('Express class', () => {
    const ExpressTrain = new Express(100, 50);
  
    test('should create Express train with specified power and fuel level', () => {
      expect(ExpressTrain.power).toBe(100);
      expect(ExpressTrain.fuelType).toBe('Транспортний засіб');
      expect(ExpressTrain.fuelLevel).toBe(50);
    });
  
    test('should start and stop Express engine', () => {
      expect(ExpressTrain.start()).toBe('Транспортний засіб заведено');
      expect(ExpressTrain.stop()).toBe('Транспортний засіб заглушено');
    });
  
    test('should increase and decrease Express engine speed', () => {
      expect(ExpressTrain.increaseSpeed()).toBe('Оберти збільшено');
      expect(ExpressTrain.decreaseSpeed()).toBe('Оберти Зменшено');
    });
  });
  
  describe('Auto class', () => {
    const Audi = new Auto(200);
  
    test('should create Auto with specified power', () => {
      expect(Audi.power).toBe(200);
    });
  
    test('should start and stop Auto', () => {
      expect(Audi.start()).toBe('Автомобіль заведено');
      expect(Audi.stop()).toBe('Автомобіль заглушено');
    });
  });
  