import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Main, Navbar, Register } from "./components";
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./components/helpers/PersistanceStorage";
import ArticleService from "./service/article";
import { getArticleStart, getArticleSuccess } from "./slice/article";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getArticelse = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticleSuccess(response.articles));
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticelse();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
