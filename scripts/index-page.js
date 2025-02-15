const comment=[
    {name:'Victor Pinito',
     date: "01/12/2025",
     comment:"This is art.This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what its contains",
        image:{
            src:'/assets/avatar/avatar1.png',
            alt:'dummy avatar image'
        }
    },    {name:'Jonathan fields',
        date: "02/19/2025",
        comment:"A masterpiece beyond words. The essence of creativity and vision captured in its purest form. Let’s admire and cherish it!",
              image:{ src:'/assets/avatar/avatar2.png',
               alt:'dummy avatar image'
           }
       },
       {name:'Samantha Rivers',
        date: "03/22/2025",
        comment:"his resonates on a deep level. A true expression of emotion and artistry that transcends explanation.",
               src:'/assets/avatar/avatar3.png',
               alt:'dummy avatar image'
           }

]
function createElementWithClassAndContent(element, className, textContent) {
    const newElement = document.createElement(element);

    if (className !== undefined) {
        newElement.classList.add(className);
    }

    if (textContent !== undefined) {
        newElement.innerText = textContent;
    }

    return newElement;
}




function commentCard(person){
const articleEl=createElementWithClassAndContent('article','comment');
const avatarEl=createElementWithClassAndContent('avatar','comment__avatar');
articleEl.src=person.image?.src ?? 'assets/images/Mohan-muruge.jpg'
imageEl.alt = person.image?.alt ?? 'a placeholder comment avatar image';
}
