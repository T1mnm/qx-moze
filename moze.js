// MOZE 解锁 - RevenueCat
let obj = JSON.parse($response.body || "{}");

const entitlement = "MOZE_PREMIUM_SUBSCRIPTION";
const product = "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC";
const purchase = "2023-05-23T00:00:00Z";
const expires = "2099-09-09T00:00:00Z";

obj.subscriber = obj.subscriber || {};

obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.entitlements[entitlement] = {
  "expires_date": expires,
  "grace_period_expires_date": null,
  "purchase_date": purchase,
  "product_identifier": product,
  "is_sandbox": false,
  "ownership_type": "PURCHASED",
  "store": "app_store"
};

obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.subscriptions[product] = {
  "expires_date": expires,
  "grace_period_expires_date": null,
  "purchase_date": purchase,
  "original_purchase_date": purchase,
  "is_sandbox": false,
  "ownership_type": "PURCHASED",
  "store": "app_store"
};

obj.subscriber.non_subscriptions = obj.subscriber.non_subscriptions || {};
obj.subscriber.original_purchase_date = obj.subscriber.original_purchase_date || purchase;

obj.subscriber.management_url = obj.subscriber.management_url || "https://apps.apple.com/account/subscriptions";
obj.subscriber.original_app_user_id = obj.subscriber.original_app_user_id || "$RCAnonymousID:moze";
obj.request_date = obj.request_date || new Date().toISOString();
obj.request_date_ms = obj.request_date_ms || String(Date.now());

$done({ body: JSON.stringify(obj) });
