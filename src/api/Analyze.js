export async function analyzeFakeNews(text) {
  // TODO: Connect real AI API here
  // For now → random fake score
  const fakeScore = Math.floor(Math.random() * 100);

  return {
    score: fakeScore,
    message:
      fakeScore > 50
        ? "This news looks suspicious ❗"
        : "This news seems credible ✔"
  };
}
