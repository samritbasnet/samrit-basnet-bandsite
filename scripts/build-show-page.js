const bandsiteApi = new BandSiteApi("e6c57803-c63f-4647-b6f7-ce9254110873");
async function getShows(){
  
}
function formatDate(date) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${days[date.getDay()]} ${months[date.getMonth()]} ${date
    .getDate()
    .toString()
    .padStart(2, "0")} ${date.getFullYear()}`;
}

const showData = [
  {
    date: new Date(2025, 8, 8),
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

function renderShows() {
  const showList = document.getElementById("shows-list");

  showData.forEach((show) => {
    const row = createElementWithClassAndContent("div", "shows__row");
    const details = createElementWithClassAndContent("div", "shows__details");

    const dateLabel = createElementWithClassAndContent("div", "shows__label");
    const date = createElementWithClassAndContent(
      "div",
      "shows__info",
      formatDate(show.date)
    );
    const venueLabel = createElementWithClassAndContent("div", "shows__label");
    const venue = createElementWithClassAndContent(
      "div",
      "shows__info",
      show.venue
    );
    const locationLabel = createElementWithClassAndContent(
      "div",
      "shows__label"
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
      alert(`Tickets for ${show.venue} on ${formatDate(show.date)} clicked!`);
    });

    row.append(details, buyButton);
    showList.appendChild(row);
  });
}

renderShows();
