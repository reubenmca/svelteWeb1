let BASE_URL = "https://api.unsplash.com";

let cardData = [
  {
    title: "History and Origins",
    text: "Coffee originated in Ethiopia and spread across Arabia and Europe, connecting people with its enticing flavors and stimulating effects.",
    url: "",
  },
  {
    title: "Art of Brewing",
    text: "Brewing coffee is an art that offers a unique sensory experience, where attention to detail and different methods bring out the best flavors.",
    url: "",
  },
  {
    title: "Health Benefits",
    text: "Coffee may have health benefits, including antioxidants that reduce the risk of certain diseases and potential improvements in cognition, mood, and heart health with moderate consumption.",
    url: "",
  },
];
export async function load() {
    const response = await fetch(`${BASE_URL}/photos/random/?client_id=IJ8uAZ9dv-CsGOxeDIRnFfJ6JdHv0yLSwG-6fpM_ilk&query=coffee&orientation=portrait&count=3`);
    const data = await response.json();
    //   console.log(data);

      data.map((item, i) => {
        cardData[i].url = item.urls.regular;
      });
      
    return {cardData};
}



