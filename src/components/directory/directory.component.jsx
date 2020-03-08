import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './style.scss';

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: "RINGS",
                    image: "https://i.ibb.co/9HLwNvC/classy-silver-wedding-rings-made-white-gold-lie-crystal-bracelet-8353-8668.jpg"
                },
                {
                    id: 2,
                    title: "NECKLACES",
                    image: "https://i.ibb.co/NChXFt8/pexels-photo-848541.jpg"
                },
                {
                    id: 3,
                    title: "ACCESSORIES",
                    image: "https://i.ibb.co/Jzg97wp/pexels-photo-1616096.jpg"
                },
                {
                    id: 4,
                    title: "WOMEN'S",
                    image: "https://i.ibb.co/hmy4bSL/pexels-photo-458766.jpg",
                    size: "large"
                },
                {
                    id: 5,
                    title: "MEN'S",
                    image: "https://i.ibb.co/TmgfR35/mens-jewellery.jpg",
                    offer: "30% off",
                    size: "large"
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, title, image, offer, size }) => (
                    <MenuItem key={id}
                        title={title} image={image}
                        offer={offer} 
                        size={size ? size : false}
                        />
                ))}
            </div>
        )
    }

}

export default Directory;