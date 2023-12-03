import { Button, Text, Wrapper } from './Homepage.styled';

export const Homepage = () => {
  return (
    <>
      <Wrapper>
        <Text>Hello! Do you want to rent a car in Ukraine?</Text>
        <Button to={'/catalog'}>Click here</Button>
      </Wrapper>
    </>
  );
};
