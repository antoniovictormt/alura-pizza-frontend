import { PizzaContainer, PizzaDescription } from "./styles";

export type TPlatesType = {
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
}

export function Plates({
  description,
  image,
  name,
  price,
}: TPlatesType) {
  const pizzaImage = new URL(image, import.meta.url).href

  return (
    <PizzaContainer>
      <div>
        <img src={pizzaImage} alt={description} />
      </div>

      <PizzaDescription>
        <p>
          <strong>
            {name}
          </strong>
        </p>

        <p>
          {description}
        </p>

        <p>
          <strong>
            R$ {price}
          </strong>
        </p>
      </PizzaDescription>
    </PizzaContainer>
  )
}
