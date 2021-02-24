function Header({ title, descContent, buttonContent }) {

    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__desc">{descContent}</p>
            <button className="header__button button">{buttonContent}</button>
        </header>
    )
}

export default Header;