import React, { Component } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'your-shop-name.myshopify.com',
  storefrontAccessToken: 'your-storefront-access-token',
});

class ShopProvider extends Component {
  render() {
    return <div></div>;
  }
}

export default ShopProvider;
