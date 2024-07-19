interface IProps {
    $backgroundColor: string;
    $fontWeight: string;
    $fontColor: string;
}

interface ICategoryProps {
    [key: string]: IProps;
}

export const categoryProps: ICategoryProps = {
    'Web Design': {
        $backgroundColor: "#FFE4C2",
        $fontWeight: "600",
        $fontColor: "#FF6D00",
    },
    'Research': {
        $backgroundColor: "#B4FDD1",
        $fontWeight: "700",
        $fontColor: "#06B16E",
    },
    'Copywriting': {
        $backgroundColor: "#E9D4FF",
        $fontWeight: "600",
        $fontColor: "#9A48F1",
    },
};