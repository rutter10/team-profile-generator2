const Manager = require('../_domain/manager');


describe('Manager', () => {
  let manager;
  beforeAll(() => {
    manager = new Manager('Tim', '456', 'tim@company.com', '555');
  });

  test('should return office number ', () => {
    expect(manager.getOfficeNumber()).toBe('555');
  });

  test('should return manager as role', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});