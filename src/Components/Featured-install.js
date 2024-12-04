import { Link } from "react-router-dom"
import { fireCollection } from "../FireIndex"
import { useEffect, useState } from "react"

export const FeaturedInstall = ({ page }) => {
    const [featuredFire, setFeaturedFire] = useState({})

    useEffect(() => {
        setFeaturedFire(() => {
            return fireCollection.filter((fire) => fire.featured === true)[0]
        })
    }, [])

    return page === "home" ? (
        <div className="FeaturedHome">
            <h2>Featured Install</h2>
            <div>
                <h3>{featuredFire.make_model}</h3>
                <p>{featuredFire.description}</p>

                <img src={featuredFire.HeaderImageURL} alt="" width={window.innerWidth} className="Photo"></img>
            </div>
            <Link className="FeaturedHomeLink" to={"/gallery"}>
                View Gallery
            </Link>
        </div>
    ) : (
        <div className="FeaturedGallery">
            <h2>Featured Install</h2>
            <div>
                <h3>{featuredFire.make_model}</h3>
                <p>{featuredFire.description}</p>

                <img src={featuredFire.HeaderImageURL} alt="" width={window.innerWidth} className="Photo"></img>
                <Link className="FeaturedGalleryLink">View Details</Link>
            </div>
        </div>
    )
}
