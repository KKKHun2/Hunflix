import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider";
import styled from "styled-components";
import { getPopularTvShows,getPopularWorldTvShows,getTopRatedTvShows, IGetMoviesResult, LIST_TYPE } from "../api";
import { makeImagePath } from "../utils";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.neutral};
  padding-bottom: 200px;
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
  height: 80vh;
  padding: 60px;
  color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  transition: background-image 0.2s ease;
`;

const Title = styled.div<{ active: boolean }>`
  font-size: 30px;
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
`;

const RankTitle = styled.div`
  font-weight: bold;
  font-size: 27px;
  margin: 15px 0px 13px -60px;
  color: rgba(255, 255, 255, 0.8);
`;

const RankBox = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  width: 330px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 15px;
  font-size: 24px;
  padding: 10px;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  margin-top: 40px;
  border-radius: 20px;
  height: 28rem;
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
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index); // 호버 시 자동 변환을 멈추도록 추가
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
