import { componentsTestId } from '../../../common/constants/testid';
import { LoaderContent } from './index.styled';

export const Loader = () => {
  return (
    <LoaderContent
      data-testid={componentsTestId.loader.container}
      className="loader"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderContent>
  );
};
