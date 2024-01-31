import Header from './Header.js';
import Calculator from '../Calculator.js';

const Container = () => {
	const element = document.createElement('div');
	element.classList.add('container');

	const header = Header(1, 'Churrascômetro');
	element.append(header);

	const calculator = Calculator();
	element.append(calculator);

	return element;
};
export default Container;
