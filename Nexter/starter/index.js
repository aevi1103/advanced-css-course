const home = $('#homes');
const grids = [ 
    {
        title: 'Beautiful Family House',
        items: [
            {
                key: 'location',
                icon: 'icon-map-pin',
                subtitle: 'USA'
            },
            {
                key: 'rooms',
                icon: 'icon-profile-male',
                subtitle: '5 rooms'
            },
            {
                key: 'area',
                icon: 'icon-expand',
                subtitle: '252 <sup>2</sup>'
            },
            {
                key: 'price',
                icon: 'icon-key',
                subtitle: '$1,200,000'
            }
        ]
    },
    {
        title: 'Modern Glass Villa',
        items: [
            {
                key: 'location',
                icon: 'icon-map-pin',
                subtitle: 'USA'
            },
            {
                key: 'rooms',
                icon: 'icon-profile-male',
                subtitle: '5 rooms'
            },
            {
                key: 'area',
                icon: 'icon-expand',
                subtitle: '450 <sup>2</sup>'
            },
            {
                key: 'price',
                icon: 'icon-key',
                subtitle: '$2,300,000'
            }
        ]
    },
    {
        title: 'Modern Glass Villa',
        items: [
            {
                key: 'location',
                icon: 'icon-map-pin',
                subtitle: 'Canada'
            },
            {
                key: 'rooms',
                icon: 'icon-profile-male',
                subtitle: '6 rooms'
            },
            {
                key: 'area',
                icon: 'icon-expand',
                subtitle: '600 <sup>2</sup>'
            },
            {
                key: 'price',
                icon: 'icon-icon-key',
                subtitle: '$2,250,000'
            }
        ]
    },
    {
        title: 'Cozy Country House',
        items: [
            {
                key: 'location',
                icon: 'icon-map-pin',
                subtitle: 'UK'
            },
            {
                key: 'rooms',
                icon: 'icon-profile-male',
                subtitle: '4 rooms'
            },
            {
                key: 'area',
                icon: 'icon-expand',
                subtitle: '250 <sup>2</sup>'
            },
            {
                key: 'price',
                icon: 'icon-icon-key',
                subtitle: '$850,000'
            }
        ]
    },
    {
        title: 'Majestic Palace House',
        items: [
            {
                key: 'location',
                icon: 'icon-map-pin',
                subtitle: 'Germany'
            },
            {
                key: 'rooms',
                icon: 'icon-profile-male',
                subtitle: '18 rooms'
            },
            {
                key: 'area',
                icon: 'icon-expand',
                subtitle: '1450 <sup>2</sup>'
            },
            {
                key: 'price',
                icon: 'icon-icon-key',
                subtitle: '$5,850,000'
            }
        ]
    },
    {
        title: 'Modern Family Apartment',
        items: [
            {
                key: 'location',
                icon: 'icon-map-pin',
                subtitle: 'Italy'
            },
            {
                key: 'rooms',
                icon: 'icon-profile-male',
                subtitle: '3 rooms'
            },
            {
                key: 'area',
                icon: 'icon-expand',
                subtitle: '180 <sup>2</sup>'
            },
            {
                key: 'price',
                icon: 'icon-icon-key',
                subtitle: '$650,000'
            }
        ]
    },
    
];

home.empty();
grids.forEach((e,i) => {

    const {
        title,
        items
    } = e;

    const template = items => {
        let src = '';

        items.forEach(e => {
            const {key, icon, subtitle} = e;
            src += `
                <div class="home__${key}">
                    <svg>
                        <use xlink:href="img/sprite.svg#${icon}"></use>
                    </svg>
                    <p>${subtitle}</p>
                </div>
                `
            })

        return src;
    }

    home.append(`
        <div class="home">

            <img src="img/house-${i+1}.jpeg" alt="house${i+1}" class="home__img">
            <svg class="home__like">
                <use xlink:href="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 class="home__name">${title}</h5>
            
            ${template(items)}
            <button class="btn home__btn">Contact Realtor</button>

        </div>
    `)

})