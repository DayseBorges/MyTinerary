import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles/Pagination.module.css";
import { setPage } from "../../redux/store/slices/citiesSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const pages = useSelector((store) => store.cities.pages);
  const currentPage = useSelector((store) => store.cities.currentPage);

  const numPages = pages.length;

  const buttons = [];
  for (let i = 1; i <= numPages; i++) {
    buttons.push(i);
  }

  const handlePrev = () => {
    currentPage === 1
      ? dispatch(setPage(buttons.length))
      : dispatch(setPage(currentPage - 1));
  };

  const handleNext = () => {
    currentPage === buttons.length
      ? dispatch(setPage(1))
      : dispatch(setPage(currentPage + 1));
  };

  const handleChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className={style.pagination}>
      <IoMdArrowDropleftCircle onClick={handlePrev} className={style.arrow} />
      {buttons.map((page) => (
        <button
          key={page}
          onClick={() => handleChange(page)}
          className={`${style.numberDisabled} ${
            currentPage === page && style.numberActive
          }`}
        >
          {page}
        </button>
      ))}
      <IoMdArrowDroprightCircle onClick={handleNext} className={style.arrow} />
    </div>
  );
};

export default Pagination;
