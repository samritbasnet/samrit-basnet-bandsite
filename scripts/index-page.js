const bandsiteApi = new BandSiteApi("e6c57803-c63f-4647-b6f7-ce9254110873");
async function getComments() {
  return await bandsiteApi.getComments();
}

async function PostComment(person) {
  await bandsiteApi.postComment(person);
}

function createElementWithClassAndContent(element, className, textContent) {
  const newElement = document.createElement(element);

  if (className) {
    newElement.classList.add(className);
  }

  if (textContent) {
    newElement.innerText = textContent;
  }

  return newElement;
}

function commentCard(person) {
  const articleEl = createElementWithClassAndContent("article", "comment");
  const avatarEl = document.createElement("img");
  avatarEl.src = person.image?.src ?? "../assets/logos/grey.jpg";
  avatarEl.alt = person.image?.alt ?? "a placeholder comment avatar image";

  articleEl.appendChild(avatarEl);

  const commentContentDiv = createElementWithClassAndContent(
    "div",
    "comment__component"
  );
  const nameHeader = createElementWithClassAndContent(
    "h3",
    undefined,
    person.name
  );
  const dateEl = createElementWithClassAndContent(
    "p",
    "comment__date",
    new Date(person.timestamp).toLocaleDateString()
  );
  const commentParagraph = createElementWithClassAndContent(
    "p",
    undefined,
    person.comment
  );
  const divdateEl = createElementWithClassAndContent(
    "div",
    "comment-container"
  );
  commentContentDiv.appendChild(divdateEl);
  divdateEl.appendChild(nameHeader);
  divdateEl.appendChild(dateEl);
  commentContentDiv.appendChild(commentParagraph);
  articleEl.appendChild(commentContentDiv);

  return articleEl;
}
const commentList = document.querySelector(".comment-list");

async function renderComment() {
  const comment = await getComments();

  commentList.replaceChildren();

  comment.forEach((person) => {
    const commentCardElement = commentCard(person);
    commentList.appendChild(commentCardElement);
  });
}

const addNewForm = document.querySelector(".comment-form");

addNewForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target.name.value.trim();
  const commentText = event.target.comment.value.trim();

  if (!name || !commentText)
    [alert("Please fill both fields before submitting")];

  const person = {
    name,
    comment: commentText,
  };
  await PostComment(person);

  await renderComment();
  event.target.reset();
});

renderComment();
