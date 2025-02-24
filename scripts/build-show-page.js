const bandsiteApi = new BandSiteApi("e6c57803-c63f-4647-b6f7-ce9254110873");
getShows();
async function getShows() {
  const shows = await bandsiteApi.getShows();

  return shows;
}

function createElementWithClassAndContent(
  tag,
  className = "",
  textContent = ""
) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

async function renderShows() {
  const show = await getShows();
  const showList = document.getElementById("shows-list");

  show.forEach((element) => {
    const row = createElementWithClassAndContent("div", "shows__row");
    const details = createElementWithClassAndContent("div", "shows__details");

    const dateLabel = createElementWithClassAndContent("div", "shows__label");
    const date = createElementWithClassAndContent(
      "div",
      "shows__info",
      new Date(element.date).toDateString()
    );
    const venueLabel = createElementWithClassAndContent("div", "shows__label");
    const venue = createElementWithClassAndContent(
      "div",
      "shows__info",
      element.place
    );
    const locationLabel = createElementWithClassAndContent(
      "div",
      "shows__label"
    );
    const location = createElementWithClassAndContent(
      "div",
      "shows__info",
      element.location
    );

    details.append(dateLabel, date, venueLabel, venue, locationLabel, location);

    const buyButton = createElementWithClassAndContent(
      "button",
      "shows__button",
      "BUY TICKETS"
    );
    buyButton.addEventListener("click", () => {
      alert(`Tickets for ${show.venue} on ${formatDate(show.date)} clicked!`);
    });

    row.append(details, buyButton);
    showList.appendChild(row);
  });
}

renderShows();
