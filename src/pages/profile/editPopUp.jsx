import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { updateServer } from "./updateOnServer";
import { validateProfile } from "../../validation/validateProfile";
import { userData } from "../../store/userDataSlice";
const EditPopUp = ({ dispatch }) => {
    const [open, setOpen] = useState(false);
    const [valError, setValError] = useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        dispatch(userData());
        setOpen(false);
    };
    const [inputsValue, setInputsValue] = useState({
        first: "",
        middle: "",
        last: "",
        phone: "",
        url: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
    });
    const handleInputsChange = (e) => {
        setInputsValue((currentState) => ({
            ...currentState,
            [e.target.id]: e.target.value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const error = validateProfile(inputsValue);
            if (error) {
                setValError(error);
                return;
            }
            updateServer(inputsValue);
            handleClose();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <EditIcon />
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle textAlign="center">Edit your profile</DialogTitle>
                <DialogContent>
                    <TextField
                        id="first"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="First name"
                        fullWidth
                        variant="standard"
                        error={valError.first}
                        helperText={valError.first ? valError.first : ""}
                    />
                    <TextField
                        id="middle"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="Middle name"
                        fullWidth
                        variant="standard"
                        error={valError.middle}
                        helperText={valError.middle ? valError.middle : ""}
                    />
                    <TextField
                        id="last"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="Last name"
                        fullWidth
                        variant="standard"
                        error={valError.last}
                        helperText={valError.last ? valError.last : ""}
                    />
                    <TextField
                        id="phone"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="Phone number"
                        fullWidth
                        variant="standard"
                        error={valError.phone}
                        helperText={valError.phone ? valError.phone : ""}
                    />
                    <TextField
                        id="url"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="url"
                        fullWidth
                        variant="standard"
                        error={valError.url}
                        helperText={valError.url ? valError.url : ""}
                    />
                    <TextField
                        id="state"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="State"
                        fullWidth
                        variant="standard"
                        error={valError.state}
                        helperText={valError.state ? valError.state : ""}
                    />
                    <TextField
                        id="country"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="Country"
                        fullWidth
                        variant="standard"
                        error={valError.country}
                        helperText={valError.country ? valError.country : ""}
                    />
                    <TextField
                        id="city"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="City"
                        fullWidth
                        variant="standard"
                        error={valError.city}
                        helperText={valError.city ? valError.city : ""}
                    />
                    <TextField
                        id="street"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="Street"
                        fullWidth
                        variant="standard"
                        error={valError.street}
                        helperText={valError.street ? valError.street : ""}
                    />
                    <TextField
                        id="houseNumber"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="House number"
                        fullWidth
                        variant="standard"
                        error={valError.houseNumber}
                        helperText={valError.houseNumber ? valError.houseNumber : ""}
                    />
                    <TextField
                        id="zip"
                        onChange={handleInputsChange}
                        autoFocus
                        margin="dense"
                        label="ZIP code"
                        fullWidth
                        variant="standard"
                        error={valError.zip}
                        helperText={valError.zip ? valError.zip : ""}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>submit</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};
export default EditPopUp;
