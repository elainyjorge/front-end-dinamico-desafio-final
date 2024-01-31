const Header = (size, title) => {
	const element = document.createElement(`h${size}`);
        element.innerHTML = title

	return element;
};
export default Header;
