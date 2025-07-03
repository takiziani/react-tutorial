import photo from '../assets/photo.jpg';
export default function Card3() {
    const cardStyles = {
        border: "1px solid #ea0707",
        borderRadius: "10px",
        boxShadow: " 5px 2px 10px black",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        maxWidth: "250px",
        display: "inline-block",
    }
    const cardImgStyles = {
        width: "150px",        // fixed
        height: "auto",
        borderRadius: "50%"
    }
    return (
        <div style={cardStyles}>
            <img src={photo} alt="photo" style={cardImgStyles} />
            <h2>taki eddine</h2>
            <p>Developer and Enterpreneur</p>
        </div>
    );
}