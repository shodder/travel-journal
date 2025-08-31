
export default function Entry(props) {
    return (
        <article className="journal-article-container">
            <div className="journal-main-image-container">
                <img className="journal-main-image" 
                src={props.image.src} 
                alt={props.image.alt}/>
            </div>
            <div className="journal-entry-container">
                <img className="journal-marker-image"
                    src="/public/images/marker.png"
                    alt="Map marker" 
                />
                <span className="journal-country">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="journal-title">{props.title}</h2>
                <p className="journal-date">{props.dates}</p>
                <p className="journal-text">{props.info}</p>
            </div>
        </article>
        
    )
}