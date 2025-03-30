import photo from '../assets/photo.jpg';
export default function Card() {
    return (
        <div className="card">
            <img src={photo} alt="photo" className='card-img' />
            <h2>taki eddine</h2>
            <p>Developer and Enterpreneur</p>
        </div>
    );
}