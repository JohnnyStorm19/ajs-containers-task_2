/* eslint-disable no-console */
import ErrorRepository from './js/ErrorRepository';

const errorRepo = new ErrorRepository();
errorRepo.repository.set(1, 'Syntax error');
errorRepo.repository.set(2, 'Http error');
console.log(errorRepo.translate(1), errorRepo.translate(2));
