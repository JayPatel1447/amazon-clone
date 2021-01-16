import React from 'react'
import "./Home.css"
import Product from "../Product/Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
                
                <div className="home__row">
                    <Product id="123" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                  
                    <Product id="456" title="Aucma Stand Mixer Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Champagne)" price={99.99} image="https://i.ebayimg.com/images/i/201440986007-0-1/s-l1000.jpg" rating={4}/>
                    <Product id="789" title="Sony WH1000XM3 Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset" price={169.99} image="https://www.bhphotovideo.com/images/images2000x2000/sony_wh1000xm3_b_1000xm3_wireless_noise_canceling_headphones_1432359.jpg" rating={4}/>
                  
                    <Product id="135" title="Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H, NVIDIA GeForce GTX 1650 Ti, 15.6 "
                       price={699.99} image="https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=240&h=191&c=7&o=5&pid=1.7" rating={5}/>

                    
                </div>
                <div className="home__row">
                <Product id="579" title="SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White" price={649.99} image="https://th.bing.com/th/id/OIP.rRRS_NvNJXUO4-yTU3SqpQHaEK?pid=Api&rs=1" rating={4}/>
                <Product id="791" title="Laura Ashley Home Charlotte Collection Luxury Ultra Soft Comforter, All Season Premium Bedding Set," price={149.99} image="https://media.istockphoto.com/photos/brown-wooden-bed-isolated-on-white-background-picture-id91714601?k=6&m=91714601&s=612x612&w=0&h=ZF_iuOY8BHVPHF_-wWnNItAkfFqbNrMhSDHXpsuRd1g=" rating={4}/>
                <Product id="149" title="The lean startupThe Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} image="https://i.ebayimg.com/images/g/-OQAAOSwpsJf0nns/s-l640.jpg" rating={4}/>

                    
                </div>
                <div className="home__row">
                <Product style={{width: '100%'}} id="999" title="The lean startup" price={29.99} image="https://th.bing.com/th/id/OIP.rRRS_NvNJXUO4-yTU3SqpQHaEK?pid=Api&rs=1" rating={4}/>
                <Product style={{width: '100%'}} id="411" title="The lean startup" price={29.99} image="https://th.bing.com/th/id/OIP.rRRS_NvNJXUO4-yTU3SqpQHaEK?pid=Api&rs=1" rating={4}/>
                
                </div>
            </div>

        </div>
    )
}

export default Home
