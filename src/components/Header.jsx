function Header(props) {
    const headerStyles = {
        backgroundColor: props.bgColor,
        color:props.textColor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "FeedBack UI",
    bgColor: "rgba(0,0,0,0.6)",
    textColor:"#ff6a95"
}

export default Header;