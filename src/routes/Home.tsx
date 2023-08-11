import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider";
import styled from "styled-components";
import { getNowPlayingMovies,getPopularMovies,getUpcomingMovies,IGetMoviesResult,LIST_TYPE} from "../api";
import { makeImagePath } from "../utils";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.background};
  padding-bottom: 200px;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgphoto: string }>`
  height: 70vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  padding: 60px;
  color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  margin-top:50px;
  margin-bottom:30px;
  transition: background-image 0.2s ease;
`;
const Title = styled.h2`
  font-size: 3.3rem;
  font-weight: 400;
`;
const Overview = styled.p`
  font-size: 1.5rem;
  margin-top: 40px;
  width: 40%;
  font-weight: 350;
`;

const SliderArea = styled.div`
  position: relative;
`;
const BTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  margin-bottom:20px;
  margin-right: 30px;
`;

const BTitle = styled.div<{ active: boolean }>`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-bottom:5px;
  margin-left:10px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#e8e8e8c5" : "rgba(215, 215, 215, 0.2)"};
`;


function Home() {
  const { data: nowPlayingMoviesList, isLoading } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[0], "nowPlayingMovies"],
    getNowPlayingMovies
  );
  const { data: upcomingMoviesList } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[1], "upcomingMovies"],
    getUpcomingMovies
  );
  const { data: popularMoviesList } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[2], "popularMovies"],
    getPopularMovies
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
            bgphoto={makeImagePath(nowPlayingMoviesList?.results[activeIndex].backdrop_path || "")}
         >
            <Title>{nowPlayingMoviesList?.results[activeIndex].title}</Title>
            <Overview>
              {(nowPlayingMoviesList && nowPlayingMoviesList?.results[activeIndex].overview.length>190)
                ? nowPlayingMoviesList?.results[activeIndex].overview.slice(0,190)+"...."
                : nowPlayingMoviesList?.results[activeIndex].overview}               
            </Overview>
            <BTitleContainer>
          {nowPlayingMoviesList?.results.slice(0,5).map((show,index)=>(
              <BTitle
              key={show.id}
              active={activeIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
            
            ))}
            </BTitleContainer>
          </Banner> 
          
          <SliderArea>
            <Sliders
              data={nowPlayingMoviesList as IGetMoviesResult}
              title={"지금 상영중 영화"}
              listType={LIST_TYPE[0]}
              mediaType={"movie"}
              menuName={"home"}
            />
            <Sliders
              data={upcomingMoviesList as IGetMoviesResult}
              title={"출시예정 영화"}
              listType={LIST_TYPE[1]}
              mediaType={"movie"}
              menuName={"home"}
            />
            <Sliders
              data={popularMoviesList as IGetMoviesResult}
              title={"인기 급상승 영화"}
              listType={LIST_TYPE[2]}
              mediaType={"movie"}
              menuName={"home"}
            />
          </SliderArea>
        </>
      )}
    </Wrapper>
  );
}
export default Home;