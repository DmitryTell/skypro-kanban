import { FC } from "react";

import { categoryProps } from "./lib";
import { ICategory } from "./interfaces";
import { CategoryIconTaskStyles } from "./styled";


export const CategoryIconTask: FC<ICategory> = ({ topic }) => (
    <CategoryIconTaskStyles
        $backgroundColor={ categoryProps[topic].$backgroundColor }
        $fontWeight={ categoryProps[topic].$fontWeight }
        $fontColor={ categoryProps[topic].$fontColor }
    >
        { topic }
    </CategoryIconTaskStyles>
);