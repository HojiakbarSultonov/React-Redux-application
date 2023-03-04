import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleService from "../../service/article";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../../slice/article";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArticleForm from './../articleForm/ArticleForm';

function EditArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };
    getArticleDetail();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      await ArticleService.editArticle(slug, article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };

  const formProps = {
    formSubmit,
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
  };

  return (
    <div className="text-center">
      <h1 className="fs-2">Edit Article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
}

export default EditArticle;
