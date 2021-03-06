function Header({ title, descContent, buttonContent, headerHandleClick }) {

    Header.defaultProps = {
        title: "Welcome to our site!",
        descContent: "Feel here like in home dude!",
        buttonContent: "Click me!",
    }

    return (
        <header className="header">
            <h1 className="header__title">{title ? title : Header.defaultProps.title}</h1>
            <p className="header__desc">{descContent ? descContent : Header.defaultProps.descContent}</p>
            <button
                className="header__button button"
                onClick={headerHandleClick} >{buttonContent ? buttonContent : Header.defaultProps.buttonContent}</button>
        </header>
    )
}

export default Header;