import axios from 'axios';

const judgeMeConfig = {
    apiEndpoint: 'http://judge.me/api/v1/reviews',
    shopDomain: 'better-than-belts.myshopify.com'
};
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function getAllReviews() {
    const response = await fetch("https://judge.me/api/v1/reviews?shop_domain=better-than-belts.myshopify.com&api_token=vV2Kjg2yUhD9ZWljyWeljfkC0Ag", {
        mode: 'no-cors',
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
    });
    // var myHeaders = new Headers();

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // fetch("https://judge.me/api/v1/reviews?api_token=////&shop_domain=better-than-belts.myshopify.com", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    console.log(response);
    return response.json();
}

const getReviewsByHandle = (handle) => {
    // do nothing for now
}


export { getAllReviews, getReviewsByHandle };