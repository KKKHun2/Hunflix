import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider";
import styled from "styled-components";
import { getPopularTvShows, IGetMoviesResult, LIST_TYPE } from "../api";
import { makeImagePath } from "../utils";

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
  height: 80vh;
  padding: 60px;
  color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 40px;
  text-align: left;
  padding: 10px;

`;

const RankTitle = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-top: 50px;
  color: ${(props) => props.theme.color.text};
`;

const RankBox = styled.div`
  display: flex;
  flex-direction: column; 
  width: 330px;
  height: 450px;
  justify-content: flex-start; 
  align-items: flex-start;
  margin-top: 30px;
  border-radius: 15px;
  font-size: 24px;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  padding: 20px; /* Add some padding to create space between the text and the border */
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderArea = styled.div`
  position: relative;
`;

function Tv() {
  const { data: tvShowList, isLoading } = useQuery<IGetMoviesResult>(
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
            bgphoto={makeImagePath(tvShowList?.results[1].backdrop_path || "")}
          >
            <BannerContent>
              <RankTitle>TV쇼 순위</RankTitle>
              <RankBox>
                {tvShowList?.results.slice(0, 5).map((show, index) => (
                  <Title key={show.id}>
                    {index + 1}. {show.name}
                  </Title>
                ))}
              </RankBox>
            </BannerContent>
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
