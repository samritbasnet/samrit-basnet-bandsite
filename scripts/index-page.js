const bandsiteApi = new BandSiteApi("e6c57803-c63f-4647-b6f7-ce9254110873");
async function getComments() {
  return await bandsiteApi.getComments();
}

async function PostComment(person) {
  await bandsiteApi.postComment(person);
}

// const comment = [
//   {
//     name: "Victor Pinito",
//     date: "01/12/2025",
//     comment:
//       "This is art.This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what its contains",
//     image: {
//       src: "/assets/logos/grey.jpg",
//       alt: "dummy avatar image",
//     },
//   },
//   {
//     name: "Jonathan fields",
//     date: "02/19/2025",
//     comment:
//       "A masterpiece beyond words. The essence of creativity and vision captured in its purest form. Let’s admire and cherish it!",
//     image: { src: "/assets/logos/grey.jpg", alt: "dummy avatar image" },
//   },
//   {
//     name: "Samantha Rivers",
//     date: "03/22/2025",
//     comment:
//       "his resonates on a deep level. A true expression of emotion and artistry that transcends explanation.",
//     src: "/assets/logos/grey.jpg",
//     alt: "dummy avatar image",
//   },
// ];
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

  commentContentDiv.appendChild(nameHeader);
  commentContentDiv.appendChild(dateEl);
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
