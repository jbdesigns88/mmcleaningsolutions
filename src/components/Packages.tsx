const Services = {
    deep_cleaning: {
        title: "Basic Cleaning",
        description: "Perfect for regular upkeep — dusting, vacuuming, mopping, and wiping down surfaces to keep your home or office fresh and tidy.",
        image: "./images/basic_cleaning.png"
    },
    commercial_cleaning: {
        title: "Deep Cleaning",
        description: "An intensive top-to-bottom clean targeting hidden dirt, grime, and buildup in hard-to-reach areas — ideal for seasonal refreshes, move-ins/outs, or post-renovation cleanups.",
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