function highlight(color) {
    const highlightStyle = {
        height: "50px",
        width: "50px",
        border: "10px solid rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        backgroundColor: color
    }

    return (<div style={highlightStyle}></div>)
}


export function RedHightlight() {
    return highlight("red");
}

export function BlueHightlight() {
    return highlight("lightblue");
}