const Employee = require('../_domain/employee');



describe('Employee', () => {
  let employee;
  beforeAll(() => {
    employee = new Employee(
      'Sam',
      '1234',
      'sam@company.com'
    );
  });

  test('getName should return name', () => {
    expect(employee.getName()).toBe('Sam');
  });

  test('getId should return id', () => {
    expect(employee.getId()).toBe('1234');
  });

  test('getEmail should return email', () => {
    expect(employee.getEmail()).toBe('sam@company.com');
  });

  test('getRole should return role', () => {
    expect(employee.getRole()).toBe('Employee');
  });
});