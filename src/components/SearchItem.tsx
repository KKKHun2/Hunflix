import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchResult, searchData } from "../api";
import { makeImagePath } from "../utils";

const Row = styled.div`
  position: fixed;
  left: 0;
  margin: -0.3rem;
  margin-bottom: 3rem;
  width: 100%;
  clear: both;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Box = styled(motion.div)<{ bgphoto: string; offset: number }>`
  display: block;
  float: left;
  margin: 0.4rem;
  width: calc(100% / ${(props) => props.offset} - 0.8rem);
  height: 15rem;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  font-size: 4rem;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: relative;
  top: 15rem;
  width: 100%;
  padding: 10px;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  color:${(props) => props.theme.color.text};
  background-color: ${(props) => props.theme.color.background};
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 1.8rem;
  }
`;

const NoSearch = styled.div`
  position: absolute;
  top: 20%;
  padding-top: 4rem;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  color:${(props)=>props.theme.color.text};
  .sub{
    margin-top:10px;
    font-size: 1.7rem;
    font-weight: 300;
  }
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -40,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.3,
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.3,
    },
  },
};

function SearchContent({ keyword }: { keyword: string }) {
  const offset = 5;
  const { data } = useQuery<IGetSearchResult>(
    ["search", keyword],
    () => searchData(keyword || ""),
    { useErrorBoundary: true }
  );

  const navigate = useNavigate();
  const onBoxClicked = (menuName: string, id: number) => {
    navigate(`/search/${menuName}/${id}?keyword=${keyword}`);
  };

  return (
    <>
      {data && data.results.length > 0 ? (
        <Row>
          {data?.results.map((d) => (
            <Box
              layoutId={d.id + "" + d.media_type}
              key={d.id}
              variants={boxVariants}
              initial="normal"
              whileHover="hover"
              transition={{ type: "tween" }}
              bgphoto={makeImagePath(d.backdrop_path || "", "w500")}
              offset={offset}
              onClick={() => onBoxClicked(d.media_type, d.id)}
            >
              <Info variants={infoVariants}>
                <h4>{d.title ? d.title : d.name}</h4>
              </Info>
            </Box>
          ))}
        </Row>
      ) : (
        <NoSearch>
          '{keyword}' 검색 결과가 없습니다.
          <p className="sub">비슷한 검색어로 검색 부탁드립니다.</p>
        </NoSearch>
      )}
    </>
  );
}

export default SearchContent;