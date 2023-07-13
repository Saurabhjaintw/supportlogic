import React, { useEffect, useState } from "react";
import { CommonCard } from "../../components/card/CommonCard";
import { CommonTabs } from "../../components/tabs/CommonTabs";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import { TextField } from "@material-ui/core";
import { CommonButton } from "../../components/Buttons/CommonButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData, updateLike } from "../../redux/features/dataSlice";

export const Dashboard = () => {
  const [article, setArticle] = useState(0);
  const [count, setCount] = useState(3);
  const [isNextDisable, setIsNextDisable] = useState(false);
  const [isBackDisable, setIsBackDisable] = useState(false);
  const [search, setSearch] = useState("");
  const { lang, country } = useParams();
  const { data } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ lang, country }));
  }, [dispatch, lang, country]);

  useEffect(() => {
    if (count >= data?.length) {
      setIsNextDisable(true);
    } else {
      setIsNextDisable(false);
    }
    if (article <= 0) {
      setIsBackDisable(true);
    } else {
      setIsBackDisable(false);
    }
  }, [article, count, data]);

  const handleNext = () => {
    setArticle(article + 3);
    setCount(count + 3);
  };

  const handleBack = () => {
    setArticle(article - 3);
    setCount(count - 3);
  };

  const handleLike = (i) => {
    dispatch(updateLike(i));
  };

  const handleHide = (i) => {
    document.getElementById(i).style.display = "hidden";
  };

  return (
    <>
      <CommonTabs />
      <div className="input-seach">
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="cardParent">
        {data?.slice(article, article + 3).map((ele, i) => (
          <CommonCard
            key={i}
            data={ele}
            search={search}
            onLike={() => handleLike(ele.id)}
            onHide={() => handleHide(ele.id)}
          />
        ))}
      </div>
      <div className="buttonParent">
        <div>
          <CommonButton
            title={"Back"}
            icon={ArrowBackIosOutlinedIcon}
            onHandle={() => handleBack()}
            disabled={isBackDisable}
          />
        </div>
        <div>
          <CommonButton
            title={"Next"}
            icon={NavigateNextOutlinedIcon}
            onHandle={() => handleNext()}
            disabled={isNextDisable}
          />
        </div>
      </div>
    </>
  );
};
