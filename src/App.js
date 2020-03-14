import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import ShopifyClient from './components/ShopifyClient';
import Client from 'shopify-buy';
import PageContainer from './components/PageContainer';

function App() {
  // Set up Shopify client for BTB
  // const client = Client.buildClient({
  //   storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
  //   domain: 'better-than-belts.myshopify.com'
  // });

  // This will be replaced by a call to the Storefront API
  const props = {
    "Home": {
      "heroText": "Live Better",
      "ourStoryText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium.",
      "productInformationTitle": "Assembled in New York, USA",
      "productInformationText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?",
      "customerReview": "I love BTB so much! Their products are high quality and comfortable.",
      "customerName": "Happy Customer"
    }, 
    "PDP": {
      "title": "Flamingo", 
      "description": "Fine, you asked for a really cool pair of suspenders, so here they are. Take it or leave it. Or take it. Our classic three stripe in Rust / Navy",
      "variants": [
          {
              "name": "Red",
              "color": "#ff0000",
              "price": "49.00"
          },
          {
              "name": "Blue",
              "color": "#0000ff",
              "price": "49.00"
          },
          {
              "name": "Green",
              "color": "#00ff00",
              "price": "49.00"
          },
          {
              "name": "Powder Blue",
              "color": "#b0e0e6",
              "price": "49.00"
          },
          {
              "name": "Powder Blue",
              "color": "#b0e0e6",
              "price": "49.00"
          },
          {
              "name": "Gold", 
              "color": "#ffd700",
              "price": "49.00"
          }
      ],
    "customerName": "Happy Customer",
    "userReviews": [{"name": "Fred", "score": 5, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!"},
                    {"name": "Fred", "score": 3, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!"},
                    {"name": "Fred", "score": 2, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!"}],
    "productDetails": "They are suspenders :)"},
    "FAQ": {
      "title": "You ask, we answer.",
      "sections": [
        {"title": "about", "questions": [
          {"title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "Is your tagline \"suspend your disbelief\"?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "What makes these different from other suspenders?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "How does sizing work?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "Are suspenders coming back into fashion?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "Who are these made for?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "When are new designs coming?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "How do men accessorize?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "How many emails do you send?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "Do you have a referral program?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."}
        ]},
        {"title": "payment", "questions": [
          {"title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "Is your tagline \"suspend your disbelief\"?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."}
        ]},
        {"title": "shipping", "questions": [
          {"title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."}
        ]},
        {"title": "returns", "questions": [
          {"title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."},
          {"title": "Is your tagline \"suspend your disbelief\"?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium."}
        ]}
      ]
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <PageContainer {...props} />
        {/* <ShopifyClient client={client} /> */}
      </header>
    </div>
  );
}

library.add(faAngleDoubleDown, faStar);

export default App;
