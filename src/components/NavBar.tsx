import React from "react";
import styled from "styled-components";

type Props = {
  navBarItems: string[];
};

const NavBar: React.FC<Props> = (props) => {
  const { navBarItems } = props;
  return (
    <StyledWraper>
      <h1 className="navigation__title">Title</h1>
      <div className="navigation__list">
        {navBarItems.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  .navigation {
    &__title {
      color: tomato;
    }

    &__list {
      color: tomato;
    }
  }
`;

export default NavBar;
