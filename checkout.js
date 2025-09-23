const config = window.EDGE_CHECKOUT_CONFIG || {};
const publishableKey = config.publishableKey || "";
const createSessionUrl = config.createSessionUrl || "/create-checkout-session";
const fallbackPaymentLink = config.fallbackPaymentLink || "";

const form = document.getElementById("checkoutForm");
const errorBanner = document.getElementById("formError");
const continueButton = document.getElementById("continueButton");
const shippingRadios = form?.querySelectorAll('input[name="shippingMethod"]') || [];
const shippingLine = document.getElementById("shippingLine");
const orderTotalEl = document.getElementById("orderTotal");

const PRODUCT_PRICE = 19.99;
const SHIPPING_PRICE = {
  standard: 4.95,
  express: 8.95,
};
const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
});

const originalButtonHTML = continueButton ? continueButton.innerHTML : "";

function getSelectedShippingKey() {
  for (const radio of shippingRadios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return "standard";
}

function updatePricingDisplay() {
  const shippingKey = getSelectedShippingKey();
  const shippingAmount = SHIPPING_PRICE[shippingKey] ?? SHIPPING_PRICE.standard;

  if (shippingLine) {
    const valueEl = shippingLine.querySelector("strong");
    if (valueEl) {
      valueEl.textContent = currencyFormatter.format(shippingAmount);
    }
  }

  if (orderTotalEl) {
    const total = PRODUCT_PRICE + shippingAmount;
    orderTotalEl.textContent = currencyFormatter.format(total);
  }
}

function setLoadingState(isLoading) {
  if (!continueButton) return;
  if (isLoading) {
    continueButton.disabled = true;
    continueButton.setAttribute("aria-busy", "true");
    continueButton.innerHTML = "Securing payment...";
  } else {
    continueButton.disabled = false;
    continueButton.removeAttribute("aria-busy");
    continueButton.innerHTML = originalButtonHTML;
  }
}

function showError(message) {
  if (!errorBanner) return;
  errorBanner.textContent = message;
  errorBanner.classList.add("active");
}

function clearError() {
  if (!errorBanner) return;
  errorBanner.textContent = "";
  errorBanner.classList.remove("active");
}

function buildPayload(formData) {
  const shippingMethod = formData.get("shippingMethod") || getSelectedShippingKey();
  const shippingAmount = SHIPPING_PRICE[shippingMethod] ?? SHIPPING_PRICE.standard;

  return {
    customer: {
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      firstName: formData.get("firstName") || "",
      lastName: formData.get("lastName") || "",
    },
    shipping: {
      method: shippingMethod,
      amount: shippingAmount,
      address: {
        line1: formData.get("address1") || "",
        line2: formData.get("address2") || "",
        city: formData.get("city") || "",
        state: formData.get("state") || "",
        postalCode: formData.get("postalCode") || "",
        country: formData.get("country") || "",
      },
      notes: formData.get("notes") || "",
    },
    cart: {
      currency: "GBP",
      items: [
        {
          name: "Edge Custom Case",
          quantity: 1,
          amount: PRODUCT_PRICE,
        },
      ],
      totals: {
        product: PRODUCT_PRICE,
        shipping: shippingAmount,
        grandTotal: PRODUCT_PRICE + shippingAmount,
      },
    },
  };
}

async function requestCheckoutSession(payload) {
  try {
    const response = await fetch(createSessionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.sessionId) {
        return { sessionId: data.sessionId };
      }
      if (data?.paymentLink) {
        return { paymentLink: data.paymentLink };
      }
      return { error: "The server response was missing checkout details." };
    }

    return { error: `Checkout session request failed (${response.status}).` };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Network error" };
  }
}

async function redirectToStripe(sessionId) {
  if (!publishableKey) {
    return { error: "Stripe publishable key is missing." };
  }

  if (typeof Stripe !== "function") {
    return { error: "Stripe.js is unavailable. Please refresh the page and try again." };
  }

  const stripe = Stripe(publishableKey, { apiVersion: "2022-11-15" });
  const { error } = await stripe.redirectToCheckout({ sessionId });
  return error ? { error: error.message } : {};
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearError();

    if (!form.reportValidity()) {
      showError("Please review the highlighted fields and try again.");
      return;
    }

    setLoadingState(true);

    const formData = new FormData(form);
    const payload = buildPayload(formData);

    const sessionResponse = await requestCheckoutSession(payload);

    if (sessionResponse?.sessionId) {
      const outcome = await redirectToStripe(sessionResponse.sessionId);
      if (outcome.error) {
        setLoadingState(false);
        showError(outcome.error);
      }
      return;
    }

    if (sessionResponse?.paymentLink) {
      window.location.href = sessionResponse.paymentLink;
      return;
    }

    if (fallbackPaymentLink) {
      window.location.href = fallbackPaymentLink;
      return;
    }

    setLoadingState(false);
    showError(sessionResponse?.error || "We could not start checkout. Please refresh and try again.");
  });
}

for (const radio of shippingRadios) {
  radio.addEventListener("change", updatePricingDisplay);
}

updatePricingDisplay();
