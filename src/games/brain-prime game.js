import {gameProcess} from '/home/nikos/frontend-project-44/src/index.js ';

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
	const question = Math.floor(Math.random() * 100);
	const correctAnswer = isPrime(question) ? 'yes' : 'no';
	return [question, correctAnswer];
};

export const gameBrainPrime = () => {gameProcess(getQuestionAndAnswer,description)};