import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Wrapper = styled(motion.div)`
  position: relative;
  min-height: 23.9rem;
  margin-top: 3rem;
  /* 슬라이더 돌리면서 스크롤 터짐 방지용 */
  overflow: hidden;
  :hover .arrow {
    opacity: 1;
  }
  top:0;
  left:0;
`;

const Title = styled.div`
  font-size: 2.4rem;
  padding-left: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
  color:${props => props.theme.color.text};
`;

const ArrowBtn = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  color: #fff;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  transition: all 0.3s;
  z-index: 90;
  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #fff;
  }
  &:blur {
    color: #fff;
    background-color: #000;
  }
  svg {
    width: 2.8rem;
    height: 2.8rem;
  }

`;

const LeftArrowBtn = styled(ArrowBtn)`
  left: 0;
`;

const RightArrowBtn = styled(ArrowBtn)`
  right: 0;
`;

const Row = styled(motion.div)<{ gridcnt: number }>`
  display:grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  left: 0;
  margin-bottom: 3rem;
  width: 100%;
  clear: both;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;


const Box = styled(motion.div)<{ bgphoto: string | null; offset: number }>`
  display: block;
  float: left;
  height: 200px;
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
  & ~ & {
    margin-left: 0.6rem;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.color.neutral};
  color:${(props) => props.theme.color.text};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;


const rowVariants = {
  hidden: (right: number) => {
    return {
      x: right === 1 ? window.innerWidth + 5 : -window.innerWidth - 5,
    };
  },
  visible: {
    x: 0,
    y: 0,
  },
  exit: (right: number) => {
    return {
      x: right === 1 ? -window.innerWidth - 5 : window.innerWidth + 5,
    };
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      type: "tween",
      delay: 0.3,
      duration: 0.2,
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};


interface ISlider {
  data: IGetMoviesResult;
  title: string;
  listType: string;
  menuName: string;
  mediaType: string;
}

export default function Sliders({
  data,
  title,
  listType,
  menuName,
  mediaType,
}: ISlider) {

  const [isRight, setIsRight] = useState(1); // left: -1, right: 1
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const offset = 6;

  const toggleLeaving = (value: boolean) => {
    setLeaving(value);
  };
  const changeIndex = (right: number) => {


    if (data) {
      toggleLeaving(true); 
      setIsRight(right);
      const totalMovies = data.results.length-1;
      //20개 리스트에서 18개만 보여주기 위해 floor처리
    
      const maxIndex = Math.floor(totalMovies / offset) - 1;

      right === 1
        ? setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
        : setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  //resize로 인해 index의 값이 엄청 커진상태에서 offset개수가 많아지면 값이 안맞는 현상 막기위해 재연산처리추가


  const navigate = useNavigate();
  const onBoxClicked = (menu: string, type: string, id: number) => {
    navigate(`/${menu}/${type}/${id}`);
  };
  const bigMatch: PathMatch<string> | null = useMatch(
    `/${menuName}/${listType}/:id`
  );


  /**
   * Row 컴포넌트 props
   */
  const rowProps = {
    gridcnt: offset,
    custom: isRight,
    variants: rowVariants,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    transition: { type: "tween", duration: 1 },
    key: index,
  };

 
 

  const onClickToArrowBtn = (right: number) => {
    if (!leaving) {
      changeIndex(right);
    }
  };



  return (
    <Wrapper>
      <Title>{title}</Title>
      <LeftArrowBtn
        className="arrow"
        onClick={() => onClickToArrowBtn(-1)}
      >
        <AiOutlineLeft />
      </LeftArrowBtn>
      <RightArrowBtn
        className="arrow"
        onClick={() => onClickToArrowBtn(1)}
      >
        <AiOutlineRight />
      </RightArrowBtn>
      <AnimatePresence
        initial={false}
        onExitComplete={() => toggleLeaving(false)}
        custom={isRight}
      >
        <Row
          {...rowProps}
        >
          {data?.results
            .slice(offset * index, offset * index + offset)
            .map((d) => (
              <Box
                key={d.id}
                variants={boxVariants}
                initial="normal"
                whileHover="hover"
                transition={{ type: "tween" }}
                layoutId={d.id + "" + listType}
                bgphoto={makeImagePath(d.backdrop_path || "", "w500")}
                offset={offset}
                onClick={() => {
                  onBoxClicked(menuName, listType, d.id);
                }}
              >
                <Info variants={infoVariants}>
                  <h4>{d.title ? d.title : d.name}</h4>
                </Info>
              </Box>
            ))}
        </Row>
      </AnimatePresence>
      <AnimatePresence>
        {bigMatch ? (
          <Modal
            dataId={Number(bigMatch?.params.id)}
            listType={listType}
            menuName={menuName}
            requestUrl={mediaType}
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

