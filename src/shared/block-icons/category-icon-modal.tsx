import { FC } from "react";

import { categoryProps } from "./lib";
import { ICategory } from "./interfaces";
import { CategoryIconModalStyles } from "./styled";


export const CategoryIconModal: FC<ICategory> = ({ topic }) => (
    <CategoryIconModalStyles
        $backgroundColor={ categoryProps[topic].$backgroundColor }
        $fontWeight={ categoryProps[topic].$fontWeight }
        $fontColor={ categoryProps[topic].$fontColor }
    >
        { topic }
    </CategoryIconModalStyles>
);