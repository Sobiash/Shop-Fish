export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getStoreName() {
  const storeIds = [
    "poland",
    "norway",
    "sweden",
    "denmark",
    "srilanka",
    "finland",
    "canada",
    "america",
    "england",
    "australia"
  ];

  return `${rando(storeIds)}`;
}
