import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../ui";
import { getArticleStart, getArticleSuccess } from "../../slice/article";
import ArticleService from "./../../service/article";
import ArticleCard from "../ArticleCard";

function Main() {
  const { articles, isLoading } = useSelector((state) => state.article);

  const dispatch = useDispatch();
  const getArticles = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      console.log("error");
    }
  };



  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5">
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item) => (
                <ArticleCard key={item.id} item={item} getArticles = {getArticles}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
