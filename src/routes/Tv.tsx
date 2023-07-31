import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider";
import styled from "styled-components";
// import { motion, AnimatePresence} from "framer-motion";
import {  getPopularTvShows,
  IGetMoviesResult,
  LIST_TYPE, } from "../api";
  import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.neutral};
  padding-bottom: 200px;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgphoto: string }>`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  margin-bottom:30px;
`;
const Title = styled.h2`
  font-size: 68px;

`;
const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const SliderArea = styled.div`
  position: relative;
 
`;



function Tv() {


  const { data: tvShowList, isLoading  } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[3], "popularTvShows"],
    getPopularTvShows
    
  );
  console.log(tvShowList)

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgphoto={makeImagePath(tvShowList?.results[1].backdrop_path || "")}
          > <h2>tv쇼 순위</h2>
            <Title>1.{tvShowList?.results[0].name}</Title>
            <Title>2.{tvShowList?.results[1].name}</Title>
            <Title>3.{tvShowList?.results[2].name}</Title>
            <Title>4.{tvShowList?.results[3].name}</Title>
            <Title>5.{tvShowList?.results[4].name}</Title>
          </Banner> 
          <SliderArea>
            <Sliders
              data={tvShowList as IGetMoviesResult}
              title={"POPULAR TV SHOWS"}
              listType={LIST_TYPE[3]}
              mediaType={"tv"}
              menuName={"tv"}
            />
          </SliderArea>
        </>
      )}
    </Wrapper>
  );
}
export default Tv;