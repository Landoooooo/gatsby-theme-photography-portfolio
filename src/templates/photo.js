import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import {
  FaChevronLeft,
  FaChevronRight,
  FaShare,
  FaPlay,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLink,
} from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import Modal from "react-modal"

export const query = graphql`
  query($slug: String!) {
    contentfulPhoto(urlName: { eq: $slug }) {
      image {
        file {
          url
        }
      }
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  display: ${props => (props.share ? "flex" : null)};
  align-content: ${props => (props.share ? "center" : null)};
  justify-content: ${props => (props.share ? "space-around" : null)};

  p {
    font-size: 0.8rem;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`
const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 75%;
  img {
    height: auto;
    max-height: 100vh;
    width: 100%;
    margin-bottom: 0;
  }
`

const Arrows = styled.div`
  position: absolute;
  top: 45vh;

  right: ${props => (props.right ? "-6px" : "null")};
  left: ${props => (props.left ? "-6px" : "null")};
`

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const customStyles = {
  content: {
    top: "17%",
    left: "92%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const Photo = props => {
  useEffect(() => {}, [])
  const [modelIsOpen, setModal] = useState(false)
  const { slug, total, position, prev, next } = props.pageContext

  return (
    <Container>
      <div style={{ width: "10%" }}>
        <Icons>
          <FaPlay />
          <span>{`${position} / ${total}`}</span>
        </Icons>
        <Arrows left>
          <StyledLink
            to={prev !== null ? `/gallery/${prev}` : `/gallery/${slug}`}
          >
            <FaChevronLeft size="4rem" />
          </StyledLink>
        </Arrows>
      </div>
      <PhotoContainer>
        <img
          alt="photograph"
          src={`https:${props.data.contentfulPhoto.image.file.url}`}
        />
      </PhotoContainer>
      <div style={{ width: "10%" }}>
        <Icons>
          <FaShare size="1.5rem" onClick={() => setModal(!modelIsOpen)} />
          <StyledLink to="/">
            <AiOutlineClose size="1.5rem" />
          </StyledLink>
        </Icons>
        <Modal
          isOpen={modelIsOpen}
          style={customStyles}
          onRequestClose={() => setModal(false)}
        >
          <div>
            <StyledLink share>
              <FaFacebookF />
              <p>Share on Facebook</p>
            </StyledLink>
            <StyledLink share>
              <FaTwitter />
              <p>Share on Twitter</p>
            </StyledLink>
            <StyledLink share>
              <FaPinterestP />
              <p>Share on Pinterest</p>
            </StyledLink>
            <StyledLink share>
              <FaLink />
              <p>Copy link</p>
            </StyledLink>
          </div>
        </Modal>
        <Arrows right>
          <StyledLink
            to={next !== null ? `/gallery/${next}` : `/gallery/${slug}`}
          >
            <FaChevronRight size="4rem" />
          </StyledLink>
        </Arrows>
      </div>
    </Container>
  )
}

export default Photo
