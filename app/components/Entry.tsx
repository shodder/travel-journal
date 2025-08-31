

// example being passed in an object called "entry"
export default function Entry(props) {

    console.log(props)

    return (
        <article className="journal-article-container">
            <div className="journal-main-image-container">
                <img className="journal-main-image" 
                src={props.entry.img.src} 
                alt={props.entry.img.alt}/>
            </div>
            <div className="journal-entry-container">
                <img className="journal-marker-image"
                    src="/public/images/marker.png"
                    alt="Map marker" 
                />
                <span className="journal-country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="journal-title">{props.entry.title}</h2>
                <p className="journal-date">{props.entry.dates}</p>
                <p className="journal-text">{props.entry.text}</p>
            </div>
        </article>
        
    )
}


// example being passed in an object that has been spread
// export default function Entry(props) {

//     console.log(props)

//     return (
//         <article className="journal-article-container">
//             <div className="journal-main-image-container">
//                 <img className="journal-main-image" 
//                 src={props.img.src} 
//                 alt={props.img.alt}/>
//             </div>
//             <div className="journal-entry-container">
//                 <img className="journal-marker-image"
//                     src="/public/images/marker.png"
//                     alt="Map marker" 
//                 />
//                 <span className="journal-country">{props.country}</span>
//                 <a href={props.googleMapsLink}>View on Google Maps</a>
//                 <h2 className="journal-title">{props.title}</h2>
//                 <p className="journal-date">{props.dates}</p>
//                 <p className="journal-text">{props.text}</p>
//             </div>
//         </article>
        
//     )
// }




// export default function Entry(props) {
//     return (
//         <article className="journal-article-container">
//             <div className="journal-main-image-container">
//                 <img className="journal-main-image" 
//                 src={props.image.src} 
//                 alt={props.image.alt}/>
//             </div>
//             <div className="journal-entry-container">
//                 <img className="journal-marker-image"
//                     src="/public/images/marker.png"
//                     alt="Map marker" 
//                 />
//                 <span className="journal-country">{props.country}</span>
//                 <a href={props.googleMapsLink}>View on Google Maps</a>
//                 <h2 className="journal-title">{props.title}</h2>
//                 <p className="journal-date">{props.dates}</p>
//                 <p className="journal-text">{props.info}</p>
//             </div>
//         </article>
        
//     )
// }