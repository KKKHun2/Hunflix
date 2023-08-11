import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  PathMatch,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";
import SearchItem from "../components/SearchItem";


const Wrapper = styled.div`
  padding: 11rem 6rem 0;
  background-color: ${props => props.theme.color.secondary};
`;

const SearchWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 17.4rem);
`;

const SearchForm = styled.form`
  width: 100%;
  padding-bottom: 2rem;
  color: #fff;
  z-index: 0;
`;

const Input = styled.input`
  padding: 0.5rem 0.5rem;
  color:  ${props => props.theme.color.text};
  font-size: 2rem;
  border-radius: 10px;
  background-color: ${props => props.theme.color.background};
  border: 2px solid ${props => props.theme.color.text};
  z-index: 1;
  transform-origin: left center;
`;
const InputSub = styled.p`
  display: inline-block;
  color:  ${props => props.theme.color.text};
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: 450;
  vertical-align: bottom;
  .sub{
    font-weight: 800;
    font-size: 2rem;
  }
`;

interface ISearchForm {
  searchKeyword: string;
}

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { register, handleSubmit } = useForm<ISearchForm>({
    defaultValues: {
      searchKeyword: keyword || "",
    },
  });

  const navigate = useNavigate();
  const onValid = (data: ISearchForm) => {
    navigate(`/search?keyword=${data.searchKeyword}`);
  };

  const bigMatch: PathMatch<string> | null = useMatch(`search/:menuName/:id`);

  return (
    <Wrapper>
        <SearchForm onSubmit={handleSubmit(onValid)}>
          <Input type="text" {...register("searchKeyword")} />
          <InputSub><span className="sub">"{keyword}"</span>으로 검색한 결과입니다.</InputSub>
        </SearchForm>
      <SearchWrap>{keyword && <SearchItem keyword={keyword} />}</SearchWrap>
      <AnimatePresence>
        {bigMatch ? (
          <Modal
            dataId={Number(bigMatch?.params.id)}
            listType={bigMatch?.params.menuName || ""}
            menuName={"search"}
            requestUrl={bigMatch?.params.menuName || ""}
            returnUrl={`/search?keyword=${keyword}`}
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Search;