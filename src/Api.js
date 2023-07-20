import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://simone-dessi-nc-news.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data.articles
  })
}

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article
  })
}

export const getAllCommentsFromArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments
  })
}
export const voteOnArticle = (article_id, voteType) => {
  const voteData = {
    inc_votes: voteType === "up" ? 1 : -1,
  };
  return newsApi.patch(`/articles/${article_id}`, voteData).then(({ data }) => {
    return data.article
  })
}
