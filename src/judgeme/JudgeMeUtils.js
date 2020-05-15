import axios from 'axios';

const judgeMeConfig = {
    apiEndpoint: 'https://judge.me/api/v1/reviews',
    shopDomain: 'better-than-belts.myshopify.com'
};
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const getAllReviews = () => {
    var myHeaders = new Headers();

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://judge.me/api/v1/reviews?api_token=////&shop_domain=better-than-belts.myshopify.com", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const getReviewsByHandle = (handle) => {
    // do nothing for now
}


export { getAllReviews, getReviewsByHandle };