import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IGetSearchResult, searchData } from "../api";
import { makeImagePath } from "../utils";

const Row = styled.div`
  position: absolute;
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
  margin: 0.3rem;
  width: 100%;
  height: 16rem;
  width: calc(100% / ${(props) => props.offset} - 0.6rem);

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
  top: 15.8rem;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.neutral};
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 1.8rem;
  }
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
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

const SearchItem = ({ keyword }: { keyword: string }) => {
  const { data } = useQuery<IGetSearchResult>(
    ["search", keyword],
    () => searchData(keyword || ""),
    { useErrorBoundary: true }
  );

  const offset = 6;
  const navigate = useNavigate();
  const onBoxClicked = (menuName: string, id: number) => {
    navigate(`/search/${menuName}/${id}?keyword=${keyword}`);
  };



  return (
    <>
      {data  && data.results.length > 0 ? (
        <Row>
          {data?.results.map((d) => (
            <Box
              layoutId={d.id + "" + d.media_type}
              key={d.id}
              variants={boxVariants}
              initial="normal"
              whileHover="hover"
              transition={{ type: "tween" }}
              offset={offset}
              bgphoto={makeImagePath(d.backdrop_path || "", "w500")}
              onClick={() => onBoxClicked(d.media_type, d.id)}
            >
              <Info variants={infoVariants}>
                <h4>{d.title ? d.title : d.name}</h4>
              </Info>
            </Box>
          ))}
        </Row>
      ) : (
        <div>No search results available.</div>
      )}
    </>
  );
};

export default SearchItem;
