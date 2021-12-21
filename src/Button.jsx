// ****** Dynamic values

const Button = ({ color, onClick, children }) => {
    return (
      <Wrapper onClick={onClick} color={color}>
        {children}
      </Wrapper>
    );
  }
  const Wrapper = styled.button`
    color: ${props => props.color};
    padding: 16px 24px;
  `;

  export default Button;

//   ****** Css Variables

//   const Button = ({ color, onClick, children }) => {
//     return (
//       <Wrapper onClick={onClick} style={{ '--color': color }}>
//         {children}
//       </Wrapper>
//     );
//   }
//   const Wrapper = styled.button`
//     color: var(--color);
//     padding: 16px 24px;
//   `;


// ****** Another example - check isCurrent which is a dynamic value

// import { Map, Save, ShoppingCart } from 'react-feather';

// function IconButton({
//   icon,
//   children,
//   isCurrent,
//   ...delegated
// }) {
  
//   return (
//     <ButtonWrapper
//       {...delegated}
//     >
//       <Icon isCurrent={isCurrent}>
//         {icon}
//       </Icon>
//       {children}
//     </ButtonWrapper>
//   );
// }

// const ButtonWrapper = styled.button `
//   background: white;
//   border-radius: 8px;
//   border: 2px solid hsl(0deg 0% 80%);
//   width: 90px;
//   height: 90px;
// `

// const Icon = styled.span `
// display: block;
// color: ${props => props.isCurrent && 'deeppink'}
// `

// function ButtonGroup() {
//   return (
//     <GroupWrapper>
//       <IconButton isCurrent icon={<Map />}>
//         Navigation
//       </IconButton>
//       <IconButton icon={<Save />}>
//         Save Route
//       </IconButton>
//       <IconButton icon={<ShoppingCart />}>
//         View Cart
//       </IconButton>
//     </GroupWrapper>
//   );
// }

// const GroupWrapper = styled.div `
//   display: flex;
//   gap: 8px;
//   justify-content: center;
// `
// render(<ButtonGroup />)