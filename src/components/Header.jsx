function Header(props) {

    const title = "Best photos only here!"
    const descContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quam nulla ipsam aperiam minima est fugiat, unde aliquid dolores. Unde dolorem modi eaque quasi suscipit hic numquam quae totam quibusdam!";

    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__desc">{descContent}</p>
            <button className="header__button button">Click me!</button>
        </header>
    )
}

export default Header;