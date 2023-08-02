import { Link, useMatch,useNavigate} from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { DarkMode } from '../DarkMode';
import MySvgIcon from '../components/MySvgIcon'
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  background-color: ${props => props.theme.color.background};;
  color:${props => props.theme.color.text};
  z-index:100;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
  color: ${props => props.theme.color.text};;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
  &:hover {
    color: ${(props) => props.theme.color.point};
  }
`;
const Search = styled.form`
  color: ${(props) => props.theme.color.text};
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;
const Input = styled(motion.input)`
  transform-origin: right center;
  cursor:pointer;
  position: absolute;
  right: 0px;
  width:12rem;
  padding: 5px 10px;
  padding-left: 35px;
  z-index: -1;
  color: white;
  font-size: 0.7rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.color.neutral};
`;

const DarkModeButton = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 50%;
  width: fit-content;
  justify-self: end;
  margin-right: 30px;
  background-color: ${props => props.theme.color.neutral};
  color: ${props => props.theme.color.text};
  transition: 0.2s ease;
  :hover {
    scale: 1.2;
  }
  :active {
    scale: 0.9;
  }
`;



interface IForm {
    keyword: string;
  }

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const { handleChangeDarkMode, isDark } = useContext(DarkMode);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
  };
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };
  
  useMotionValueEvent(scrollY, "change", (y) => {
    if (y < 0.1) navAnimation.start("top");
    else navAnimation.start("scroll");
    });

  return (
    <Nav>
      <Col>
      <Link to="/">
        <MySvgIcon />
        </Link>
        <Items>
          <Item>
            <Link to="/">
              Home {homeMatch?.pattern.end && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/tv">
              Tv Shows {tvMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -161 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
          {...register("keyword", { required: true, minLength: 2 })}
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
            placeholder="Search for movie or tv show !"
          />
        </Search>
      </Col>
      <DarkModeButton onClick={handleChangeDarkMode}>{isDark ? 'DARK' : 'LIGHT'}</DarkModeButton>
    </Nav>
  );
}
export default Header;