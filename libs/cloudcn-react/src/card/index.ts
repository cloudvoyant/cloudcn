// libs/cloudcn-react/src/card/index.ts
import { CardRoot } from './root';
import { CardHeader } from './header';
import { CardBody } from './body';
import { CardFooter } from './footer';
import { CardTitle } from './title';
import { CardDescription } from './description';
import { CardCover } from './cover';

export { CardRoot, type CardProps } from './root';
export { CardHeader, type CardHeaderProps } from './header';
export { CardBody, type CardBodyProps } from './body';
export { CardFooter, type CardFooterProps } from './footer';
export { CardTitle, type CardTitleProps } from './title';
export { CardDescription, type CardDescriptionProps } from './description';
export { CardCover, type CardCoverProps } from './cover';

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
  Cover: CardCover,
};
