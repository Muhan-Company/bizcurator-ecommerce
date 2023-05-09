interface CancelProps {
    index: number;
}

const Cancel: React.FC<CancelProps> = ({ index }) => {
    // props.index를 사용하여 index 값에 접근할 수 있습니다.
    return <div>Cancel Component {index}</div>;
};

export default Cancel;