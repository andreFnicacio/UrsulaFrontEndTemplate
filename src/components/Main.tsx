import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type MainType = {
  className?: string;
};

const NavigationDivider = styled.div`
  height: 2.638rem;
  width: 0.138rem;
  position: absolute;
  margin: 0 !important;
  top: 7.519rem;
  right: -0.087rem;
  border-radius: var(--br-12xs);
  background-color: var(--color-darkblue-100);
  z-index: 2;
`;
const Layout = styled.div`
  height: 2.638rem;
  width: 0.138rem;
  position: absolute;
  margin: 0 !important;
  top: 11.994rem;
  right: -0.087rem;
  border-radius: var(--br-12xs);
  background-color: var(--color-darkblue-100);
  z-index: 2;
`;
const BgMenuLateral = styled.div`
  width: 12.944rem;
  height: 64rem;
  position: relative;
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-silver-100);
  box-sizing: border-box;
  display: none;
`;
const Layer2Icon = styled.img`
  width: 1.244rem;
  height: 0.688rem;
  position: relative;
  flex-shrink: 0;
`;
const LogoLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem var(--padding-5xs-3);
`;
const Logoa1Icon = styled.img`
  height: 2.106rem;
  width: 5.331rem;
  position: relative;
  object-fit: cover;
  flex-shrink: 0;
  cursor: pointer;
`;
const MenuLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg-2);
  cursor: pointer;
  z-index: 1;
`;
const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-6xs);
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 2.281rem;
  background-color: var(--color-darkblue-200);
  width: 8.925rem;
  height: 2.638rem;
  z-index: 1;
`;
const Upload = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0.588rem;
  left: 0rem;
  line-height: 1.506rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.431rem;
  height: 1.506rem;
  z-index: 2;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  height: 2.638rem;
  position: relative;
`;
const UploadArea = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: var(--color-whitesmoke-200);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 0.569rem;
  left: 1.044rem;
  width: 1.094rem;
  height: 1.425rem;
  z-index: 2;
`;
const UploadAreaParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 2.281rem;
  width: 8.925rem;
  height: 2.638rem;
`;
const Content = styled.div`
  width: 12.431rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl-4);
`;
const BgMenuLateralParent = styled.div`
  width: 12.944rem;
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-silver-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-19xl) var(--padding-8xl) var(--padding-769xl);
  gap: var(--gap-28xl-2);
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-6xl);
    padding-bottom: var(--padding-493xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-314xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-5xl);
  }
`;
const MainRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-mulish);
`;

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <MainRoot className={className}>
      <NavigationDivider />
      <Layout />
      <BgMenuLateralParent>
        <BgMenuLateral />
        <Brand>
          <MenuLogo onClick={onMenuLogoContainerClick}>
            <LogoLayer>
              <Layer2Icon loading="lazy" alt="" src="/layer-2.svg" />
            </LogoLayer>
            <Logoa1Icon
              loading="lazy"
              alt=""
              src="/logoa-1@2x.png"
              onClick={onMenuLogoContainerClick}
            />
          </MenuLogo>
        </Brand>
        <Content>
          <RectangleParent>
            <FrameChild />
            <Upload>Upload</Upload>
          </RectangleParent>
          <RectangleParent>
            <Upload>Home</Upload>
            <UploadAreaParent>
              <UploadArea />
              <FrameItem loading="lazy" alt="" src="/group-14.svg" />
            </UploadAreaParent>
          </RectangleParent>
        </Content>
      </BgMenuLateralParent>
    </MainRoot>
  );
};

export default Main;
