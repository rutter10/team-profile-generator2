const Engineer = require('../_domain/engineer');


describe('Engineer', () => {
  let engineer;

  beforeAll(() => {
    engineer = new Engineer('michele', '999', 'michele@company.com', 'mbomb');
  });

  test('should return github username', () => {
    expect(engineer.getGithub()).toBe('mbomb');
  });

  test('should return role as engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
});