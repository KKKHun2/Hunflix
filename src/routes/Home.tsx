import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider";
import styled from "styled-components";
// import { motion, AnimatePresence} from "framer-motion";
import { getNowPlayingMovies,
  getPopularMovies,
  getPopularTvShows,
  getUpcomingMovies,
  IGetMoviesResult,
  LIST_TYPE, } from "../api";


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
// const Slider = styled.div`
//   position: relative;
//   top: -100px;
// `;
// const Row = styled(motion.div)`
//   display: grid;
//   gap: 5px;
//   grid-template-columns: repeat(6, 1fr);
//   position: absolute;
//   width: 100%;
// `;
// const Box = styled(motion.div)<{ bgphoto: string }>`
//   background-color: ${props => props.theme.color.background};
//   background-image: url(${(props) => props.bgphoto});
//   background-size: cover;
//   background-position: center center;
//   height: 200px;
//   font-size: 66px;
//   color:${props => props.theme.color.text};
//   cursor: pointer;
//   &:first-child {
//     transform-origin: center left;
//   }
//   &:last-child {
//     transform-origin: center right;
//   }
// `;

// const Overlay = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   opacity: 0;
// `;

// const BigMovie = styled(motion.div)`
//   position: fixed;
//   width: 60vw;
//   height: 80vh;
//   left: 0;
//   right: 0;
//   top:0;
//   bottom:0;
//   margin: auto;
//   border-radius: 15px;
//   overflow: hidden;
//   background-color: ${props => props.theme.color.secondary};;
// `;
// const BigCover = styled.div`
//   width: 100%;
//   background-size: cover;
//   background-position: center center;
//   height: 400px;
// `;

// const BigTitle = styled.h3`
//   color: #FFFFFF;
//   padding: 20px;
//   font-size: 46px;
//   position: relative;
//   top: -80px;
// `;

// const BigOverview = styled.p`
//   padding: 20px;
//   position: relative;
//   top: -80px;
//   color: ${props => props.theme.color.text};;
//   `
// const Bigdate = styled.p`
//   padding-left: 20px;
//   margin-bottom: 5px;
//   top: -90px;
//   position: relative;
//   color: ${(props) => props.theme.color.text};
//   `;
  
  

// const rowVariants = {
//   hidden: {
//     x: window.outerWidth + 5,
//   },
//   visible: {
//     x: 0,
//   },
//   exit: {
//     x: -window.outerWidth - 5,
//   },
// };
// const boxVariants = {
//   normal: {
//     scale: 1,
//   },
//   hover: {
//     scale: 1.3,
//     y: -80,
//     transition: {
//       delay: 0.5,
//       duaration: 0.1,
//       type: "tween",
//     },
//   },
// };
// const infoVariants = {
//   hover: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       duaration: 0.1,
//       type: "tween",
//     },
//   },
// };


function Home() {

  // const [detail, setDetail] = useState<IMovieDetail>();

 
  const { data: nowPlayingMoviesList, isLoading } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[0], "nowPlayingMovies"],
    getNowPlayingMovies
  );

  // upcoming
  const { data: upcomingMoviesList } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[1], "upcomingMovies"],
    getUpcomingMovies
  );

  // popular
  const { data: popularMoviesList } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[2], "popularMovies"],
    getPopularMovies
  );

  // get Tv Show
  const { data: tvShowList } = useQuery<IGetMoviesResult>(
    [LIST_TYPE[3], "popularTvShows"],
    getPopularTvShows
  );


  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgphoto={(nowPlayingMoviesList?.results[0].backdrop_path || "")}
          >
            <Title>{nowPlayingMoviesList?.results[0].title}</Title>
            <Overview>{nowPlayingMoviesList?.results[0].overview}</Overview>
          </Banner>
          {/* <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      onClick={() => onBoxClicked(movie.id)}
                      transition={{ type: "tween" }}
                      bgphoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
               <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  layoutId={bigMovieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                      <Bigdate>
                          Release_date: {clickedMovie.release_date}
                          <br />
                          Budget: {detail?.budget}
                          <br />
                          Runtime: {detail?.runtime} Minutes
                          <br />
                          Revenue: {detail?.revenue}
                          <br />
                          Rating: {clickedMovie.vote_average}
                        </Bigdate>
                    </>
                  )}
                </BigMovie>
            </>
              
            ) : null}
          </AnimatePresence> */}
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
            <Sliders
              data={tvShowList as IGetMoviesResult}
              title={"POPULAR TV SHOWS"}
              listType={LIST_TYPE[3]}
              mediaType={"tv"}
              menuName={"home"}
            />
          </SliderArea>
        </>
      )}
    </Wrapper>
  );
}
export default Home;