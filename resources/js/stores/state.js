import store from '../store';

export default ({
    products: [
        {
            id: 1,
            title: 'Ribeye',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 15.00,
            image: 'https://i2.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/07/butcherybrothers-product-beef-v2-topside.jpg?resize=324%2C194&ssl=1',
            ratings: 3,
            status: 'available',
            reviews: 5,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
        {
            id: 2,
            title: 'Soup Bone',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 16.00,
            image: 'https://i2.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/07/butcherybrothers-product-beef-v2-ribeye.jpg?resize=324%2C194&ssl=1',
            ratings: 5,
            status: 'available',
            reviews: 10,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
        {
            id: 3,
            title: 'Topside',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 14.00,
            image: 'https://i1.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/07/butcherybrothers-product-beef-v2-striploin.jpg?resize=324%2C194&ssl=1',
            ratings: 2,
            status: 'available',
            reviews: 3,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
        {
            id: 4,
            title: 'Brisket',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 18.00,
            image: 'https://i0.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/07/butcherybrothers-product-beef-v2-shortribs.jpg?resize=324%2C194&ssl=1',
            ratings: 1,
            status: 'available',
            reviews: 0,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
        {
            id: 5,
            title: 'Tenderloin',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 8.00,
            image: 'https://i0.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/08/butcherybrothers-product-beef-v2-soupbone.jpg?resize=324%2C194&ssl=1',
            ratings: 4,
            status: 'available',
            reviews: 2,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
        {
            id: 6,
            title: 'Short Ribs',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 14.00,
            image: 'https://i2.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/07/butcherybrothers-product-beef-v2-tenderloin.jpg?resize=324%2C194&ssl=1',
            ratings: 5,
            status: 'available',
            reviews: 1,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
        {
            id: 7,
            title: 'Striploin',
            description: 'Brisket is a large cut of beef coming from the breast. Least tender cuts of beef, but fret not, you can soften the meat by braised, smoked, or roasted.',
            price: 20.00,
            image: 'https://i2.wp.com/butcherybrothers.com.my/wp-content/uploads/2020/07/butcherybrothers-product-beef-v2-brisket.jpg?resize=324%2C194&ssl=1',
            ratings: 5,
            status: 'available',
            reviews: 7,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        },
    ],
    userInfo: {
        isLoggedIn: false,
        isSignedUp: false,
        hasSearched: false,
        name: '',
        productTitleSearched: ''
    },
    systemInfo: {
        openLoginModal: false,
        openSignupModal: false,
        openCheckoutModal: false
    }
})

