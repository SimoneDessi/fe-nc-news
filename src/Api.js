import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://simone-dessi-nc-news.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data.articles
  })
}