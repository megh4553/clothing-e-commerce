import React, { useEffect } from 'react';

const StripeBuyButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1OxTJaSFeumIZ8UQExzbrGVM"
      publishable-key="pk_test_51OxBZmSFeumIZ8UQ6OSOC1OtXRWHUhHEYfOC7yC31e96OJU4mWVeXCnfyJBrd8kwqsDSiA5FeTzDYRhDJNiMUANH00QcsReIGC"
    ></stripe-buy-button>
  );
};

export default StripeBuyButton;
 