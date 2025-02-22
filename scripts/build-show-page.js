const showData = [
  {
    date: "Mon Sept 08 2025",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 16 2025",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 11 2025",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 15 2025",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 17 2025",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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

const showList = document.getElementById("shows-list");

function renderShows() {
  const showList = document.getElementById("shows-list");

  showData.forEach((show) => {
    const row = createElementWithClassAndContent("div", "shows__row");
    const details = createElementWithClassAndContent("div", "shows__details");

    const dateLabel = createElementWithClassAndContent(
      "div",
      "shows__label",
      "DATE"
    );
    const date = createElementWithClassAndContent(
      "div",
      "shows__info",
      show.date
    );
    const venueLabel = createElementWithClassAndContent(
      "div",
      "shows__label",
      "VENUE"
    );
    const venue = createElementWithClassAndContent(
      "div",
      "shows__info",
      show.venue
    );
    const locationLabel = createElementWithClassAndContent(
      "div",
      "shows__label",
      "LOCATION"
    );
    const location = createElementWithClassAndContent(
      "div",
      "shows__info",
      show.location
    );

    details.append(dateLabel, date, venueLabel, venue, locationLabel, location);

    const buyButton = createElementWithClassAndContent(
      "button",
      "shows__button",
      "BUY TICKETS"
    );
    buyButton.addEventListener("click", () => {
      alert(`Tickets for ${show.venue} on ${show.date} clicked!`);
    });

    row.append(details, buyButton);
    showList.appendChild(row);
  });
}

renderShows();
