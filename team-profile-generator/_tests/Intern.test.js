const Intern = require('../_domain/intern');

describe('Intern', () => {
  let intern;

  beforeAll(() => {
    intern = new Intern('Lee', '234', 'lee@company.com', 'Ohio State');
  });

  test('should return school', () => {
    expect(intern.getSchool()).toBe('Ohio State');
  });

  test('should return intern as role', () => {
    expect(intern.getRole()).toBe('Intern');
  });
});