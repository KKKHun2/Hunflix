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
  font-size: 68px;
  font-weight: 400;
  margin-top:150px;
`;
const Overview = styled.p`
  font-size: 30px;
  margin-top: 50px;
  width: 50%;
  font-weight: 350;
`;

const SliderArea = styled.div`
  position: relative;
 
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

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
          </Banner> 
          <SliderArea>
            <Sliders
              data={nowPlayingMoviesList as IGetMoviesResult}
              title={"NOW PLAYING"}
              listType={LIST_TYPE[0]}
              mediaType={"movie"}
              menuName={"home"}
            />
            <Sliders
              data={upcomingMoviesList as IGetMoviesResult}
              title={"UPCOMING MOVIES"}
              listType={LIST_TYPE[1]}
              mediaType={"movie"}
              menuName={"home"}
            />
            <Sliders
              data={popularMoviesList as IGetMoviesResult}
              title={"POPULAR MOVIES"}
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