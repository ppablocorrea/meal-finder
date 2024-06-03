import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { MealDetails } from "../types";

type Props = {
  data: MealDetails;
};

const joinIngredientes = (data: MealDetails) => {
  let ingredientes = [];
  for (let index = 1; index < 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingredient !== "") {
      ingredientes.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredientes;
};

function RecipeModalContent({ data }: Props) {
  const ingredientes = joinIngredientes(data);
  console.log(ingredientes);
  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          alt={data.strMeal}
          src={data.strMealThumb}
          borderRadius="lg"
          width="100%"
        />
        <Heading mt={4} mb={4} size="md">
          Ingredientes
        </Heading>
        <OrderedList>
          {ingredientes.map((i) => (
            <ListItem key={i}>{i}</ListItem>
          ))}
        </OrderedList>
        <Text whiteSpace="pre-line" mt={4}>
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
