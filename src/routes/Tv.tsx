import { useQuery } from "@tanstack/react-query";
import Sliders from "components/Slider";
import styled from "styled-components";
import { getPopularTvShows,getPopularWorldTvShows,getTopRatedTvShows, IGetMoviesResult, LIST_TYPE } from "../api";
import { makeImagePath } from "../utils";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.background};
  padding-bottom: 150px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgphoto: string }>`
  display: flex;
  margin-left: -50px;
  height: 75vh;
  padding: 60px;
  color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  transition: background-image 0.2s ease;
`;

const Title = styled.div<{ active: boolean }>`
  font-size: 1.2rem;
  text-align: left;
  padding: 10px;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 1)" : "rgba(233, 233, 233, 0.2)"};
  color: ${(props) =>
    props.active ? "#000000" : "rgba(255, 255, 255, 0.2)"};
      @media (min-height:1100px) {
    font-size: 1.3rem;
}
`;

const RankTitle = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: ${(props)=>props.theme.color.text};
  padding:20px;
  @media (min-height:1100px) {
    font-size: 2rem;
    margin: 24px 0px 20px -10px;
}

`;

const RankBox = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  width: 330px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 15px;
  padding: 10px;
  @media (min-height:1100px) {
    width: 360px;
    padding: 15px;
}
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  margin-top: 60px;
  border-radius: 20px;
  height: 26rem;
  @media (min-height:1100px) {
    height: 34rem;
    justify-content: center;
}
`;

const SliderArea = styled.div`
  position: relative;
`;

function Tv() {
  const { data: tvShowList, isLoading } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[3], "tvShows"],
    getPopularTvShows
  );
  const { data: PopularWorldTvShowsList } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[4], "PopularWorldTvShows"],
    getPopularWorldTvShows
  );
  const { data: PopularTopRatedTvShows } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[5], "PopularTopRatedTvShows"],
    getTopRatedTvShows
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgphoto={
              hoveredIndex !== null
                ? makeImagePath(tvShowList?.results[hoveredIndex].backdrop_path || "")
                : makeImagePath(tvShowList?.results[activeIndex].backdrop_path || "")
            }
          >
            <BannerContent>
              <RankTitle>훈플릭스 인기 콘텐츠</RankTitle>
              {tvShowList?.results.slice(0, 5).map((show, index) => (
                <RankBox
                  key={show.id}
                  index={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                 <Title
                    active={activeIndex === index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {index + 1}. {show.name}
                  </Title>
                </RankBox>
              ))}
            </BannerContent>
          </Banner>
          <SliderArea>
            <Sliders
              data={tvShowList as IGetMoviesResult}
              title={"한국 인기 드라마"}
              listType={LIST_TYPE[3]}
              mediaType={"tv"}
              menuName={"tv"}
            />
           <Sliders
              data={PopularWorldTvShowsList as IGetMoviesResult}
              title={"전세계 인기 드라마"}
              listType={LIST_TYPE[4]}
              mediaType={"tv"}
              menuName={"tv"}
            />
              <Sliders
              data={PopularTopRatedTvShows as IGetMoviesResult}
              title={"높은 평점의 TV 프로그램"}
              listType={LIST_TYPE[5]}
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
