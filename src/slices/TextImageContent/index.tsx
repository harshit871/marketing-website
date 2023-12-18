import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextImageContent`.
 */
export type TextImageContentProps =
  SliceComponentProps<Content.TextImageContentSlice>;

/**
 * Component for "TextImageContent" Slices.
 */
const TextImageContent = ({ slice }: TextImageContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_image_content (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default TextImageContent;
