export const ColoredMessage = (props:any) => {
    const {color,children} = props;
    const contentStyle = {
        color, 
        fontSize: "20px"
    };
    return <p style = {contentStyle}>{children}</p>;
};