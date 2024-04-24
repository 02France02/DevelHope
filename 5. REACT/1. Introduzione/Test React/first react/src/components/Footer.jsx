export function Footer({ nameApp }) {
    const newDate = new Date().getFullYear();

    
    return (
        <>
            <p style={{textAlign: "center"}}>Copyright {nameApp} {newDate}</p>
        </>
    );
}
