![Better Than Belts Logo](/src/images/logo.svg)

This is the marketing and e-commerce site for Better Than Belts, developed and designed by Scout.
This project was created using [Create React App](https://github.com/facebook/create-react-app).

## Set up development

1. Clone the repository:

```bash
git clone https://github.com/Better-Than-Belts/btb-site.git
```

2. Change directories:

```bash
cd scout-website-2020
```
3. Set up environment variables

To add necessary environment variables, create a file in the root directory simply called `.env`. Inside this directory, you will need to add two environment variables:

```sh
# In .env
REACT_APP_SHOPIFY_ACCESS_TOKEN=XXXXXXXXX
REACT_APP_STOREFRONT_ACCESS_TOKEN=XXXXXXXXX
```
The actual values of these tokens is to be found in Shopify, and is not to be shared with anybody outside the project.

4. Install the npm modules

```bash
# Inside the project directory
npm install
```

Run the server

```bash
npm start
```

It will likely start on http://localhost:3000. When you make changes, the site will auto-refresh and display your changes.


### Deployment

Deployment is set up via Netlify. To deploy code changes, all you need to do is merge a branch into master and the site will automatically update. Additionally, each pull request will auto-generate a "deploy preview" so you can view and share site changes.


