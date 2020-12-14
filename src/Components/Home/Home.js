import React from 'react';
import './Home.css';
import Product from "../Products/Product";

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home__image'
                     // src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
                    src="https://pkglobal.com/wp-content/uploads/2018/03/iStock-1090582556.jpg"

                     alt=''
                />


                <div className='home__row'>
                    <Product
                        id='123456541365878721'
                        title='The lean startup'
                        price={29.99}
                        image='https://cdn.pixabay.com/photo/2020/01/11/18/13/alexa-4758340_960_720.jpg'
                        rating={5}
                    />

                    <Product
                        id='123456565164887878'
                        title='The lean startup'
                        price={29.99}
                        image='https://cdn.pixabay.com/photo/2016/04/30/00/20/glasses-1362238_960_720.jpg'
                        rating={5}
                    />

                </div>

                <div className='home__row'>
                    <Product
                        id='123456516548'
                        title='The lean startup'
                        price={29.99}
                        image='https://images.ua.prom.st/2047260144_w640_h640_umnye-chasy-smart.jpg'
                        rating={5}
                    />

                    <Product
                        id='123456565485454'
                        title='The lean startup'
                        price={29.99}
                        image='https://www.weeklyvoice.com/wp-content/uploads/2020/02/48a45f72e53c4eab8a5809f6554e8622.jpg'
                        rating={4}
                    />

                    <Product
                        id='1234561566548415456'
                        title='Google home mini'
                        price={29.99}
                        image='https://cdn.pixabay.com/photo/2018/10/11/12/36/google-home-mini-3739710_960_720.jpg'
                        rating={1}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='1234561565484545484'
                        title='The lean startup'
                        price={29.99}
                        image='https://b4.3ddd.ru/media/cache/tuk_model_custom_filter_ru/model_images/0000/0000/2723/2723894.5e53fb605c730.jpeg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;