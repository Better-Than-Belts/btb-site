import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faStar, faAngleDoubleRight, faArrowRight, faArrowLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Client from 'shopify-buy';
import PageContainer from './components/PageContainer';

function App() {
  //Set up Shopify client for BTB
  const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
  });

  // This will be replaced by a call to the Storefront API
  const props = {
    "Home": {
      "heroText": "Live Better.",
      "ourStoryText": "Tyler quit belts after dealing with weight fluctuations due to health issues. Tight on the waist, frustrating to adjust; not comfortable. He needed something comfortable to hold up his pants. After shopping around, he found that suspender options were limited to costume goods and wedding wear. Too young to marry, he started Better Than Belts. Tori (sister) joined and together we’re creating the best genderless suspenders in the universe, for everyday use.",
      "consciousManufacturingText": "Sustainability drives our supply chain which is why our manufacturing is based in New York City. We use the highest quality global inputs and will forever design products consciously.",
      "productInformationTitle": "Assembled in New York, USA",
      "productInformationText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?",
      "customerReview": "I love BTB so much! Their products are high quality and comfortable.",
      "customerName": "Happy Customer"
    },
    "OurProduct": {
      "featureText1": "Bold colors to take you from the office to Sunday brunch.",
      "featureText2": "Easy-to-use and include in your existing wardrobe.",
      "featureText3": "Consciously made in New York of durable hardware for daily wear.",
      "featureText4": "Strong and stretchy elastic adjusts to fit you.",
      "customerReview1": "My second pair is just as awesome as the first I bought. Excellent quality and style!",
      "customerName1": "Jack L.",
      "customerReview2": "Super easy ordering process and they arrived very quickly! Great quality AND Made in USA!! Thank you!!",
      "customerName2": "Jeffrey M.",
      "whySuspendersText": "Gravity pulls your pants down, so we should counter that force by pulling up instead of relying on the friction caused by clinching your belt. They offer a unique twist on everyday outfits and provide comfort by distributing the weight evenly over your shoulders.",
      "whyBTBText": "BTB suspenders were designed to be worn every day. The clips are built to last. The elastic is stretchy and comfortable. The designs are unique to us, to be unique for you. From colors to fit, there is nothing of the same quality on the market. Assembled in New York, USA.",
      "manufacturingSupplyText": "Sustainability drives our supply chain which is why our manufacturing is based in New York City. We use the highest quality global inputs and will forever design products consciously."
    },
    "OurStory": {
      "heroText": "Our Story",
      "tylerName": "Tyler Farley",
      "tylerText1": "Brother,",
      "tylerText2": "Professional-Amateur Basketball Player",
      "toriName": "Tori Farley",
      "toriText1": "Sister,",
      "toriText2": "Professional-Amateur Yogi",
      "ourBackgroundTitle": "Our background",
      "ourBackgroundText1": "In early 2019, Tyler became frustrated with the uncomfortable waist-cinching by belts. Weight fluctuation led him to consider suspenders, but he grew disheartened at the options available. The suspender market was divided into expensive wedding-wear and cheap Halloween costumes. He needed suspenders that could sustain daily wear and look good with jeans or chinos.",
      "ourBackgroundText2": "We are both Northeastern University alumni with combined experience across manufacturing and marketing. Better Than Belts’ suspenders have the highest quality elastic and the strongest clips and adjusters. They are assembled in New York City because supporting American jobs is critical for us.",
      "title1": "It all starts with an idea",
      "text1": "Tyler spent months perfecting the suspender. After receiving many compliments, he realized this idea could become a brand. Cue a Kickstarter launch party at Pressed Juicery on Newbury St (raising 64% of the $10K Kickstarter goal in one day).",
      "title2": "Building community",
      "text2": "We were in the lull between Christmas and New Year’s when Tyler opened a Snapchat that showed Better Than Belts on the front page of The Boston Globe. The orders and emails came in further validating what we worked so hard to create. We continue to satisfy our customers and create products consciously.",
      "title3": "Looking forward",
      "text3": "We are here to make the best suspenders in the world and have some fun in the process. That means exploring retail, open-air markets, and maybe even some new products this year. Follow us on Instagram @BetterThanBelts to join us on the journey.",
    },
    "FAQ": {
      "title": "You ask, we answer.",
      "sections": [
        {
          "title": "about", "questions": [
            { "title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "Is your tagline \"suspend your disbelief\"?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "What makes these different from other suspenders?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "How does sizing work?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "Are suspenders coming back into fashion?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "Who are these made for?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "When are new designs coming?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "How do men accessorize?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "How many emails do you send?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "Do you have a referral program?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." }
          ]
        },
        {
          "title": "payment", "questions": [
            { "title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "Is your tagline \"suspend your disbelief\"?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." }
          ]
        },
        {
          "title": "shipping", "questions": [
            { "title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." }
          ]
        },
        {
          "title": "returns", "questions": [
            { "title": "What is Better Than Belts?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." },
            { "title": "Is your tagline \"suspend your disbelief\"?", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium." }
          ]
        }
      ]

    }

  }

  return (
    <div className="App" >
      <header className="App-header">
        <PageContainer {...props} client={client} />
      </header>
    </div >
  );
}

library.add(faAngleDoubleDown, faStar, faAngleDoubleRight, faArrowRight, faArrowLeft, faArrowDown);

export default App;
