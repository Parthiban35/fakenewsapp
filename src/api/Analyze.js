// export async function analyzeFakeNews(text) {
//   // TODO: Connect real AI API here
//   // For now → random fake score
//   const fakeScore = Math.floor(Math.random() * 100);

//   return {
//     score: fakeScore,
//     message:
//       fakeScore > 50
//         ? "This news looks suspicious ❗"
//         : "This news seems credible ✔"
//   };
// }
export function analyzeFakeNews(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const fakeScore = Math.abs(hash % 100);

  return {
    score: fakeScore,
    message:
      fakeScore > 50
        ? "This news looks suspicious ❗"
        : "This news seems credible ✔"
  };
}
