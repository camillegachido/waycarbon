import { extractParagraphTexts } from '../../../../common/utils';
import { Container, Paragraph } from './index.styled';

interface Props {
  content: string;
}

export const BlogContent = ({ content }: Props) => {
  const paragraphs = extractParagraphTexts(content);

  return (
    <Container>
      {paragraphs.map((paragraph, i) => (
        <Paragraph key={'content-' + i}>{paragraph}</Paragraph>
      ))}
    </Container>
  );
};
