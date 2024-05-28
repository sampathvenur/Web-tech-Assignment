function showStateInfo(state) {
    let stateInfo = getStateInfo(state);
    let info = `State: ${state}\n`;
    info += `${stateInfo}\n`;
    alert(info);
}

function getStateInfo(state) {
    switch (state) {
        case 'Andhra Pradesh':
            return 'Andhra Pradesh is a state in the southeastern coastal region of India. It is known for its rich cultural heritage and historical significance.';
        case 'Arunachal Pradesh':
            return 'Arunachal Pradesh is a state in northeastern India, known for its breathtaking natural beauty, diverse indigenous tribes, and vibrant festivals.';
        case 'Assam':
            return 'Assam is a state in northeastern India, famous for its tea plantations, diverse wildlife, and the mighty Brahmaputra River.';
        case 'Bihar':
            return 'Bihar is a state in eastern India, renowned for its ancient history, religious sites, and contribution to Indian culture.';
        case 'Chhattisgarh':
            return 'Chhattisgarh is a state in central India, known for its lush greenery, rich tribal culture, and ancient temples.';
        case 'Goa':
            return 'Goa is a state on the southwestern coast of India, celebrated for its stunning beaches, vibrant nightlife, and Portuguese heritage.';
        case 'Gujarat':
            return 'Gujarat is a state in western India, famous for its rich cultural heritage, historical monuments, and delectable cuisine.';
        case 'Haryana':
            return 'Haryana is a state in northern India, known for its agricultural prosperity, vibrant festivals, and ancient archaeological sites.';
        case 'Himachal Pradesh':
            return 'Himachal Pradesh is a state in the northern part of India, admired for its breathtaking landscapes, adventure sports, and serene hill stations.';
        case 'Jharkhand':
            return 'Jharkhand is a state in eastern India, known for its rich mineral resources, dense forests, and diverse tribal culture.';
        case 'Karnataka':
            return 'Karnataka is a state in southwest India, celebrated for its rich history, vibrant culture, and IT hub Silicon Valley.';
        case 'Kerala':
            return 'Kerala is a state in southern India, renowned for its lush greenery, backwaters, ayurvedic treatments, and diverse culture.';
        case 'Madhya Pradesh':
            return 'Madhya Pradesh is a state in central India, known for its rich history, architectural marvels, and wildlife sanctuaries.';
        case 'Maharashtra':
            return 'Maharashtra is a state in western India, famous for its bustling cities, Bollywood film industry, historical sites, and delicious street food.';
        case 'Manipur':
            return 'Manipur is a state in northeastern India, known for its scenic beauty, rich cultural heritage, and traditional performing arts.';
        case 'Meghalaya':
            return 'Meghalaya is a state in northeastern India, famous for its abundant rainfall, picturesque landscapes, and living root bridges.';
        case 'Mizoram':
            return 'Mizoram is a state in northeastern India, known for its lush greenery, vibrant festivals, and warm hospitality of its people.';
        case 'Nagaland':
            return 'Nagaland is a state in northeastern India, celebrated for its vibrant tribal culture, traditional arts, and picturesque landscapes.';
        case 'Odisha':
            return 'Odisha is a state in eastern India, famous for its ancient temples, pristine beaches, rich cultural heritage, and classical dance forms.';
        case 'Punjab':
            return 'Punjab is a state in northern India, known for its fertile lands, vibrant culture, mouthwatering cuisine, and religious diversity.';
        case 'Rajasthan':
            return 'Rajasthan is a state in western India, famous for its royal heritage, majestic forts and palaces, vibrant festivals, and desert landscapes.';
        case 'Sikkim':
            return 'Sikkim is a state in northeastern India, admired for its stunning landscapes, Buddhist monasteries, and rich biodiversity.';
        case 'Tamil Nadu':
            return 'Tamil Nadu is a state in southern India, renowned for its ancient temples, classical dance forms, picturesque hill stations, and spicy cuisine.';
        case 'Telangana':
            return 'Telangana is a state in southern India, known for its rich history, architectural wonders, and vibrant culture.';
        case 'Tripura':
            return 'Tripura is a state in northeastern India, famous for its diverse tribal culture, lush greenery, and historical landmarks.';
        case 'Uttar Pradesh':
            return 'Uttar Pradesh is a state in northern India, known for its historical monuments, religious sites, and rich cultural heritage.';
        case 'Uttarakhand':
            return 'Uttarakhand is a state in northern India, famous for its majestic Himalayan peaks, pilgrimage sites, and adventure sports.';
        case 'West Bengal':
            return 'West Bengal is a state in eastern India, renowned for its literary heritage, cultural diversity, delicious cuisine, and festivals.';
        default:
            return 'Information not available';
    }
}