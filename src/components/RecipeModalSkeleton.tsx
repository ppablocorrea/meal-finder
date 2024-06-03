import { Container, SkeletonText } from "@chakra-ui/react";

type Props = {};

function RecipeModalSkeleton({}: Props) {
  return (
    <Container>
      <SkeletonText mb={5} mt={4} noOfLines={1} skeletonHeight={8} />
      <SkeletonText borderRadius={200} noOfLines={1} skeletonHeight={280} />
      <SkeletonText spacing={4} noOfLines={5} />
    </Container>
  );
}

export default RecipeModalSkeleton;
