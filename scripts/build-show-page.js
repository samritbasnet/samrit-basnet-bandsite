document.addEventListener("DOMContentLoaded", () => {
    const showData = [
        { date: "Mon Sept 08 2025", venue: "Ronald Lane", location: "San Francisco, CA" },
        { date: "Tue Sept 16 2025", venue: "Pier 3 East", location: "San Francisco, CA" },
        { date: "Sat Oct 11 2025", venue: "View Lounge", location: "San Francisco, CA" },
        { date: "Sat Nov 15 2025", venue: "Hyatt Agency", location: "San Francisco, CA" },
        { date: "Wed Dec 17 2025", venue: "Press Club", location: "San Francisco, CA" }
    ];

    function createElementWithClassAndContent(tag, className = "", textContent = "") {
        const newElement = document.createElement(tag);

        if (className!==undefined) {
            newElement.classList.add(className);
        }

        if (textContent!==undefined) {
            newElement.textContent = textContent;
        }

        return newElement;
    }

    const showList = document.getElementById("shows-list");

    function renderShows() {
        

        showData.forEach(show => {
            const row = createElementWithClassAndContent('div', 'show-row');
            const details = createElementWithClassAndContent('div', 'details');

            const date = createElementWithClassAndContent('strong', 'show-date', show.date);
            const venue = createElementWithClassAndContent('span', 'show-venue', show.venue);
            const location = createElementWithClassAndContent('span', 'show-location', show.location);

            
            const buyButton = createElementWithClassAndContent('button', 'buy-ticket', 'Buy Tickets');
            buyButton.addEventListener("click", () => {
                alert(`Tickets for ${show.venue} on ${show.date} clicked!`);
            });

            details.appendChild(date);
            details.appendChild(venue);
            details.appendChild(location);
            row.appendChild(details);
            row.appendChild(buyButton); 

            showList.appendChild(row);
        });
    }

    renderShows();
});
