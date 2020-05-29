const judgeMeConfig = {
    apiEndpoint: 'https://judge.me/api/v1/reviews',
    shopDomain: 'better-than-belts.myshopify.com'
};

const getAllReviews = () => {
    return new Promise(function(resolve, reject) {
        var allReviews = []
        var totalReviews = 0;

        fetch(`https://sleepy-coast-79367.herokuapp.com/https://judge.me/api/v1/reviews/count?&shop_domain=better-than-belts.myshopify.com&api_token=vV2Kjg2yUhD9ZWljyWeljfkC0Ag`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest"
            },
            redirect: 'follow'
        }).then(response => response.json())
        .then(result => {
            totalReviews = result.count;
            var promises = [];

            for(var i = 1; i <= Math.ceil(totalReviews/25); i++) {
                promises.push(
                    fetch(`https://sleepy-coast-79367.herokuapp.com/https://judge.me/api/v1/reviews?&shop_domain=better-than-belts.myshopify.com&api_token=vV2Kjg2yUhD9ZWljyWeljfkC0Ag&per_page=-1&page=${i}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        redirect: 'follow'
                    })
                )
            };

            Promise.all(promises).then((values) => {
                values.forEach(r => {
                    r.json().then(result => {
                        allReviews.push(...result.reviews);
                    });
                })
            }).then(() => resolve(allReviews));
        })
    });
    
}

const getReviewsByHandle = (handle) => {
    // do nothing for now
}


export { getAllReviews, getReviewsByHandle };