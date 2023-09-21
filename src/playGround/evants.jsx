import { Button } from "@mui/material";
const foo = () => {
    console.log("click");
};
const Myevent = () => {
    return (
        <Button variant="contained" onClick={foo}>
            press
        </Button>
    );
};
export default Myevent;
