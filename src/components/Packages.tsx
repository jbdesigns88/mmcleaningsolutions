const Services = {
    deep_cleaning: {
        title: "First Degree $99",
        description:  `
        •Vacuum/Map
        •Wipe down all hard surfaces 
        •clean all mirrors/dusting
        •Bathrooms/Kitchen 
        •Living area
        •Dining area`,
        image: "./images/basic_cleaning.png"
    },
    commercial_cleaning: {
        title: "Second Degree $125",
        description: `
        •Vacuums/map
        •wipe down all hard surfaces 
        •clean all mirrors/dusting
        •bathrooms/Kitchen 
        •Living area 
        •Dining area 
        •1 Bedroom
        `,
        image: "./images/deep_cleaning.png"
    },
    third_degree: {
        title: "Third Degree $125",
        description: `
        •Vacuum/Map
        •Wipe down all hard surfaces 
        •Clean all mirrors/Dusting
        •Bathrooms/Kitchen 
        •Living area
        •Dining area 
        •2 Bedrooms
        `,
        image: "./images/deep_cleaning.png"
    },
    fourth_degree: {
        title: "Fourth Degree $200",
        description: `
        •Wipedown all hard surfaces 
        •Clean all mirrors/Dusting
        •Bathrooms/Kitchen 
        •Living area 
        •Dining area 
        •3-4 Bedrooms
        `,
        image: "./images/deep_cleaning.png"
    }
  
}
const Packages = () => {

    return (
        <section className="site-content-section">
            <div className="container text-center">
                <h2 className="section-title">Our Services</h2>
                <p className="section-description">
                    We offer a wide range of cleaning services tailored to your needs. Whether it's residential or commercial, we've got you covered 
                </p>

                <div className="services-grid">
                    {Object.keys(Services).map((key) => {
                        const service = Services[key as keyof typeof Services];
                        return (
                            <div key={key} className="service-card">
                                <img src={service.image} alt={service.title} className="service-image" />
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        )
                    })}
                </div>            
           </div>
        </section>
    )

}

export default Packages;