import React from 'react';
import $ from 'jquery';
import styles from '../index.css'

export default class BTCTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.00,
      lastFetch: ""
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    window.setTimeout(function() {
      $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        dataType: "json",
        method: "GET",
        success: function(response) {
          context.setState({
            price: response.bpi.USD.rate,
            lastFetch: response.time.updated
          });
        }
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>
          BTC Güncel Fiyatı: {this.state.price} $
          <div style={styles.ekstra}>
          <small  style={styles.detay}>
            {this.state.lastFetch}
          </small>
          </div>
        </h1>
      </div>
    );
  }
}
