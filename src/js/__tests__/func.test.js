import ErrorRepository from '../ErrorRepository';

test('Создается инстанс класса ErrorRepository', () => {
  const errorRepo = new ErrorRepository();
  const res = { repository: new Map() };
  expect(errorRepo).toEqual(res);
});
test('Получение текста ошибки из инстанса', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.repository.set(1, 'Syntax error');
  errorRepo.repository.set(2, 'Http error');
  const errorText1 = errorRepo.translate(1);
  const errorText2 = errorRepo.translate(2);
  expect(errorText1).toBe('Syntax error');
  expect(errorText2).toBe('Http error');
});
test('Добавление ошибки, которая уже находится в репозитории', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.repository.set(1, 'Syntax error');
  errorRepo.repository.set(2, 'Http error');
  errorRepo.repository.set(2, 'Http error');
  errorRepo.repository.set(1, 'Syntax error');
  const res = {
    repository: new Map([
      [1, 'Syntax error'],
      [2, 'Http error'],
    ]),
  };
  expect(errorRepo).toEqual(res);
});
test('Выбрасывается ошибка при попытке получить несуществующую ошибку в репозитории', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.repository.set(1, 'Syntax error');
  const error = 'Unknown error';
  expect(() => {
    errorRepo.translate(2);
  }).toThrow(error);
});
