import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDetailData, IDetailInfo, IGenre } from "../api";
import { makeImagePath } from "../utils";
import ReactStars from "react-stars";
import { AiOutlineClose } from "react-icons/ai";
import ModalInfoItem from "./ModalItem"

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0;
  z-index: 99;
`;

const ModalBox = styled(motion.div)`
  position: fixed;
  top: 7rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50%;
  min-width: 60rem;
  height: 78%;
  overflow: auto;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  
  z-index: 100;
`;

const ModalCover = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
  background-size: cover;
  background-position: center center;
  .closeModal {
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #181818;
      scale: 1.3;
    }
  }

`;

const ModalCoverTitle = styled.div`
  position: absolute;
  left: calc(30% + 3.5rem);
  bottom: 2rem;
  float: right;
  font-weight: 700;

`;

const ModalTitle = styled.h2`
  font-size: 3.3rem;
  color:#eee4e4;
`;

const ModalSmallTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color:#eee4e4;
`;

const ModalContents = styled.div`
  position: relative;
  padding: 2rem 3rem 0 3rem;
  font-weight: 100;

`;

const ModalImage = styled.div<{ poster_path: string | null }>`
  float: left;
  width: 30%;
  margin-top: -15rem;
  img {
    width: 100%;
  }
  background-image: ${({ poster_path }) =>
    poster_path ? `url(${makeImagePath(poster_path, "w500")})` : "none"};
`;

const ModalInfoTitle = styled.div`
  display: none;
`;

const ModalTextCnt = styled.div`
  float: left;
  margin-top: -25px;
  width: 70%;
  padding-left: 2rem;
`;

const ModalInfo = styled.ul`
  font-size: 1rem;
  line-height: 2.7rem;
  li {
    float: left;
    .rating {
      position: relative;
      display: inline-block;
      margin-top: -2px;
      overflow: hidden;
    }
    .ratingValue {
      display: inline-block;
      padding-left: 0.4rem;
      vertical-align: top;
    }
  }
  li ~ li {
    position: relative;
    margin-left: 1.3rem;
    padding-left: 1.2rem;
  }
  li ~ li:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: #7e7e7e;
  }

`;

const ModalTagLine = styled.h3`
  position: relative;
  margin-top: -25px;
  margin-bottom: 0.8rem;
  padding-left: 1rem;
  font-size: 1rem;
  &:before {
    content: "";
    position: absolute;
    width: 0.3rem;
    height: 1.2rem;
    left: 0;
    top: 40%;
    transform: translateY(-50%);
    background-color: #ccc;
  }


`;

const ModalOverView = styled.p`
  margin-bottom: 2rem;
  margin-top: -10px;
  font-size: 1.2rem;
  line-height: 2rem;

`;

const ModalCategory = styled.ul`
  padding: 2rem 0;
  clear: both;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const ModalItem = styled.li`
  display: block;
  margin-bottom: 2rem;
`;

const ItemTitle = styled.span`
  float: left;
  width: 10rem;
  margin-right: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
 
`;

const ItemValue = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  .channel {
    float: left;
    height: 2rem;
  }
  .channel ~ .channel {
    margin-left: 2rem;
  }
`;

const Clear = styled.div`
  clear: both;
  margin-bottom: 2rem;
`;

interface IModal {
  dataId: number;
  listType: string;
  menuName: string;
  requestUrl: string;
  returnUrl?: string;
}

export default function Modal({
  dataId,
  listType,
  menuName,
  requestUrl,
  returnUrl,
}: IModal) {
  const navigate = useNavigate();
  const modalMatch = useMatch(`/${menuName}/${listType}/:id`);
  const onOverlayClicked = () => {
    if (menuName === "home") menuName = "";

    if (returnUrl) {
      navigate(returnUrl);
    } else {
      navigate(`/${menuName}`);
    }
  };

  const { data } = useQuery<IDetailInfo>(
    [listType + dataId, "detail" + dataId],
    () => getDetailData(requestUrl, dataId) || null
  );

  const getYear = (date: string) => {
    if (date) {
      return date.split("-")[0];
    } else {
      return "";
    }
  };

  const getGenreToString = (arr: IGenre[]): string => {
    if (arr && arr.length > 0) {
      return (
        arr.map((g, idx) => {
          return idx + 1 === arr.length ? `${g.name}` : `${g.name}`;
        }) + ""
      );
    }
    return "";
  };

  return (
    <>
      <Overlay
        onClick={onOverlayClicked}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <ModalBox layoutId={modalMatch?.params.id + listType}>
        {
          <>
            <ModalCover
              style={{
                backgroundImage: `linear-gradient(to top, black, transparent),url(${makeImagePath(
                  data?.backdrop_path || "",
                  "w500"
                )})`,
              }}
            >
              <AiOutlineClose
                onClick={onOverlayClicked}
                className="closeModal"
                size={"2rem"}
              />
              <ModalCoverTitle>
                <ModalTitle>
                  {data?.title ? data?.title : data?.name}
                </ModalTitle>
                <ModalSmallTitle>
                  {data?.original_title ? data?.original_title : ""}
                </ModalSmallTitle>
              </ModalCoverTitle>
            </ModalCover>
            <ModalContents>
            <ModalImage poster_path={data?.poster_path || ""}>
                {data?.poster_path && <img src={makeImagePath(data.poster_path, "w500")} alt="poster" />}
            </ModalImage>
              <ModalTextCnt>
                <ModalInfoTitle>
                  <ModalTitle>
                    {data?.title ? data?.title : data?.name}
                  </ModalTitle>
                  <ModalSmallTitle>
                    {(data?.original_title === data?.title) ? "": data?.original_title}
                  </ModalSmallTitle>
                </ModalInfoTitle>
                <ModalInfo>
                  <ModalInfoItem datas={getYear(data?.release_date || "")} />
                  <ModalInfoItem datas={getYear(data?.first_air_date || "")} />
                  <ModalInfoItem
                    datas={data?.runtime ? `${data?.runtime}분` : ""}
                  />
                  <ModalInfoItem datas={getGenreToString(data?.genres || [])} />
                  {data?.vote_average ? (
                    <li>
                      <ReactStars
                        count={5}
                        value={data?.vote_average ? data?.vote_average / 2 : 0}
                        color1="#E6E6E6"
                        color2="#FFCC33"
                        half
                        size={20}
                        edit={false}
                        className="rating"
                        
                      />
                      <span className="ratingValue">
                        ({data?.vote_average.toFixed(1)})
                      </span>
                    </li>
                  ) : null}
                </ModalInfo>
                <ModalCategory>
                  {/* 줄거리 */}
                  <ModalItem>
                    {data?.tagline ? (
                      <ModalTagLine>{data?.tagline}</ModalTagLine>
                    ) : null}
                    <ModalOverView title={data?.overview}>
                      {data && data?.overview.length > 390
                        ? data?.overview.slice(0, 390) + "..."
                        : data?.overview}
                    </ModalOverView>
                  </ModalItem>

                  {/* tv - 송출 방송사 및 vod사 */}
                  {data?.networks && data?.networks.length > 0 ? (
                    <>
                      <ModalItem>
                        <ItemTitle>채널 </ItemTitle>
                        <ItemValue>
                          {data?.networks.map((n) => (
                            <img
                              className="channel"
                              key={n.id}
                              alt={n.name}
                              src={makeImagePath(n.logo_path || "none")}
                            />
                          ))}
                        </ItemValue>
                      </ModalItem>
                      <Clear />
                    </>
                  ) : null}
                </ModalCategory>
              </ModalTextCnt>
            </ModalContents>
          </>
        }
      </ModalBox>
    </>
  );
}