// const apiKey = 'a3ba14babfbe485990d40ec9ad3c131a';
// fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`).then(response => response.json())
//   .then(data => {
//     if (data.articles && data.articles.length > 0) {
//       // Display articles on the web page
//       const newsContainer = document.getElementById('news');
//       newsContainer.innerText = ''

//       const random = Math.floor(Math.random() * data.articles.length);

//       let article = data.articles[random];
//       const description = document.createElement('p');
//       description.textContent = article.description;
//       newsContainer.appendChild(description);


//       // Iterate over each article and create HTML elements to display them
//       data.articles.forEach(article => {
//         const articleDiv = document.createElement('div');
//         articleDiv.classList.add('article');

//         // const title = document.createElement('h2');
//         // title.textContent = article.title;
//         // articleDiv.appendChild(title);

//         const description = document.createElement('p');
//         description.textContent = article.description;
//         articleDiv.appendChild(description);

//         // const source = document.createElement('p');
//         // source.textContent = `Source: ${article.source.name}`;
//         // articleDiv.appendChild(source);

//         // const publishedAt = document.createElement('p');
//         // publishedAt.textContent = `Published At: ${new Date(article.publishedAt).toLocaleString()}`;
//         // articleDiv.appendChild(publishedAt);

//         // const link = document.createElement('a');
//         // link.textContent = 'Read more';
//         // link.href = article.url;
//         // articleDiv.appendChild(link);

//         newsContainer.appendChild(articleDiv);
//       });
//     } else {
//       throw new Error('No articles found');
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching news:', error);
//   });





let arr = ['“It is better to live your own destiny imperfectly than to live an imitation of somebody else`s life with perfection.” - The Bhagavad Gita', '“Man is made by his belief. As he believes, so he is.” - The Bhagavad Gita', '“There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three.” - Krishna', '“Those who cannot renounce attachment to the results of their work are far from the path.” - The Gita', '“A Karma-yogi performs action by body, mind, intellect, and senses, without attachment, only for self-purification.” - Bhagavad Gita', '“Happiness derived from a combination of the senses and the sense objects is always a cause of distress and should be avoided by all means.” - The Gita', '“A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return” - The Bhagavad Gita', '“One should strive and employ oneself to uplift oneself. One should never dishonor oneself. The self is one`s friend as well as one`s enemy.” - The Bhagavad Gita', '“As they approach me, so I receive them. All paths, Arjuna, lead to me.” - Krishna', '“Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.” - The Gita', '“Always perform your duty efficiently and without attachment to the results, because by doing work without attachment one attains the Supreme.” - Bhagavad Gita', '“The impermanent appearance of happiness and distress and their disappearance in due course are like the appearance and disappearance of winter and summer seasons. They arise from a sense of perception, and one must learn to tolerate them without being disturbed.” - The Gita', '“No one who does good work will ever come to a bad end, either here or in the world to come” - The Bhagavad Gita', '“What the outstanding person does, others will try to do. The standards such people create will be followed by the whole world.” - The Bhagavad Gita', '“Even the wise are confused about what is action and what is inaction.” - Bhagavad Gita', '“When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.” - The Bhagavad Gita', '“On this path effort never goes to waste, and there is no failure. Even a little effort toward spiritual awareness will protect you from the greatest fear.” - Bhagavad Gita', '“The peace of God is with them whose mind and soul are in harmony, who are free from desire and wrath, who know their own soul.” - The Bhagavad Gita', '“Even if you were the most sinful of sinners, Arjuna, you could cross beyond all sin by the raft of spiritual wisdom.” - The Gita', '“When a person is devoted to something with complete faith, I unify his faith in that. Then, when his faith his completely unified, he gains the object of his devotion.” - The Bhagavad Gita', '“Pleasure from the senses seems like nectar at first, but it is bitter as poison in the end.” - Krishna', '“All the scriptures lead to me; I am their author and their wisdom.” - The Gita', '“You should perform your duty with a view to guide people and for universal welfare.” - Bhagavad Gita', '“All happiness in the material world has a beginning and an end, but happiness in Krishna is unlimited, and there is no end.” - The Gita', '“The immature think that knowledge and action are different, but the wise see them as the same.” - The Gita', '“Some people spread happiness wherever they go, others create happiness wherever they go!” - The Gita', '“There is more happiness in doing one`s own (path) without excellence than in doing another`s (path) well.” - The Bhagavad Gita', '“You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.” - Krishna', '“One who sees inaction in action, and action in inaction, is intelligent among men.” - Bhagavad Gita', '“The peace of God is with them whose mind and soul are in harmony, who are free from desire and wrath, who know their own soul”.- The Gita', '“Through selfless service, you will always be fruitful and find the fulfillment of your desires.” - Bhagavad Gita', '“He who has no attachments can love others, For his love is pure and divine. And it is from those small acts of love you truly can be happy.” - The Gita', '“The ignorant work for their own profit, Arjuna; the wise work for the welfare of the world, without thought for themselves.” - Krishna', '“The actions of a great man are an inspiration for others. Whatever he does becomes a standard for others to follow.” - The Bhagavad Gita']
let i = Math.floor(Math.random() * arr.length);
const newsContainer = document.getElementById('news');
newsContainer.innerText = ''
newsContainer.innerText = `${arr[i]}`

// console.log(`This is a random fact from this npm package: ${arr[i]}`);